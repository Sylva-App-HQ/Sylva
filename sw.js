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
          if (cacheName !== CACHE_NAME) {
            console.log('[Sylva SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. Fetch Event: Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  // Ignore non-GET requests or external API calls (like Stripe/PayPal)
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Fetch the newest version from the network in the background
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      }).catch(() => {
        // Graceful fail for fully offline users
      });

      // Return the lightning-fast cached version immediately
      return cachedResponse || fetchPromise;
    })
  );
});