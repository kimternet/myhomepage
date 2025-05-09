import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import dynamic from "next/dynamic";

// 클라이언트 컴포넌트를 서버 컴포넌트에서 불러올 때는 dynamic import 사용
const VisitorCounter = dynamic(() => import("@/components/VisitorCounter"), { ssr: false });

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Welcome to my homepage",
  description: "김형운 홈페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background text-foreground font-inter')}>
        {children}
        <FireFliesBackground />
        <Sound />
        <VisitorCounter />
        <div id="my-modal" />
      </body>
    </html>
  );
}
