'use client';

import Sidebar, { MobileSideBar } from "@/components/sidebar";
import { NavBar } from "@/components/navbar";
import { useState } from "react";
import { eventHeadMenu } from "@/config/route.config";
import { MainLayout } from "@/components/main_layout";

export default function Layout({ children }) {

  return (
    <>
      <MainLayout
        menuItems={eventHeadMenu}
        routeType={2}
      >
        {children}
      </MainLayout>
    </>
  );
}