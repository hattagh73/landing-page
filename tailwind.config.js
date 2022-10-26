/** @type { import('tailwindcss').Config } */

tailwindConfig = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            kaushan_script: ['Kaushan Script', 'cursive'],
        },
    },
    plugins: [],
}

module.exports = tailwindConfig