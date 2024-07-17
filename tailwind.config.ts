import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true, // 👈 enable hover only when supported
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
      xxl: "3600px",
    },
    colors: {
      // Color palette
      text_300: "#ECEDEF",
      text_400: "#CED1D5",
      text_500: "#B2B5BC",
      text_600: "#979BA2",
      text_700: "#7C8089",
      text_800: "#63676F",
      text_900: "#4B4E56",
      primary_200: "#FFF9E9",
      primary_300: "#FFECB7",
      primary_400: "#FFDE85",
      primary_500: "#FFD154",
      primary_600: "#EEB720",
      primary_700: "#BB8B08",
      primary_800: "#886400",
      primary_900: "#553E00",
      secondary_200: "#EEF4FF",
      secondary_300: "#C9DBFF",
      secondary_400: "#A3C2FF",
      secondary_500: "#7EA9FF",
      secondary_600: "#548AF3",
      secondary_700: "#2D5FC0",
      secondary_800: "#113B8D",
      secondary_900: "#011F5A",
      accent_200: "#EBF1FF",
      accent_300: "#AFC9FF",
      accent_400: "#73A1FF",
      accent_500: "#3677FA",
      accent_600: "#205BD1",
      accent_700: "#0F42A8",
      accent_800: "#032D80",
      accent_900: "#001D57",
      background_500: "#F0F5FF",
      background_600: "#B8C3DA",
      background_700: "#8493B1",
      background_800: "#596988",
      background_900: "#354360",
      background_color: "#05080E",
      text_color: "#ECEDEF",
      accent_color: "#3677FA",
      secondary_color: "#113B8D",
      primary_color: "#EEB720",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "rgba(255, 255, 255, 0)",
      transparent_half: "rgba(0, 0, 0, 0.5)",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      l: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "38px",
      "5xl": "46px",
    },
    borderRadius: {
      none: "0",
      xs: "6px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "34px",
      full: "500px",
    },
    boxShadow: {
      base: "0 3px 8px 0 rgb(0, 0, 0, 0.2)",
      none: "0 0 #0000",
      serviceCard:
        "20px 64px 19px 0px rgba(237, 237, 237, 0.00), 13px 41px 17px 0px rgba(237, 237, 237, 0.00), 7px 23px 14px 0px rgba(237, 237, 237, 0.02), 3px 10px 11px 0px rgba(237, 237, 237, 0.03), 1px 3px 6px 0px rgba(237, 237, 237, 0.03)",
      pricingCard:
        "10px 12px 4px 0px rgba(236, 237, 239, 0.00), 6px 7px 4px 0px rgba(236, 237, 239, 0.01), 4px 4px 12px 0px rgba(236, 237, 239, 0.04), 2px 2px 6px 0px rgba(236, 237, 239, 0.06), 0px 0px 2px 0px rgba(236, 237, 239, 0.07)",
      pricingCardHover:
        "0px 0px 10px 0px rgba(236, 237, 239, 0.01), 0px 0px 9px 0px rgba(236, 237, 239, 0.09), 0px 0px 8px 0px rgba(236, 237, 239, 0.30), 0px 0px 6px 0px rgba(236, 237, 239, 0.51), 0px 0px 3px 0px rgba(236, 237, 239, 0.59)",
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundColor: {
        dots_mobile: "url('./public/assets/images/dots-bg-mobile.png')",
        dots_desktop: "url('./public/assets/images/dots-bg-desktop.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
