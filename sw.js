const CACHE_NAME = 'it-chamchamal-v2'; // ناوی ڤێرژنەکەمان گۆڕی بۆ v2
const assets = [
  './',
  './index.html',
  './it-icon-final-192.png',
  './it-icon-final-512.png',
  './manifest.json'
];

// دامەزراندن و سڕینەوەی کاشی کۆن
self.addEventListener('install', event => {
  self.skipWaiting(); // ڕێگە دەدات یەکسەر وەشانی نوێ جێگیر ببێت
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// چالاککردن و پاککردنەوەی ڤێرژنە کۆنەکان
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

// ستراتیژی نوێ: سەرەتا ئینتەرنێت، ئەگەر نەبوو ئینجا کاش (Network First)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(res => {
        // ئەگەر ئینتەرنێت هەبوو، وەشانی نوێ سەیڤ بکە
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(event.request)) // ئەگەر ئینتەرنێت نەبوو، وەشانی ناو مۆبایل نیشان بدە
  );
});
