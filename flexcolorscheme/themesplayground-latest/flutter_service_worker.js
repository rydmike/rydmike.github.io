'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "3917503fe2d1bf649fb519323cd8df32",
"icons/Icon-maskable-512.png": "3917503fe2d1bf649fb519323cd8df32",
"icons/Icon-192.png": "3bf01613997bd4c2011dfe76f034c44a",
"icons/Icon-maskable-192.png": "3bf01613997bd4c2011dfe76f034c44a",
"manifest.json": "cd7a31e869734e249c887c0110402ae1",
"index.html": "6c95a23f17bd2a4b738f8c23829e5de7",
"/": "6c95a23f17bd2a4b738f8c23829e5de7",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "47b965c638facd44292dcc7cd1fe2a12",
"assets/assets/google_fonts/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/google_fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/google_fonts/FiraMono-Regular.ttf": "aa00c5d91c47e7b718b5cdca3dea7875",
"assets/assets/google_fonts/NotoSans-Medium.ttf": "09dc02dbe8133545806d275a2fec2ca7",
"assets/assets/google_fonts/OFL.txt": "053f21bb22e6d0bee98b6610ec19d521",
"assets/assets/images/ud_home_screen.svg": "cf549a61f9e7015311d288e2e0d344f2",
"assets/assets/images/ud_set_preferences.svg": "164e0e23d0897428bd42ced3b4ed9841",
"assets/assets/images/ud_suburbs.svg": "bf406a95be2d19807b114d25e4e9c4c8",
"assets/assets/images/ud_prioritise.svg": "082f884f5b06cd951fd0d7256f84cb00",
"assets/assets/images/ud_dream_world.svg": "f520744aba1da5630be11c6e108e6c05",
"assets/assets/images/ud_verified.svg": "b2bbe6d00635c4da07b8013c79eb1a52",
"assets/assets/images/ud_walking_outside.svg": "cc63b0d851a69725aedc4d3b7d7bb58a",
"assets/assets/images/ud_mobile_sell.svg": "88556646f36a87deb50fa62baaa19bf6",
"assets/assets/images/ud_takeout_boxes.svg": "6c28cfb821d13e225a13c25c02df9272",
"assets/assets/images/ud_environment.svg": "4dc83e5c6ec706278990092b7fb50e69",
"assets/assets/images/ud_dark_mode.svg": "cd0e162b95cd9b6130eed4338e665648",
"assets/assets/images/ud_app_installation.svg": "91775dd59e4097f3be7ee28e71e0eb75",
"assets/assets/images/ud_mobile_feed.svg": "ce23adbc258ad719e368e625a37c61bf",
"assets/assets/images/ud_walking_around.svg": "7b54b49e814ae8cdd17f1e9bbe00666b",
"assets/assets/images/ud_mobile_apps.svg": "9ab42ab85e371b8d9bdececb2cdb9618",
"assets/assets/images/ud_open_source.svg": "8d43ab9744ffc0172d0564b8058ff46e",
"assets/assets/images/shop_pet.jpg": "3f55b051db6fb912e1b91a54a8e5e0dd",
"assets/assets/images/shop_man_look_right.jpg": "ada7026a7a20a9f7dbdfe337188777c3",
"assets/assets/images/ud_permission_denied.svg": "337d2c07cad2185ecef4f2d0e2480dd2",
"assets/assets/images/ud_post_online.svg": "5c6186af5b661fd081a30aee372b0111",
"assets/assets/images/ud_in_sync.svg": "0e06e3ea9fc90a5c005b1c6c5998e099",
"assets/assets/images/ud_mobile_devices.svg": "f663df7f57bea6e9b5248690265d1421",
"assets/assets/images/shop_woman_look_left.jpg": "13a949901df3abd443912bf5d37a56ec",
"assets/assets/images/ud_energizer.svg": "95403099ff5e01a27f906010fa24a2f3",
"assets/assets/images/ud_web_devices.svg": "282dfc9bcc1f6fdfe54e4abc26bbd3e2",
"assets/assets/images/ud_modern_design.svg": "759ed5bf7c531b5eeb3433ad293fc821",
"assets/assets/images/ud_progress_overview.svg": "d818b52fb91eeedbf22c493e308d62ac",
"assets/assets/images/ud_posting_photo.svg": "9e4bc0125385ab8f8a45fed2f459d90b",
"assets/assets/images/ud_city_walk.svg": "ff757fcdf61a9dacbeed776b6965f6c2",
"assets/assets/images/ud_apps.svg": "549b71f37205d7ba2eb316ca368430b7",
"assets/assets/images/ud_healthy_options.svg": "3e78385e5e98be1f000c0174899ea65e",
"assets/assets/images/ud_my_notifications.svg": "efd4d3569d9cf7cc4be26f60482c46af",
"assets/assets/images/ud_mobile_web.svg": "6de6aa3d8e045d6d1ca91006752c5c3b",
"assets/assets/images/ud_file_sync.svg": "cb8be86399adbe526e658fbd6e6a3334",
"assets/assets/images/ud_farm_girl.svg": "7315b699ca0f9ba9c87b7c7dfe8ebe90",
"assets/assets/images/ud_opened_tabs.svg": "c5a285a8afa8a460e2570b682f6221ab",
"assets/assets/images/ud_building_blocks.svg": "71ee150b7eb86c82e9222b67b74cd4e4",
"assets/assets/images/ud_setup_wizard.svg": "1d6e1b509ab056cccd45d39abc669b5a",
"assets/assets/images/ud_nature_on_screen.svg": "0256b07845db59084042c687e78e76f3",
"assets/assets/images/ud_product_teardown.svg": "380535d59f7fc5c39c11767adee84f76",
"assets/assets/images/ud_empty.svg": "25b0854311cf35b8194ebd7be4c97a73",
"assets/assets/images/ud_nature.svg": "22b0852322a29e4b536d69446cec9c29",
"assets/assets/images/ud_sharing_articles.svg": "cb48403b5bdde597605c93d989d0b493",
"assets/assets/images/ud_progressive_app.svg": "93b50dae99302df619ea8767dc332d88",
"assets/assets/fonts/FlexIcons.ttf": "8494cd1faaa48f1b2b0e390a21e61832",
"assets/fonts/MaterialIcons-Regular.otf": "1dc87b6ce40be62d053a00433115a410",
"assets/loading.gif": "cb4ffe4ab1cc04057cbd2c5959f51b91",
"assets/loading2.gif": "2761411cf1769dd3609709ba6be57a1e",
"assets/NOTICES": "6278eecb3972b9650bd0afdd5fe1ae94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/FontManifest.json": "5bed5a120fc5fb1b7c96d7e06597c4bf",
"assets/AssetManifest.bin": "25530640e3ac7ba7ebfd176034e60f0b",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "30432e1d4e747b9dab8b3e2e47d9ff0f",
"flutter_bootstrap.js": "4c62612ff559f214535bc34f39984656",
"version.json": "b52d90a9b6422c456edf715300e5d6ef",
"main.dart.js": "d9861e1e271ccbe1d1f3207f0f466630"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
