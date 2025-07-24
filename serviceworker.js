const CACHE_NAME = 'dota-buff-cache-v1';
const urlsToCache = [
    '/',
    '/dotabuff.html',
    '/heroes.html',
    '/cybersport.html',
    '/artefacts.html',
    '/login.html',
    '/hero_antimage.html',
    '/hero_magnus.html',
    '/hero_cm.html',
    '/styles.css',
    '/script.js',
    '/DOTA.jpeg',
    '/heroes.jpg',
    '/sport.jpg',
    '/items.jpg',
    '/antimage.jpeg',
    '/magnus.jpg',
    '/cm.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});