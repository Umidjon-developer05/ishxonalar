import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 w-full">{children}</main>
      </div>
    </SidebarProvider>
  );
}
