import type { Metadata } from "next";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Sonner } from "@/components/ui/sonner";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "NOTE AI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div  className="flex min-h-screen w-full flex-col ">
          <Header />
          <div className="flex-1 flex-col px-4 pt-10 xl:px-8">
          {children}
         
          </div>
           </div>
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
