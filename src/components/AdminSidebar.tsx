import React, { useState, useEffect } from 'react'
import type { IconType } from 'react-icons'
import { BsCashCoin } from 'react-icons/bs'
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa'
import {
  RiCoupon3Fill,
  RiCustomerServiceFill,
  RiDashboardFill,
  RiShoppingBag2Fill,
} from 'react-icons/ri'
import { HiMenuAlt4 } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

interface LiProps {
  url: string
  text: string
  Icon: IconType
}

const Li = ({ url, Icon, text }: LiProps) => {
  const location = useLocation()
  const isActive = location.pathname === url

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={url} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon />
        <span>{text}</span>
      </Link>
    </li>
  )
}

const AdminSidebar = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  )

  useEffect(() => {
    const resizeHandler = () => {
      setPhoneActive(window.innerWidth < 1100)
    }
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <>
      {/* Floating Hamburger Icon (Only visible on mobile width) */}
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      {/* Slide-in Sidebar Overlay */}
      <aside
        style={
          phoneActive
            ? {
                position: 'fixed',
                top: 0,
                left: showModal ? '0' : '-20rem',
                width: '16rem',
                height: '100vh',
                backgroundColor: 'white',
                transition: 'all 0.5s',
                zIndex: 10,
              }
            : {}
        }
      >
        <h2>Logo</h2>
        <div>
          <h5>DASHBOARD</h5>
          <ul>
            <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} />
            <Li url="/admin/product" text="Product" Icon={RiShoppingBag2Fill} />
            <Li url="/admin/customer" text="Customer" Icon={RiCustomerServiceFill} />
            <Li url="/admin/transaction" text="Transaction" Icon={BsCashCoin} />
          </ul>
        </div>
        <div>
          <h5>CHARTS</h5>
          <ul>
            <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} />
            <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} />
            <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} />
          </ul>
        </div>
        <div>
          <h5>APPS</h5>
          <ul>
            <Li url="/admin/app/coupon" text="Coupon" Icon={RiCoupon3Fill} />
          </ul>
        </div>

        {/* Close Button Inside Drawer */}
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  )
}

export default AdminSidebar