'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"assets/assets/fonts/FlexIcons.ttf": "fa0bb2bc56cb78e425f06e913961744d",
"assets/assets/images/My%2520notifications.svg": "efd4d3569d9cf7cc4be26f60482c46af",
"assets/assets/images/Building%2520blocks.svg": "71ee150b7eb86c82e9222b67b74cd4e4",
"assets/assets/images/Prioritise.svg": "082f884f5b06cd951fd0d7256f84cb00",
"assets/assets/images/Mobile%2520devices.svg": "f663df7f57bea6e9b5248690265d1421",
"assets/assets/images/Posting%2520photo.svg": "9e4bc0125385ab8f8a45fed2f459d90b",
"assets/assets/images/Opened%2520tabs.svg": "c5a285a8afa8a460e2570b682f6221ab",
"assets/assets/images/Setup%2520wizard.svg": "1d6e1b509ab056cccd45d39abc669b5a",
"assets/assets/images/dream_world.svg": "f520744aba1da5630be11c6e108e6c05",
"assets/assets/images/pet.jpg": "3f55b051db6fb912e1b91a54a8e5e0dd",
"assets/assets/images/Product%2520teardown.svg": "380535d59f7fc5c39c11767adee84f76",
"assets/assets/images/city_walk.svg": "ff757fcdf61a9dacbeed776b6965f6c2",
"assets/assets/images/mobile_sell.svg": "88556646f36a87deb50fa62baaa19bf6",
"assets/assets/images/empty.svg": "25b0854311cf35b8194ebd7be4c97a73",
"assets/assets/images/Web%2520devices.svg": "282dfc9bcc1f6fdfe54e4abc26bbd3e2",
"assets/assets/images/sharing_articles.svg": "cb48403b5bdde597605c93d989d0b493",
"assets/assets/images/Set%2520preferences.svg": "164e0e23d0897428bd42ced3b4ed9841",
"assets/assets/images/Progressive%2520app.svg": "93b50dae99302df619ea8767dc332d88",
"assets/assets/images/permission_denied.svg": "337d2c07cad2185ecef4f2d0e2480dd2",
"assets/assets/images/Home%2520screen.svg": "cf549a61f9e7015311d288e2e0d344f2",
"assets/assets/images/Post%2520online.svg": "5c6186af5b661fd081a30aee372b0111",
"assets/assets/images/nature.svg": "22b0852322a29e4b536d69446cec9c29",
"assets/assets/images/environment.svg": "4dc83e5c6ec706278990092b7fb50e69",
"assets/assets/images/Progress%2520overview.svg": "d818b52fb91eeedbf22c493e308d62ac",
"assets/assets/images/walking_outside.svg": "cc63b0d851a69725aedc4d3b7d7bb58a",
"assets/assets/images/Mobile%2520web.svg": "6de6aa3d8e045d6d1ca91006752c5c3b",
"assets/assets/images/Mobile%2520feed.svg": "ce23adbc258ad719e368e625a37c61bf",
"assets/assets/images/Open%2520source.svg": "8d43ab9744ffc0172d0564b8058ff46e",
"assets/assets/images/Dark%2520mode.svg": "cd0e162b95cd9b6130eed4338e665648",
"assets/assets/images/farm_girl.svg": "7315b699ca0f9ba9c87b7c7dfe8ebe90",
"assets/assets/images/Modern%2520design.svg": "759ed5bf7c531b5eeb3433ad293fc821",
"assets/assets/images/Healthy%2520options.svg": "3e78385e5e98be1f000c0174899ea65e",
"assets/assets/images/verified.svg": "b2bbe6d00635c4da07b8013c79eb1a52",
"assets/assets/images/energizer.svg": "95403099ff5e01a27f906010fa24a2f3",
"assets/assets/images/takeout_boxes.svg": "6c28cfb821d13e225a13c25c02df9272",
"assets/assets/images/Nature%2520on%2520screen.svg": "0256b07845db59084042c687e78e76f3",
"assets/assets/images/nature_on_screen.svg": "0256b07845db59084042c687e78e76f3",
"assets/assets/images/walking_around.svg": "7b54b49e814ae8cdd17f1e9bbe00666b",
"assets/assets/images/woman-look-left.jpg": "13a949901df3abd443912bf5d37a56ec",
"assets/assets/images/man-look-right.jpg": "ada7026a7a20a9f7dbdfe337188777c3",
"assets/assets/images/File%2520sync.svg": "cb8be86399adbe526e658fbd6e6a3334",
"assets/assets/images/App%2520installation.svg": "91775dd59e4097f3be7ee28e71e0eb75",
"assets/assets/images/suburbs.svg": "bf406a95be2d19807b114d25e4e9c4c8",
"assets/assets/images/Mobile%2520apps.svg": "9ab42ab85e371b8d9bdececb2cdb9618",
"assets/assets/images/Apps.svg": "549b71f37205d7ba2eb316ca368430b7",
"assets/assets/images/In%2520sync.svg": "0e06e3ea9fc90a5c005b1c6c5998e099",
"assets/assets/google_fonts/NotoSans-Regular.ttf": "ac08e269b7f479624b266c0ea20013b4",
"assets/assets/google_fonts/OFL.txt": "053f21bb22e6d0bee98b6610ec19d521",
"assets/assets/google_fonts/FiraMono-Regular.ttf": "aa00c5d91c47e7b718b5cdca3dea7875",
"assets/assets/google_fonts/NotoSans-Bold.ttf": "8ac165243fb633296963b149f206a377",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "6dfb0bbdc8d493adaa831884aa4b1ac5",
"assets/NOTICES": "0df8325316df2c8d21901c977dae759f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/FontManifest.json": "7ee64b037a52064da02ae92c44d955fa",
"assets/AssetManifest.bin": "66c7842d46e1eaa6d830eb2ce3d726d3",
"assets/AssetManifest.json": "74986979fbbe16769ff823d26a8c8f95",
"assets/loading.gif": "cb4ffe4ab1cc04057cbd2c5959f51b91",
"index.html": "689a970fbeb5fb66eeb354c6538e0327",
"/": "689a970fbeb5fb66eeb354c6538e0327",
"favicon.png": "3a84d95a345a0585d14a5657ee7e7455",
"version.json": "2e558657b758fd1a920a34473273693d",
"icons/Icon-maskable-192.png": "f0d6422b2e4eda7c51bcbca430109d2a",
"icons/Icon-192.png": "f0d6422b2e4eda7c51bcbca430109d2a",
"icons/Icon-512.png": "7f5cf44e4f9da261a0965093d243b51f",
"icons/Icon-maskable-512.png": "7f5cf44e4f9da261a0965093d243b51f",
"main.dart.js": "565d900773e9d047ed92ba3ed8fb4a42",
"manifest.json": "3d16d0c20582e000de47edbba56b5ef0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
