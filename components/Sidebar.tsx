"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package } from "lucide-react";

import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: "Home", href: "/admin" },
    { icon: Package, label: "Products", href: "/admin/products" },
  ];

  return (
    <ShadcnSidebar>
      <SidebarHeader>
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
