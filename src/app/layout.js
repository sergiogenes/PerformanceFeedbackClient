import "./globals.css";
import { Providers } from "@/redux/provider";
import { Navigation } from "./components/Navigation";

import { NavAdmin } from "./components/NavAdmin";
import { Inter } from "next/font/google";

export const metadata = {
  title: "GlobalNews Group",
  description: "Devolución de Performance",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
