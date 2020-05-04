'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "35aba303af22bd15b0d9244875ea8195",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "e3242149669bebf6afc4b0b5d22ec6ae",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "59a08c76185220c732ed4926d32a6706",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "215a9e631fb43de893093e70db016cff",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "e375c6fe9bbeadb38d4911107e480378",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "9b9e2f4637ef72c726fda60e06b78d13",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "94603128108f9cf9b26626564265c1d0",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "f9ab30a63e119d88351c7bd8d87a8459",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "2f354053d1c9c36f533ebd226698bfa5",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.ttf": "3eb3e92074690a8bb2dc9f11a67d4a80",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "97573fc844f3f38e77c36bdc9ed07cbb",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/fonts/montserrat/Montserrat-RegularItalic.ttf": "b0cf52e5f2f3e3fbc204cb06fd0e7b11",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "bbcd5bbb5993808a92df01a5dfef77cd",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "9b5089e2084e7a0a80e3ea8ad870a260",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "b50f5872459e8e17eaffd5d57a2b2f8e",
"assets/assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "5ba39d1f3eea1841e63a434e62e7f2d4",
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
"assets/FontManifest.json": "480a7685080e9078b08d34bc1106dbfe",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d70df6157a99e8108f27ab84ecc16525",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8d09ba0015b65b4ba76982c14f0fb5cc",
"/": "8d09ba0015b65b4ba76982c14f0fb5cc",
"main.dart.js": "1f3ac0f8a99fea25c42e7b8604013529",
"manifest.json": "86932e8ba0181df2175d49d5d72372f0"
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
