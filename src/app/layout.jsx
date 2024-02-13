import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Provider from "@/context/Provider";

const inter = Inter({ subsets: ["latin"] });


export const Metadata = {
  title: "Online Shopping",
  description:
    "A Fashion Store Where you find every accessories related fashion & beauty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
