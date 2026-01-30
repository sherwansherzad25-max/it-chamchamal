const CACHE_NAME = 'it-chamchamal-v2.8'; // ناوی ڤێرژنەکە بگۆڕە بۆ ئەوەی گۆڕانکارییەکان یەکسەر دەربکەون
const assets = [
  './',
  './index.html',
  './it-icon-final-192.png',
  './it-icon-final-512.png',
  './manifest.json'
];

// Install Event
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // بەکارهێنانی addAll بە وریایی بۆ ئەوەی ئەگەر فایلێک نەبوو هەمووی ڕانەوەستێت
      return cache.addAll(assets);
    })
  );
});

// Activate Event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch Event - Network First Strategy
self.addEventListener('fetch', event => {
  // تەنها بۆ ئەو داواکارییانەی کە میسۆدی GETـن (بۆ ئەوەی کێشە بۆ فۆرم دروست نەبێت)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(res => {
        // ئەگەر وەڵامەکە سەرکەوتوو بوو، سەیڤی بکە لە کاش
        if (res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return res;
      })
      .catch(() => caches.match(event.request)) // ئەگەر ئینتەرنێت نەبوو، لە کاشەکە بیهێنە
  );
});
