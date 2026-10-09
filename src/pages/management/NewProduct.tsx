import React, { useState, ChangeEvent, FormEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");
  const [stock, setStock] = useState<number | "">("");
  const [photo, setPhoto] = useState<string>("");

 
  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhoto(reader.result);
        }
      };
    }
  };

  // Form submit handler
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !price || stock === "" || !photo) return;
    
    // Add product dispatch / API call logic here
    console.log({ name, price, stock, photo });
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="product-management">
        <article>
          <form onSubmit={submitHandler}>
            <h2>New Product</h2>

            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value === "" ? "" : Number(e.target.value))
                }
                required
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) =>
                  setStock(e.target.value === "" ? "" : Number(e.target.value))
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
                required
              />
            </div>

            {photo && <img src={photo} alt="New Product Preview" />}

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;