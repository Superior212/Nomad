/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      backgroundImage: {
        'linear-border-gradient': 'linear-gradient(90deg, #000000 0%, #666666 100%)',
        'angular-gradient': 'conic-gradient(from 0deg, #ff00d6 9%, #FFC700 30%, #45F6D7 50%, #4643FF 73%, #FF0000 90%)',
        "bg-linear-gradient": 'linear-gradient(135deg,  #FF00D6 9%, #806300 30%, #FFC700 30%, #227E78 50%, #45F6D7 50%, #232179 73%, #4643FF 73%, #800000 90%, #FF0000 90% )',
        "bg-radial-gradient": 'radial-gradient(circle,  #FF00D6 9%,  #FFC700 30%, #227E78 50%, #45F6D7 50%, #FF0000 90% ) '
      },
      colors: {
        "Try-Primary": {
          50: "##E7F0EF",
          100: " #B5D0CE",
          200: "#91BAB6",
          300: "#5F9A95",
          400: "#408681",
          500: "#106861",
          600: "#0F5F58",
          700: "#0B4A45",
          800: "#093935",
          900: "#072C29",
        },
        "Try-secondary": {
          50: "#FEF5E9",
          100: "#FCDEBB",
          200: "#FBCF9A",
          300: "#F9B96C",
          400: "#F8AB50",
          500: "#F69624",
          600: "#E08921",
          700: "#AF6B1A",
          800: "#875314",
          900: "#673F0F",
        },
        "primary": {
          50: "#ECF2F1",
          100: "#C5D5D4",
          200: "#A9C1BF",
          300: "#81A5A1",
          400: "#69938F",
          500: "#437873",
          600: "#3D6D69",
          700: "#305552",
          800: "#25423F",
          900: "#1C3230",
        },
        "secondary": {
          50: "#FFFDF4",
          100: "#FFFADE",
          200: "#FFF8CE",
          300: "#FEF4B7",
          400: "#FEF2A9",
          500: "#FEEF94",
          600: "#E7D987",
          700: "#B4AA69",
          800: "#8C8351",
          900: "#6B643E",
        },
        "black": {
          50: "#EBEBEB",
          100: "#C2C2C2",
          200: "#A4A4A4",
          300: "#7B7B7B",
          400: "#616161",
          500: "#3A3A3A",
          600: "#353535",
          700: "#292929",
          800: "#202020",
          900: "#181818",
        },
        "white": {
          50: "#FDFDFD",
          100: "#F7F7F7",
          200: "#F4F4F4",
          300: "#EEEEEE",
          400: "#EBEBEB",
          500: "#E6E6E6",
          600: "#D1D1D1",
          700: "#A3A3A3",
          800: "#7F7F7F",
          900: "#616161",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll2': 'infinite-scroll2 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll2': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
      }
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
  plugins: [require("tailwindcss-animate")],
}