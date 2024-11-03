'use client';

import Sidebar, { MobileSideBar } from "@/components/sidebar";
import { NavBar } from "@/components/navbar";
import { useState } from "react";

export default function Layout({ children }) {

  const [showSidebar, setShowSidebar] = useState(true);
  console.log("sidebar value ", showSidebar)
  return (
    <>
      <div className="flex flex-row space-x-1 lg:space-x-3 h-screen w-screen overflow-hidden py-3 px-2 lg:p-3 bg-[#F2F2F2]">
        <Sidebar />
        {showSidebar === true && <MobileSideBar setShowSideBar={setShowSidebar} />}
        <div className="flex flex-col h-full w-full space-y-3">
          <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="w-full h-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}