/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
      animation: {
        float: "float 8s infinite ease-in-out",
        subtleGlow: "subtleGlow 4s ease-in-out infinite alternate",
        fadeIn: "fadeIn 1s forwards",
        fadeInLine: "fadeInLine 1s forwards",
        whisperFloat: "whisperFloat 4s ease-in-out",
        drawLine: "drawLine 2s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { opacity: "0", transform: "translateY(0px) scale(0)" },
          "50%": { opacity: "0.8", transform: "translateY(-30px) scale(1)" },
        },
        subtleGlow: {
          "0%": {
            boxShadow:
              "0 0 50px rgba(139, 69, 19, 0.5), inset 0 0 100px rgba(0, 0, 0, 0.8), 0 20px 40px rgba(0, 0, 0, 0.6)",
          },
          "100%": {
            boxShadow:
              "0 0 60px rgba(139, 69, 19, 0.7), inset 0 0 100px rgba(0, 0, 0, 0.8), 0 20px 40px rgba(0, 0, 0, 0.6)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInLine: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        whisperFloat: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) translateY(0px)",
            opacity: "0",
          },
          "20%, 80%": { opacity: "0.8" },
          "50%": {
            transform: "translate(-50%, -50%) translateY(-20px)",
            opacity: "1",
          },
        },
        drawLine: {
          "0%": { width: "0", opacity: "0" },
          "50%": { opacity: "0.7" },
          "100%": { width: "var(--line-length)", opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
