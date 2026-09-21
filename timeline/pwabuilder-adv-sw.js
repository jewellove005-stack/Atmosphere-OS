
  import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
  precacheAndRoute([{"revision":"7e69236c1fe15ebcdc9e67600581f6e4","url":"index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"sw.js"}]);
const CACHE_NAME = 'atmosphere-os-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
