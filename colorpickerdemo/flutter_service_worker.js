'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0d31010cd84fbb29493595966307c536",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "3234b3e853eabe9fc936cd7a133055ad",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "18a576bf7ceb253929ac1f7bdfe6d467",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "9098d3de14ef1cfae7be4f195fe1a174",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "c6cdfded4630ba6d9a2dceb70aa4fe0f",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "afd48b813752d70b936e73d99b5dca35",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "d52f011be65b281ba8ca1c3f689cf133",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c1d8fbd29929d048c8d065d1be3bc35d",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/assets/fonts/Roboto/Roboto-RegularItalic.ttf": "9da6e8b1803fec548ee0720f620f93f5",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "d1e42f1b6d0c32271f8e68515563a213",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "2cbc2256ef5afbf04c18beeee4478e55",
"assets/FontManifest.json": "aa2fafc635e36bcf332465d44d31456b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "4829070b2fb61440848d2b62ccf5760b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "55efb59cfa049b99c8d71cd3ca524fbc",
"/": "55efb59cfa049b99c8d71cd3ca524fbc",
"main.dart.js": "daf8d69adec77f67a0c28f95fdbddd73",
"manifest.json": "8e35f4c50b4f0b36c6903f5acde238a1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
