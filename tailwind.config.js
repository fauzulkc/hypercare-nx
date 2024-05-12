const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                'brand-color': '#4a6eec',
                'brand-secondary': '#f65c5b',
            },
        },
    },
    plugins: [],
};
