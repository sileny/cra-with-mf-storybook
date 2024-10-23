const { resolve } = require('path');
const fs = require('fs');

const exposes = {};
const componentsDir = 'src/components';
if (fs.existsSync(__dirname, componentsDir)) {
  fs.readdirSync(resolve(__dirname, componentsDir)).forEach(dir => {
    const key = `./${dir}`;
    exposes[key] = resolve('./', componentsDir, dir, 'index.tsx');
  });
}

export default {
  name: 'host',
  filename: "remoteEntry.js",
  exposes,
  remotes: {
    provider: 'provider@http://localhost:3001/remoteEntry.js',
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
};
