import Navbar from "@/modules/navbar";
import { TRPCReactProvider } from "@/trpc/client";
import { Poppins } from "next/font/google";
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
          <Navbar />
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
