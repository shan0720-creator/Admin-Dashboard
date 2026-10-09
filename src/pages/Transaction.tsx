import React, { useState, type ReactElement } from "react";
import type { Column } from "react-table";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Abhinav Jain",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Shantanu Sahay",
    amount: 6999,
    discount: 1000,
    quantity: 6,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Sonam Saha",
    amount: 1200,
    discount: 0,
    quantity: 1,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const Transaction = () => {
  const [rows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Transactions",
    true
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>
        <Table />
      </main>
    </div>
  );
};

export default Transaction;