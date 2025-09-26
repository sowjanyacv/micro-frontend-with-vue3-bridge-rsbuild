import Loader from '../components/Loader.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routeManifest from '../routeManifest';
import * as bridge from '@module-federation/bridge-vue3'
import { loadRemote } from '@module-federation/runtime'

// Define your remote component
const Remote2 = bridge.createRemoteAppComponent({
  loader: () => loadRemote('app2/export-app'),
  rootAttrs: { class: 'root-element-class' }
});

const getRoutes = () => {
  const remoteRoutes = routeManifest.map((mfe) => ({
    path: mfe.route.path,
    name: mfe.route.name,
    meta: {
      ...mfe.route.meta,
    },
    component: Loader,
  }));

  // Add your custom remote route here
  remoteRoutes.push({
    path: '/app-2/:pathMatch(.*)*',
    component: Remote2,
  });

  return remoteRoutes;
};

const routes = getRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const useRoute = () => {
  return router;
};