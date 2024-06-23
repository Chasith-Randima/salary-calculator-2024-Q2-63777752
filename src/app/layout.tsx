import { Inter } from "next/font/google";
import "./globals.css";
import TaskProvider from "@/context/TaskProvider";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { isMobile } from "react-device-detect";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          <Navbar />
          <Sidebar>
            {children}
          </Sidebar>
        </TaskProvider>
      </body>
    </html>
  );
}