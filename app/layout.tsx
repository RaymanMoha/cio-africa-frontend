import React, { ReactNode } from "react";
import "@/app/styles/tailwind.css";
import "@/app/styles/index.css";
import "@/app/styles/font.css";

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
