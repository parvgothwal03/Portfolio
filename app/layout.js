import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "Outfit"
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"], variable: "Ovo"
});

export const metadata = {
  title: "Portfolio - Parv Gothwal",
  description: "",
};

export default function RootLayout({
  children,
}){
  return (
    <html lang="en" className="scroll-smooth">
      <body
      className={`${outfit.className} antialiased leading-8 
      overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-[#11001F] dark:text-white`}>
     {children}
     </body>
    </html>
  );
}
