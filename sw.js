self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('user3schools').then((cache) => cache.addAll([
      'index.html',
      '/images/icon_256.png',
      'index.js',
      'style.css',
      'install.html',
      'search.html',
      '404.html',
      'profile.html',
      'serviceWorker.js',
      'sw.js',
      'manifest.json',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
