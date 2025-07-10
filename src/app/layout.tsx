// app/layout.tsx
import Aside from "./components/aside";
import Footer from "./components/Footer";
import "./globals.css";
import "./styles/aside.scss";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-row ">
          <Aside />
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
