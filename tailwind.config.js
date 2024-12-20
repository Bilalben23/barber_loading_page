/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "night"
    ]
  }
}

