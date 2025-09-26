import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'app1',
      exposes: {
        './entry': './src/entry.js',
      },
      shared: {
        vue: { eager: true, singleton: true },
      },
    })
  ],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.js',
    },
  },
  server: {
    port: 5011,
  },
});