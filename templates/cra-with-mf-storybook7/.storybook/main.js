import mfConfig from '../modulefederation.config';

const { exposes, ...moduleFederationConfig } = mfConfig;

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@module-federation/storybook-addon',
      options: {
        moduleFederationConfig,
      },
    }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
