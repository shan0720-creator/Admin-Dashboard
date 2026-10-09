import React, { useState, type ReactElement } from 'react';
import type { Column } from 'react-table';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import AdminSidebar from '../components/AdminSidebar';
import TableHOC from '../components/TableHOC';

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'Avatar',
    accessor: 'avatar',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

const imgStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const arr: DataType[] = [
  {
    avatar: (
      <img
        src="https://randomuser.me/api/portraits/women/1.jpg"
        alt="Emily"
        style={imgStyle}
      />
    ),
    name: 'Emily Parker',
    gender: 'female',
    email: 'emily.parker@example.com',
    role: 'user',
    action: (
      <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'red' }}>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        src="https://randomuser.me/api/portraits/men/2.jpg"
        alt="John"
        style={imgStyle}
      />
    ),
    name: 'John Doe',
    gender: 'male',
    email: 'john.doe@example.com',
    role: 'admin',
    action: (
      <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'red' }}>
        <FaTrash />
      </button>
    ),
  },
];

const Customer = () => {
  const [rows] = useState<DataType[]>(arr);

  // Directly pass `rows` to TableHOC without useCallback syntax errors
  const Table = TableHOC<DataType>(
    columns,
    rows,
    'dashboard-product-box',
    'Customers',
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

export default Customer;