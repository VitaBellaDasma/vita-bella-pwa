const CACHE_NAME = 'vita-bella-v1';
const ASSETS = [
  'index.html','menu.html','loyalty.html','events.html','order.html',
  'styles.css','app.js','manifest.json','data/menu.json','data/events.json'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME&&caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
