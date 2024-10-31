/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#FBB034",
        secondaryColor: "#9A9A9A"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: true,
    darkTheme: "synthwave"
  }
}

