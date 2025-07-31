// app/layout.tsx
import Aside from "./components/aside";
import Footer from "./components/Footer";
import "./globals.css";
import "./styles/aside.scss";
import { ReactNode } from "react";

export const metadata = {
  title: "M.Kebriaei | Web Developer Portfolio",
  description: "Mein professionelles Portfolio als Web-Entwicklerin",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Aside />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
