/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgr-primary": "#0f172a",
        "txt-primary": "#f8fafc",
        "txt-secondary": "#94a3b8",
        "card-color": "#1e293b",
        "accent-primary": "#22c55e",
        "accent-secondary": "#38bdf8",
      },
    },
  },
  plugins: [],
};
