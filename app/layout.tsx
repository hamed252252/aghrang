import type { Metadata } from "next";
import { Baloo_Bhaijaan_2, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Menus from "@/components/menus";
import Footer from "@/components/ui/Footer";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

// Google Fonts
const inter = Inter({ subsets: ["latin"] });
const myfont = Baloo_Bhaijaan_2({ subsets: ["arabic"] });

// Local Fonts
const myFont = localFont({
    src: [
        {
            weight: "100",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Thin.woff2",
        },
        {
            weight: "200",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-UltraLight.woff2",
        },
        {
            weight: "300",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Light.woff2",
        },
        {
            weight: "500",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Medium.woff2",
        },
        {
            weight: "600",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-DemiBold.woff2",
        },
        {
            weight: "800",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-ExtraBold.woff2",
        },
        {
            weight: "900",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Black.woff2",
        },
        {
            weight: "950",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-ExtraBlack.woff2",
        },
        {
            weight: "1000",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Heavy.woff2",
        },
        {
            weight: "bold",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Bold.woff2",
        },
        {
            weight: "normal",
            style: "normal",
            path: "./fonts/woff2/IRANSansX-Regular.woff2",
        },
    ],
    display: "swap", // Consider using "swap" for better performance
    variable: "--font-Iransans--per",
});

// Metadata configuration using Metadata API
export const metadata: Metadata = {
    title: "Agh Rang",
    description: "Agh Rang Company",
};

// Root Layout Component
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="fa"
            dir="rtl"
        >
            <body
                className={cn(
                    "min-h-screen bg-background antialiased",

                    myFont.variable,
                    myFont.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Menus />
                    <>{children}</>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
