import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import userimg from '../assets/userimg.png';
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import data from '../assets/data.json';
import { BarChart, DoughnutChart } from '../components/Charts';
import { BiMaleFemale } from 'react-icons/bi';
import TableHOC from '../components/TableHOC';
import type { Column } from 'react-table';

interface DataType {
  id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: string;
}

const columns: Column<DataType>[] = [
  { Header: 'Id', accessor: 'id' },
  { Header: 'Amount', accessor: 'amount' },
  { Header: 'Quantity', accessor: 'quantity' },
  { Header: 'Discount', accessor: 'discount' },
  { Header: 'Status', accessor: 'status' },
];

const TransactionTable = TableHOC<DataType>(
  columns,
  data.transaction,
  'transaction-box',
  'Top Transaction'
);

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userimg} alt="User Avatar" />
        </div>

        <section className="widgetcontainer">
          <WidgetItem
            percent={80}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgb(0,155,255)"
          />
          <WidgetItem
            percent={-14}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={80}
            amount={false}
            value={230000}
            heading="Transactions"
            color="rgb(255, 196, 0)"
          />
          <WidgetItem
            percent={30}
            amount={false}
            value={100000}
            heading="Products"
            color="rgb(76,0,255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[65, 59, 80, 81, 56, 55, 40]}
              data_2={[28, 48, 40, 19, 86, 27, 90]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgba(255, 99, 132, 0.5)"
              bgColor_2="rgba(53, 162, 235, 0.5)"
              horizontal={false}
              labels={[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ]}
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value}, 100%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={['Female', 'Male']}
              data={[12, 19]}
              bgColor={['hsl(340, 100%, 56%)', 'rgba(53, 162, 235, 0.8)']}
              cutout="70%"
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <TransactionTable />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value.toLocaleString()}` : value.toLocaleString()}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255, 255, 255) 0deg
        )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      />
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;