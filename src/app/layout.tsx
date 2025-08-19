import { cn } from "@/lib/utils";
import { Home, Plus, Settings, Users } from "lucide-react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "Manage your contacts easily with Next.js + ShadCN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-[#f1f1f1]`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-lg flex flex-col">
            <div className="p-6 text-2xl font-bold">Contact Manager</div>
            <nav className="flex-1 space-y-2 p-4">
              <NavItem href="/" icon={<Home size={18} />} label="Dashboard" />
              <NavItem
                href="/contacts"
                icon={<Users size={18} />}
                label="Contacts"
              />
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
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
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
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
