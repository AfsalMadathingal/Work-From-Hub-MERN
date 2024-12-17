/** @type {import('tailwindcss').Config} */
// const { nextui } = require("@nextui-org/react");
import {nextui} from '@nextui-org/react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryOrange: '#ff6f00'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}