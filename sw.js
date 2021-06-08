importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js'
)


const version = "0.6.19";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/video.html`,
        `/network.js`,
        `/youtubev2.css`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});



workbox.routing.registerRoute(
  /\/$|\/\?(utm_source|hl)/,
  workbox.strategies.networkFirst({ cacheName: 'pages' })
)

workbox.routing.registerRoute(
  /\.js$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'javascript'
  })
)

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    cacheName: 'image',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 999 images
        maxEntries: 999,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)

// Instagram endpoint
workbox.routing.registerRoute(
  /.*\?__a=1/,
  workbox.strategies.cacheFirst({
    cacheName: 'phuongmychi',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache for a maximum of a day
        maxAgeSeconds: 86400
      })
    ]
  })
)
