/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            screens: {
                lg: "1200px",
                md: "990px",
            },
        },
    },
    plugins: [],
};
