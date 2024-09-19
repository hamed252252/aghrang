import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Menus from "@/components/menus";
import Footer from "@/components/ui/Footer";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

// Local Fonts
const myFont = localFont({
    src: [
        {
            path: "./fonts/woff2/IRANSansX-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-UltraLight.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-DemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-Black.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-ExtraBlack.woff2",
            weight: "950",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-Heavy.woff2",
            weight: "1000",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-Bold.woff2",
            weight: "bold",
            style: "normal",
        },
        {
            path: "./fonts/woff2/IRANSansX-Regular.woff2",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap", // Using "swap" for better performance
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
                    myFont.variable // Ensuring font variable is applied correctly
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    forcedTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Menus />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
