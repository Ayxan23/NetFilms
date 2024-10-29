import { Inter } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container ${interFont.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
