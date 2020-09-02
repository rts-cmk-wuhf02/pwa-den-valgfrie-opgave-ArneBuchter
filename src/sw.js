let cacheName = "static-cache-v6"
let fileToCache = [
    '/',
    '/index.html',
	'/assets/css/index.css',
	'/assets/javaScript/app.js',
	'/assets/javaScript/index.js',
	'/assets/javaScript/app.js',
	'/projects/index.html',
	'/Timeline/index.html',
    '/offline.html'
]

self.addEventListener('install', function(event) {
	 console.log('service worker installed!');
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			cache.addAll(fileToCache);
		})
	); 
});

self.addEventListener('activate', (e) => {
 	e.waitUntil(
		caches.keys().then((cacheNames) => {
			cacheNames.map((e) => {
				if (e !== cacheName) caches.delete(e);
			});
		})
	); 
});

self.addEventListener('fetch', function(event) {
	// console.log('fetch', event);

	 event.respondWith(
		caches.open(cacheName).then(function(cache) {
			return cache.match(event.request)
				.then(function(response) {
					return (
                        response || fetch(event.request)
                        .then(function(response) {
							cache.put(event.request, response.clone());
							return response;
						})
					);
				})
				.catch(function() {
					return caches.match('/offline.html');
				});
		})
	); 
});