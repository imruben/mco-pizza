/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                black: "#261C17",
                //custom colors
                cblack: "#342628",
                cgreen: "#788402",
                cyellow: "#FEAA00",
                cwhite: "#F7F4EF",
            },
            fontFamily: {
                handrawn: ["Delicious Handrawn", "sans-serif"],
            },
        },
    },
    plugins: [],
};
