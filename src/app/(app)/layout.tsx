"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // 👈 for mobile sidebar
import { cn } from "@/lib/utils";
import { Home, Menu, Plus, Settings, Users } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-[#f1f1f1]`}>
        <div className="flex min-h-screen">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col">
            <div className="p-6 text-2xl font-bold">Contact Manager</div>
            <SidebarNav />
          </aside>

          {/* Mobile Navbar + Drawer */}
          <div className="md:hidden w-full">
            <div className="flex items-center justify-between p-4 bg-white shadow-md">
              <div className="text-xl font-bold">Contact Manager</div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                  <div className="p-6 text-2xl font-bold">Menu</div>
                  <SidebarNav />
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

function SidebarNav() {
  return (
    <nav className="flex-1 space-y-2 p-4">
      <NavItem href="/" icon={<Home size={18} />} label="Dashboard" />
      <NavItem href="/contacts" icon={<Users size={18} />} label="Contacts" />
      <NavItem
        href="/contacts/new"
        icon={<Plus size={18} />}
        label="Add Contact"
      />
      <NavItem
        href="/settings"
        icon={<Settings size={18} />}
        label="Settings"
      />
    </nav>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const pathname = usePathname();

  const isActive = (() => {
    if (href === "/") return pathname === "/";
    if (href === "/contacts")
      return (
        pathname.startsWith("/contacts") &&
        !pathname.startsWith("/contacts/new")
      );
    return pathname === href;
  })();

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
        isActive
          ? "bg-gray-200 text-gray-900 font-medium"
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
