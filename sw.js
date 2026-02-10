const CACHE_NAME = 'it-chamchamal-v3.0'; // ڤێرژنەکەم گۆڕی بۆ 3.0 بۆ ئەوەی گۆڕانکارییەکان یەکسەر وەربگرێت
const assets = [
  './',
  './index.html',
  './it-icon-final-192.png',
  './it-icon-final-512.png',
  './manifest.json'
];

// 1. Install Event - Caching Assets
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// 2. Activate Event - Cleaning old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});

// 3. Fetch Event - Network First Strategy
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(res => {
        if (res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

// 4. Push Event - (ئەمە بەشە گرنگەکەیە بۆ ئاگاداری)
self.addEventListener('push', function(event) {
  // داتا وەردەگرێت ئەگەر هەبێت، ئەگەر نەبوو دەقێکی جێگیر دەنێرێت
  let data = { title: 'ئاگاداری نوێ', body: 'هەواڵێکی نوێ لە بەشی ئایتی', url: './' };
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: './it-icon-final-192.png',
    badge: './it-icon-final-192.png',
    vibrate: [100, 50, 100], // مۆبایلەکە دەلەرێتەوە
    data: {
      url: data.url || './' // کاتێک کلیکی لێ دەکەیت ئەم لینکە دەکرێتەوە
    },
    actions: [
      {action: 'explore', title: 'بینینی سایت'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'IT Chamchamal', options)
  );
});

// 5. Notification Click Event - (کاتێک کلیک لە ئاگادارییەکە دەکەیت)
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // ئاگادارییەکە دادەخات
  
  event.waitUntil(
    clients.matchAll({type: 'window'}).then( windowClients => {
      // ئەگەر سایتەکە کراوەتەوە، دەچێتە سەر ئەو، ئەگەر نا دانەیەکی نوێ دەکاتەوە
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});
