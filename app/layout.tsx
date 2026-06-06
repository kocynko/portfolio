import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matus | Portfolio",
  description:
    "Matus is a frontend developer with a Master's in Computer Science, focused on React (Next.js) and Vue (Nuxt.js).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth!"
    >
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-950 dark:text-gray-50/90 sm:pt-36`}
      >
        <div className="absolute right-44 top-24 -z-10 h-85 w-125 rounded-full bg-[#e9d5ff] blur-[10rem] dark:bg-[#946263] sm:w-275"></div>
        <div className="absolute -left-140 -top-4 -z-10 h-165  w-200 rounded-full bg-[#e0e7ff] blur-[10rem] dark:bg-[#676394] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
