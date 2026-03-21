import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        river: "rgb(var(--color-river) / <alpha-value>)",
        reed: "rgb(var(--color-reed) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(8, 25, 39, 0.18)"
      },
      maxWidth: {
        shell: "84rem"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 0 22%), radial-gradient(circle at 80% 30%, rgba(175,201,214,0.18), transparent 0 18%), linear-gradient(180deg, rgba(7,20,28,0.08), rgba(7,20,28,0.14))"
      }
    }
  },
  plugins: []
};

export default config;
