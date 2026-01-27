const CACHE_NAME = 'it-chamchamal-v1';
const assets = [
  './',
  './index.html',
  './it-icon-final-192.png',
  './it-icon-final-512.png'
];

// دامەزراندنی سێرڤس وۆرکەر
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// وەڵامدانەوەی داواکارییەکان
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
