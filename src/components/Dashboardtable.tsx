import React from 'react';
import TableHOC from './TableHOC';
import type { Column } from 'react-table';

interface DataType {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
  {
    Header: 'Discount',
    accessor: 'discount',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const Table = TableHOC<DataType>(
  columns,
  [],
  'transactionBox',
  'Top Transaction'
);

const Dashboardtable = ({data=[]}: {data: DataType[]}) => {
  return <Table />;
};

export default Dashboardtable;