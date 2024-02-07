const CACHE = "pwabuilder-offline";
// Import Workbox library from CDN

// Import Workbox library from CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');





// Listen for messages from the main thread
self.addEventListener("message", (event) => {
  // If the message indicates skipping waiting, call skipWaiting
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Register a route for caching with Workbox
workbox.routing.registerRoute(
  // Match all routes using a regular expression
  new RegExp('/*'),
  // Use Stale-While-Revalidate strategy for caching
  new workbox.strategies.StaleWhileRevalidate({
    // Set the cache name
    cacheName: CACHE
  })
);
