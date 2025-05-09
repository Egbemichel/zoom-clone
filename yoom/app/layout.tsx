import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
    icons: {
      icon: '/icons/logo.svg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ClerkProvider
     appearance={{
       layout: {
         logoImageUrl: '/icons/yoom-logo.svg',
         socialButtonsVariant:  'iconButton',
       },
       variables:{
         colorText:'#fff',
         colorPrimary: '#0E78f9',
         colorBackground: '#1c1f2e',
         colorInputBackground: '#252a41',
         colorInputText: '#fff',
       }
     }}>
      <body className="bg-dark-2">
      {children}
      <Toaster />
      </body>
    </ClerkProvider>
    </html>
  );
}
