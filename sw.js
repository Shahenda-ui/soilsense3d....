const CACHE = "soilsense3d-v1";
const FILES = ["/soilsense3d/", "/soilsense3d/index.html", "/soilsense3d/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
