'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fa2e80e07c54dd1bd031b0ee7f178612",
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
"assets/assets/fonts/rubikmono/RubikMonoOne-Regular.ttf": "00c8b3ccb1e038d8c63a419b76a7debe",
"assets/assets/images/Active%2520options.svg": "0745134a75e3835e64b4b1f830413a34",
"assets/assets/images/App%2520installation.svg": "91775dd59e4097f3be7ee28e71e0eb75",
"assets/assets/images/Apps.svg": "549b71f37205d7ba2eb316ca368430b7",
"assets/assets/images/Building%2520blocks.svg": "71ee150b7eb86c82e9222b67b74cd4e4",
"assets/assets/images/Choice.svg": "9aa3135acea46c7d7964e89ee8dd1347",
"assets/assets/images/Dark%2520mode.svg": "cd0e162b95cd9b6130eed4338e665648",
"assets/assets/images/File%2520sync.svg": "cb8be86399adbe526e658fbd6e6a3334",
"assets/assets/images/flexfold1.png": "b71e9dbcbdc91bc86dae4848368a00fa",
"assets/assets/images/Healthy%2520options.svg": "3e78385e5e98be1f000c0174899ea65e",
"assets/assets/images/Home%2520screen.svg": "cf549a61f9e7015311d288e2e0d344f2",
"assets/assets/images/In%2520progress.svg": "f1ad2b47764f8d7fa01eb8be7b07bd4d",
"assets/assets/images/In%2520sync.svg": "0e06e3ea9fc90a5c005b1c6c5998e099",
"assets/assets/images/Mobile%2520apps.svg": "9ab42ab85e371b8d9bdececb2cdb9618",
"assets/assets/images/Mobile%2520devices.svg": "f663df7f57bea6e9b5248690265d1421",
"assets/assets/images/Mobile%2520feed.svg": "ce23adbc258ad719e368e625a37c61bf",
"assets/assets/images/Mobile%2520web.svg": "6de6aa3d8e045d6d1ca91006752c5c3b",
"assets/assets/images/Modern%2520design.svg": "759ed5bf7c531b5eeb3433ad293fc821",
"assets/assets/images/My%2520notifications.svg": "efd4d3569d9cf7cc4be26f60482c46af",
"assets/assets/images/Nature%2520on%2520screen.svg": "0256b07845db59084042c687e78e76f3",
"assets/assets/images/Open%2520source.svg": "8d43ab9744ffc0172d0564b8058ff46e",
"assets/assets/images/Opened%2520tabs.svg": "c5a285a8afa8a460e2570b682f6221ab",
"assets/assets/images/Post%2520online.svg": "5c6186af5b661fd081a30aee372b0111",
"assets/assets/images/Posting%2520photo.svg": "9e4bc0125385ab8f8a45fed2f459d90b",
"assets/assets/images/Prioritise.svg": "082f884f5b06cd951fd0d7256f84cb00",
"assets/assets/images/Product%2520teardown.svg": "380535d59f7fc5c39c11767adee84f76",
"assets/assets/images/Progress%2520overview.svg": "d818b52fb91eeedbf22c493e308d62ac",
"assets/assets/images/Progressive%2520app.svg": "93b50dae99302df619ea8767dc332d88",
"assets/assets/images/Questions.svg": "57b8f6fc99798e833c2ad35ed20c4b0a",
"assets/assets/images/RM400.jpg": "116399354873d9d19b8bc482291dcd9c",
"assets/assets/images/Set%2520preferences.svg": "164e0e23d0897428bd42ced3b4ed9841",
"assets/assets/images/Setup%2520wizard.svg": "1d6e1b509ab056cccd45d39abc669b5a",
"assets/assets/images/Web%2520devices.svg": "282dfc9bcc1f6fdfe54e4abc26bbd3e2",
"assets/FontManifest.json": "243189dc841e11283b7f3b07a14af460",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "e91080bf2d8a865bcb48faa33a5eed3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f4c3d84a27a59e54b704694c4b27ed88",
"/": "f4c3d84a27a59e54b704694c4b27ed88",
"main.dart.js": "fc5bd23a7cee8cadb4514b0de93c2bb4",
"manifest.json": "683e9781a8276b938dac16f82fe1e433"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
