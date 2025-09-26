const routeManifest = [
  {
    remote: {
      module: 'app1',
      entry: 'http://localhost:5011/mf-manifest.json',
    },
    route: {
      name: 'app1',
      path: '/app-1',
      meta: {
        title: 'Micro App 1',
      },
    },
  },
];

/**
 * This function returns the remotes from the route manifest.
 */
export const getRemotes = () => {
  return routeManifest.map((mfe) => mfe.remote);
};

export default routeManifest;
