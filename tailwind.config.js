/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        gridAutoColumns: {
            '4fr': 'minmax(0, 4fr)',
          }
    },
    plugins: [],
  }