self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("six-pro-cache").then((cache) => {
      return cache.addAll([
        "/six/",
        "/six/index.html",
        "/six/math.html",
        "/six/english.html",
        "/six/laws.html",
        "/six/schedule.html",
        "/six/tasks.html",
        "/six/support.html",
        "/six/app-info.html"
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