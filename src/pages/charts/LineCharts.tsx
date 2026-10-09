import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { LineChart } from '../../components/Charts'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>

        {/* Active Users */}
        <section>
          <LineChart
            data={[40, 60, 75, 120, 180, 240, 310, 400, 480, 560, 650, 800]}
            backgroundColor="rgba(53, 162, 235, 0.5)"
            borderColor="rgb(53, 162, 235)"
            label="Users"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>

        {/* Total Products */}
        <section>
          <LineChart
            data={[200, 300, 350, 400, 220, 310, 450, 500, 680, 700, 750, 890]}
            backgroundColor="hsla(269, 100%, 40%, 0.4)"
            borderColor="hsl(269, 80%, 40%)"
            label="Products"
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        {/* Discount Allotted */}
        <section>
          <LineChart
            data={[1200, 1900, 3000, 5000, 2400, 4200, 6100, 7200, 8000, 9500, 11000, 12500]}
            backgroundColor="hsla(120, 100%, 40%, 0.4)"
            borderColor="hsl(120, 80%, 40%)"
            label="Discount"
            labels={months}
          />
          <h2>Discount Allotted</h2>
        </section>

        {/* Total Revenue */}
        <section>
          <LineChart
            data={[12000, 25000, 40000, 38000, 52000, 61000, 75000, 82000, 95000, 105000, 120000, 140000]}
            backgroundColor="hsla(12, 100%, 40%, 0.4)"
            borderColor="hsl(12, 80%, 40%)"
            label="Revenue"
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>
      </main>
    </div>
  )
}

export default LineCharts