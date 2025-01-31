self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("pwa-cache").then((cache) => {
        return cache.addAll(["/", "/offline.html"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  });
  