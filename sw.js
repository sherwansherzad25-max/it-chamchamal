const CACHE_NAME = 'it-chamchamal-v3.3';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './it-icon-final-192.png',
  './it-icon-final-512.png',
  './manifest.json'
];


self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // one missing file must not break the whole install
      return Promise.all(assets.map(a => cache.add(a).catch(() => {})));
    })
  );
});


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

self.addEventListener('push', function(event) {
  
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
    vibrate: [100, 50, 100], 
    data: {
      url: data.url || './' 
    },
    actions: [
      {action: 'explore', title: 'بینینی سایت'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'IT Chamchamal', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close(); 
  
  event.waitUntil(
    clients.matchAll({type: 'window'}).then( windowClients => {
   
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
