importScripts('workbox-3.6.1/workbox-sw.js');

workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-3.6.1/'
});
importScripts('workbox-3.6.1/workbox-strategies.prod.js');
importScripts('workbox-3.6.1/workbox-background-sync.prod.js');

const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([]);
workbox.routing.registerNavigationRoute('/index.html');


workbox.routing.registerRoute(
  new RegExp('http://localhost:3000/url'),
  workbox.strategies.networkFirst(),
  'GET'
);
workbox.routing.registerRoute(
  new RegExp('http://localhost:3000/url'),
  workbox.strategies.networkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);


