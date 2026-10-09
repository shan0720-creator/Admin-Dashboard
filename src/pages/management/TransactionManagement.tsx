import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { OrderItemType, OrderType } from "../types";

const defaultOrder: OrderType = {
  name: "Char Charan",
  address: "77 Black Street",
  city: "Neyork",
  state: "Nevada",
  country: "US",
  pinCode: 242433,
  status: "Processing",
  subtotal: 4000,
  discount: 1200,
  shippingCharges: 0,
  tax: 200,
  total: 4000 + 200 - 1200,
  orderItems: [
    {
      name: "Puma Shoes",
      photo:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
      price: 2000,
      quantity: 2,
      _id: "asdndskd",
    },
  ],
  _id: "sajknaskd",
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      {"$"}{price} X {quantity} = {"$"}{price * quantity}
    </span>
  </div>
);

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>(defaultOrder);

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
    orderItems,
  } = order;

  // Handler to cycle order status: Processing -> Shipped -> Delivered
  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status:
        prev.status === "Processing"
          ? "Shipped"
          : prev.status === "Shipped"
          ? "Delivered"
          : "Delivered",
    }));
  };

  const deleteHandler = () => {
    console.log("Transaction deleted");
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="product-management">
        {/* Left Section: Order Items List */}
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>

          {orderItems.map((i) => (
            <ProductCard
              key={i._id}
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
              _id={i._id}
            />
          ))}
        </section>

        {/* Right Article: Order Info & Status Update */}
        <article className="shipping-info-card">
          <button className="product-delete-btn" onClick={deleteHandler}>
            <FaTrash />
          </button>

          <h1>Order Info</h1>

          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} - ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {"$"}{subtotal}</p>
          <p>Shipping Charges: {"$"}{shippingCharges}</p>
          <p>Tax: {"$"}{tax}</p>
          <p>Discount: {"$"}{discount}</p>
          <p>Total: {"$"}{total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button className="shipping-btn" onClick={updateHandler}>
            Process Status
          </button>
        </article>
      </main>
    </div>
  );
};

export default TransactionManagement;