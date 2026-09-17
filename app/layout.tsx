
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/Navbar"

import {Footer} from "../components/Footer"

import { ToastContainer } from "react-toastify";

import { ChatWidget } from "@/components/ChatWidget"; // عدّل المسار حسب مكان الملف عندك





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="">

        <Navbar/>
    
        {children}
         
         <ChatWidget />

         <Footer/>

      <ToastContainer position="top-right" />

  
      </body>
      
     
    </html>
  );
}
