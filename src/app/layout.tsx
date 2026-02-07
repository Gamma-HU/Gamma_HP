import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamma 北大ゲーム制作サークル",
  description: "北海道大学の学生･卒業生を中心としたゲーム制作サークルです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-gray-800">
              Gamma
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">ホーム</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition">ABOUT</Link>
              <Link href="#product" className="text-gray-600 hover:text-blue-600 transition">制作作品</Link>
              <Link href="#join" className="text-gray-600 hover:text-blue-600 transition">入部するには</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition">お問い合わせ</Link>
            </nav>
            {/* Mobile Menu Button (Placeholder for future implementation if needed) */}
            <button className="md:hidden text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </header>

        <main className="pt-16 min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Gamma. All rights reserved.</p>
            </div>
        </footer>
      </body>
    </html>
  );
}
