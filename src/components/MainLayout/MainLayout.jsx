// MainLayout.js
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function MainLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const isScreenSmall = useMediaQuery({ query: "(max-width: 768px)" });

  // Toggle Sidebar Visibility
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      {isScreenSmall ? (
        // For small screens, show Sidebar full width when expanded
        <>
         <button className={`burger-menu d-md-none`} onClick={toggleSidebar}>
           {!isSidebarExpanded ? "☰" : "X"} 
        </button>
          {isSidebarExpanded ? (
            <div className=" p-0">
              <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
            </div>
          ) : (
            <div className=" p-0">
              <Outlet />
            </div>
          )}
        </>
      ) : (
        // For larger screens, show Sidebar and Outlet side by side
        <div className="row m-0">
          <div className="col-md-2 p-0">
            <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
          </div>
          <div className="col-md-10 p-0">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default MainLayout;
