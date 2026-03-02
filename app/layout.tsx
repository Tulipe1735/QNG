import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Poppins } from "next/font/google";
import "./globals.css"; // 只保留一个导入即可

// 配置 Poppins 字体
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // 这里的变量名会被 Tailwind v4 识别
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
