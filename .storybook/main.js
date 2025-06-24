

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)"
  ],
  "tags": ['autodocs'],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {
      "docgen": 'vue-component-meta',
    },
  },
  "docs": {
    "autodocs": true,   // ❗추가 필요
  },
};
export default config;