import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { DoughnutChart, PieChart } from '../../components/Charts'
import { categories } from '../../assets/data.json'

const PieCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>

        {/* Order Fulfillment Ratio */}
        <section>
          <div>
            <PieChart
              labels={['Processing', 'Shipped', 'Delivered']}
              data={[12, 9, 20]}
              backgroundColor={[
                'hsl(110, 80%, 80%)',
                'hsl(110, 80%, 50%)',
                'hsl(110, 40%, 50%)',
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>

        {/* Product Categories Ratio (Dynamically Mapped from data.json) */}
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              bgColor={categories.map(
                (i) => `hsl(${i.value * 4}, 80%, 50%)`
              )}
              legends={true}
              offset={[20, 0, 0, 80]}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        {/* Stock Availability */}
        <section>
          <div>
            <DoughnutChart
              labels={['In Stock', 'Out of Stock']}
              data={[40, 20]}
              bgColor={['hsl(269, 80%, 40%)', 'rgb(255, 99, 132)']}
              legends={false}
              offset={[0, 80]}
              cutout={'70%'}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        {/* Revenue Distribution */}
        <section>
          <div>
            <DoughnutChart
              labels={[
                'Marketing Cost',
                'Discount',
                'Burnt',
                'Production Cost',
                'Net Profit',
              ]}
              data={[32, 18, 5, 20, 25]}
              bgColor={[
                'hsl(110, 80%, 40%)',
                'hsl(190, 80%, 40%)',
                'hsl(360, 80%, 40%)',
                'hsl(40, 80%, 40%)',
                'hsl(260, 80%, 40%)',
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        {/* Users Age Group */}
        <section>
          <div>
            <PieChart
              labels={[
                'Teenager (Below 20)',
                'Adult (20-40)',
                'Older (Above 40)',
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                'hsl(10, 80%, 80%)',
                'hsl(10, 80%, 50%)',
                'hsl(10, 40%, 50%)',
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>

        {/* Admin vs Customers */}
        <section>
          <div>
            <DoughnutChart
              labels={['Admin', 'Customers']}
              data={[4, 250]}
              bgColor={['hsl(335, 100%, 38%)', 'hsl(44, 98%, 50%)']}
              offset={[0, 80]}
            />
          </div>
          <h2>Users Type</h2>
        </section>
      </main>
    </div>
  )
}

export default PieCharts