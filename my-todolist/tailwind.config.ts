// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["'Pretendard'", "sans-serif"], // 너만의 예쁜 글꼴
      },
      colors: {
        pinky: "#f5bcb6",
        minty: "#acdedb",
      },
    },
  },
  plugins: [],
};
export default config;
