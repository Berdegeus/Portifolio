module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1F3A5F",
          200: "#4d648d",
          300: "#acc2ef",
        },
        accent: {
          100: "#3D5A80",
          200: "#cee8ff",
        },
        text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
        },
        bg: {
          100: "#0F1C2E",
          200: "#1f2b3e",
          300: "#374357",
        },
      },
    },
  },
  plugins: [],
};
