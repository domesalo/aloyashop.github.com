self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("domshop-cache").then((cache) => {
            return cache.addAll([
                "index.html",
                "produit.html",
                "paiement.html",
                "styles.css",
                "icons/icon-192x192.png",
                "icons/icon-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});