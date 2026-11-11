// GitHub Actions will dynamically replace this placeholder with a unique version tag on every push
const CACHE_NAME = '__BUILD_VERSION__'; 

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './favicon.png',
  './icon-192.png',
  './icon-512.png'
];

// 1. Install Event: Caches the initial assets
self.addEventListener('install', (event) => {
  // Automatically activate the new service worker so it's ready when the user clicks "Reload"
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Sylva SW] Caching App Shell:', CACHE_NAME);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate Event: Cleans up old, stale caches from previous versions
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
if (cacheName !== CACHE_NAME && cacheName !== 'sylva-permanent-license-v1' && cacheName !== 'transformers-cache') {            console.log('[Sylva SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. Fetch Event: Stale-While-Revalidate Strategy
self.addEventListener('fetch', event => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(networkResponse => {
                // Don't cache if it is not a valid successful response
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }
                
                // Clone the response BEFORE caching it
                const responseToCache = networkResponse.clone();
                
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                
                return networkResponse;
            });
        })
    );
});