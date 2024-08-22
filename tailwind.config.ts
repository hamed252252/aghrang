import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                iransans: ["var(--font-Iransans--per)"],
                sans: [
                    "var(--font-sans)",
                    ...fontFamily.sans,
                ],
            },

            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground:
                        "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground:
                        "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground:
                        "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground:
                        "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground:
                        "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground:
                        "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground:
                        "hsl(var(--card-foreground))",
                },
            },
            backgroundImage: {
                "mask-svg": "url('/mask.svg')",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideUp: {
                    "0%": {
                        transform: "translateY(20px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                bounceIn: {
                    "0%": {
                        transform: "scale(0.5)",

                        opacity: "0",
                    },
                    "50%": {
                        transform: "scale(1.05)",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: { height: "0" },
                },
                pulse: {
                    "0%, 100%": {
                        boxShadow:
                            "0 0 0 0 var(--pulse-color)",
                    },
                    "50%": {
                        boxShadow:
                            "0 0 0 8px var(--pulse-color)",
                    },
                },
            },
            animation: {
                fadeIn: "fadeIn 1s ease-out forwards",
                slideUp: "slideUp 0.5s ease-out",
                bounceIn: "bounceIn 0.6s ease-out",
                "accordion-down":
                    "accordion-down 0.2s ease-out",
                "accordion-up":
                    "accordion-up 0.2s ease-out",
                pulse: "pulse var(--duration) ease-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
