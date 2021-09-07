self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('user3schools').then((cache) => cache.addAll([
      './',
    './index.html',
    './css/styles.css',
    '/js/notify.js',
    '/js/app.js',
    '/js/sync.js',
    '/js/push.js',
    '/js/networkChange.js',
    './manifest.json',
     'sw.js',
      'index.js',
      'install.html',
      'editor.html',
      'search.html',
      '404.html',
      'profile.html',
      'serviceWorker.js',
    './images/icon_16.png',
    './images/icon_32.png',
    './images/icon_192.png',
    './images/icon_256.png',
    './images/icon_512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
