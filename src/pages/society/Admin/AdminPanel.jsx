// import React from 'react'
// // import SideBar from '../components/Sidebar/SideBar'
// import SideBar from 'D:/Rimon/14.08.24/gfst-frontend/src/components/Sidebar/SideBar.jsx'
// // import './AdminPanel.css'
// function Adminpanel() {
//   return (

//     // <div>hello</div>
//         // <div className='sidebar__container'>
//         //   <SideBar />
//         // </div>
//     <div>
//         <SideBar />
//     </div>
//   )
// }

// export default Adminpanel




// import React from 'react';
// import SideBar from 'D:/Rimon/14.08.24/gfst-frontend/src/components/Sidebar/SideBar.jsx';
// import './AdminPanel.css';
// import { Outlet } from 'react-router-dom'

// function Adminpanel() {
//     return (
//         <div className="adminpanel-container">
//             <div className="sidebar__container">
//                 <SideBar />
//             </div>
//             <div className="content__container">
//                 {/* <Outlet /> */}

//                 <h1>Welcome to Youth Supportive Society</h1>
//                 <div className='main__content'>
//                     {/* <Outlet /> */}
                   

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Adminpanel;



import React from 'react';
import './AdminPanel.css';
import { Outlet } from 'react-router-dom';

function AdminPanel() {
  return (
    // <div className="adminpanel-container">
    //   <div className="sidebar__container">
    //     <SideBar />
    //   </div>
    //   <div className="content__container">
    //     <Outlet />
    //   </div>
    // </div>
    <>
   
    {/* <div>
      <SideBar />
    </div> */}
    </>
  );
}

export default AdminPanel;
