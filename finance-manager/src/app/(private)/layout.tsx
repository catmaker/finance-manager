import React from "react";
import AppSidebar from "../shared/widgets/sidebar/ui/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
