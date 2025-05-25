"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { sidebarItems } from "../config";
import { useLanguageStore } from "../../../store/language-store";
import { LayoutDashboard, Tags, PieChart, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
const iconMap = {
  "layout-dashboard": LayoutDashboard,
  tags: Tags,
  "pie-chart": PieChart,
  settings: Settings,
};
const AppSidebar = () => {
  const { language, toggleLanguage, initializeLanguage } = useLanguageStore();

  useEffect(() => {
    initializeLanguage();
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <div>Logo</div>
        <Button onClick={toggleLanguage} variant="ghost" size="icon">
          {language === "ko" ? "En" : "Ko"}
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {sidebarItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center gap-2">
                      {IconComponent && <IconComponent />}
                      {language === "ko" ? item.label.ko : item.label.en}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarHeader>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings />
              </Link>
            </SidebarMenuButton>
          </SidebarHeader>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
