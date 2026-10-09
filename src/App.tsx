import React, { Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Products from './pages/Products'
import Customer from './pages/Customer'
import Transaction from './pages/Transaction'
import Loader from './components/Loader'
const Dashboard  = lazy(()=> import("../src/pages/Dashboard"))
import NewProduct from './pages/management/NewProduct'
import ProductManagement from './pages/management/ProductManagement'
import TransactionManagement from './pages/management/TransactionManagement'
import BarCharts from './pages/charts/BarCharts'
import PieChart from './pages/charts/PieChart'
import LineCharts from './pages/charts/LineCharts'
import Coupon from './components/Coupon'




const App = () => {
  return (
         <Router>
          <Suspense fallback={<Loader/>}>
                <Routes>
              <Route path='/admin/dashboard' element={<Dashboard/>}/>
               <Route path='/admin/product' element={<Products/>}/>
                <Route path='/admin/customer' element={<Customer/>}/>
                 <Route path='/admin/transaction' element={<Transaction/>}/>

                 <Route path="/admin/products/new" element={<NewProduct/>}/>
                  <Route path="/admin/product/:id" element={<ProductManagement/>}/>
                   <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>

                   <Route path="/admin/chart/bar" element={<BarCharts/>}/>
                   <Route path="/admin/chart/pie" element={<PieChart/>}/>
                   <Route path="/admin/chart/line" element={<LineCharts/>}/>
                    <Route path="/admin/app/coupon" element={<Coupon/>}/>


                   

                 
            </Routes>
          </Suspense>
         </Router>
  )
}

export default App