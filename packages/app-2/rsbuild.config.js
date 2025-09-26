import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'app2',
      exposes: {
        './export-app': './src/export-app.js',
      },
      shared: {
        vue: { eager: true, singleton: true },
        'vue-router': { eager: true, singleton: true },
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
    port: 5012,
  },
});