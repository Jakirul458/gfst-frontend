// import React from 'react'
// import SideBar from '../components/Sidebar/SideBar'
// import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer'
// import { Outlet } from 'react-router-dom'
// import './Layout.css'

// const Layout = ({ children }) => {
//   return (
//     <div className="main__container">
//       <Navbar />
//       <div className='main__app__container'>
//         <div className='sidebar__container'>
//           <SideBar />
//         </div>
//         <div className='main__content'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Layout


import React from 'react'
import SideBar from '../components/Sidebar/SideBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import AdminPanel from '../pages/society/Admin/AdminPanel'

const Layout = ({ children }) => {
  return (
    <div className="main__container">
      <Navbar />
      <div className='main_app_container'>      
        <div className='sidebar__container'>
          <div>
            {/* <AdminPanel /> */}
            <div>
           <SideBar />
          </div>
          </div>
                 
        </div>

        <div className='main__content'>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout