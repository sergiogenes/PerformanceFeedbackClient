import "./globals.css";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "GlobalNews Group",
  description: "Devolución de Performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
