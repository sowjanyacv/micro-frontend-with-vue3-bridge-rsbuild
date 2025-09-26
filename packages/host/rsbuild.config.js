import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        app2: 'app2@http://localhost:5012/mf-manifest.json',
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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5010,
  },
});