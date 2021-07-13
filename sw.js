self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('quiz-generator').then((cache) => cache.addAll([
      'index.html',
      'v1.html',
      'offline.html',
      'game.html',
      'quiz-generator.png',
      '3schools.png',
      'index.js',
      'styles.css',
      'quiz1.jpg',
      'quiz2.jpg',
      'quiz3.jpg',
      'quiz4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
