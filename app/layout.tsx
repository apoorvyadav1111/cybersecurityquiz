import type { Metadata } from "next";
import { Space_Mono as Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { ParticlesContainer } from "@/components/particles-background";

const inter = Inter({style: "normal", weight: "400", subsets:["latin"]});

export const metadata: Metadata = {
  title: "K-12 Cybersecurity Readiness",
  description: "An online tool for teaching K-12 students about cybersecurity",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: dark)",
        url:"/puzzle.svg",
        href:"/puzzle.svg",
      },
      {
        media:"(prefers-color-scheme: light)",
        url:"/puzzle.svg",
        href:"/puzzle.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-yellow-500 dark:bg-sky-950 text-black dark:text-cyan-300",inter.className)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ParticlesContainer color="#efefef">
              {children}
            </ParticlesContainer>
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
