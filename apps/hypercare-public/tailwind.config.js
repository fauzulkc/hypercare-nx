const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const twBaseConfig = require('../../tailwind.config');


/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    twBaseConfig
  ],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
