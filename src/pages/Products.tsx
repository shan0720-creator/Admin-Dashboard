import React, { useState, type ReactElement } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import TableHOC from '../components/TableHOC';
import type { Column } from 'react-table';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'Photo',
    accessor: 'photo',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Stock',
    accessor: 'stock',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const img1 = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"; // Macbook Pro
const img2 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"; // Red Nike Shoes
const img3 = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"; // Headphones
const img4 = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"; // Smartwatch
const img5 = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80"; // Hardcover Notebook
const img6 = "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80"; // Wireless Earbuds
const img7 = "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=300&q=80"; // Gaming Keyboard


 const arr: DataType[] = [
  {
    photo: <img src={img1} alt="Macbook Pro" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "Macbook Pro",
    price: 1999,
    stock: 12,
    action: <Link to="/admin/product/macbook">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Puma Shoes" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "Puma Running Shoes",
    price: 89,
    stock: 25,
    action: <Link to="/admin/product/puma-shoes">Manage</Link>,
  },
  {
    photo: <img src={img3} alt="Sony Headphones" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "Sony WH-1000XM4",
    price: 348,
    stock: 8,
    action: <Link to="/admin/product/sony-headphones">Manage</Link>,
  },
  {
    photo: <img src={img4} alt="Apple Watch" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "Apple Watch Series 9",
    price: 399,
    stock: 15,
    action: <Link to="/admin/product/apple-watch">Manage</Link>,
  },
  {
    photo: <img src={img5} alt="iPad Air" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "iPad Air 5th Gen",
    price: 599,
    stock: 6,
    action: <Link to="/admin/product/ipad-air">Manage</Link>,
  },
  {
    photo: <img src={img6} alt="Logitech Mouse" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "Logitech MX Master 3S",
    price: 99,
    stock: 40,
    action: <Link to="/admin/product/logitech-mouse">Manage</Link>,
  },
  {
    photo: <img src={img7} alt="Keychron Keyboard" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />,
    name: "Keychron K2 Keyboard",
    price: 79,
    stock: 18,
    action: <Link to="/admin/product/keychron-k2">Manage</Link>,
  },
];
 


const Products = () => {
  const [data] = useState<DataType[]>(arr);

  // Added 5th parameter `true` to display pagination buttons
  const Table = TableHOC<DataType>(
    columns,
    data,
    'dashboard-product-box',
    'Products',
    true
  );

  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      <main>
        <Table />
      </main>
      <Link to="/admin/products/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;