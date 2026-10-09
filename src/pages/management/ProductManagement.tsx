import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaTrash } from "react-icons/fa";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80";

const ProductManagement = () => {
  // Main Saved Product State (Left Card Preview)
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  // Temporary Form States (Right Article Form Inputs)
  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number | "">(price);
  const [stockUpdate, setStockUpdate] = useState<number | "">(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoUpdate(reader.result);
        }
      };
    }
  };

  // Form submit handler to update the product details
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameUpdate || priceUpdate === "" || stockUpdate === "" || !photoUpdate)
      return;

    setName(nameUpdate);
    setPrice(Number(priceUpdate));
    setStock(Number(stockUpdate));
    setPhoto(photoUpdate);
  };

  const deleteHandler = () => {
    // Delete API dispatch logic here
    console.log("Product Deleted");
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="product-management">
        {/* Left Saved Card Preview */}
        <section>
          <strong>ID - sjknaskd</strong>
          <img src={photo} alt={name} />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red"> Not Available</span>
          )}
          <h3>${price}</h3>
        </section>

        {/* Right Form Management */}
        <article>
          <button className="product-delete-btn" onClick={deleteHandler}>
            <FaTrash />
          </button>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>

            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) =>
                  setPriceUpdate(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                required
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) =>
                  setStockUpdate(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                required
              />
            </div>

            <div>
              <label>Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={changeImageHandler}
              />
            </div>

            {photoUpdate && <img src={photoUpdate} alt="New Product Preview" />}

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;