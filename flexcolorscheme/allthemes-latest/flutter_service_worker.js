'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "ede88626d8397114af3887b62c1880a9",
"assets/loading2.gif": "2761411cf1769dd3609709ba6be57a1e",
"assets/FontManifest.json": "e133a9137b72b954712b83379e736460",
"assets/AssetManifest.bin": "25530640e3ac7ba7ebfd176034e60f0b",
"assets/fonts/MaterialIcons-Regular.otf": "463acdd2ac3708a122b4f33d4fa47d4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/google_fonts/FiraMono-Regular.ttf": "aa00c5d91c47e7b718b5cdca3dea7875",
"assets/assets/google_fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/google_fonts/NotoSans-Medium.ttf": "09dc02dbe8133545806d275a2fec2ca7",
"assets/assets/google_fonts/OFL.txt": "053f21bb22e6d0bee98b6610ec19d521",
"assets/assets/google_fonts/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/fonts/FlexIcons.ttf": "fa0bb2bc56cb78e425f06e913961744d",
"assets/assets/images/ud_opened_tabs.svg": "c5a285a8afa8a460e2570b682f6221ab",
"assets/assets/images/ud_mobile_web.svg": "6de6aa3d8e045d6d1ca91006752c5c3b",
"assets/assets/images/ud_healthy_options.svg": "3e78385e5e98be1f000c0174899ea65e",
"assets/assets/images/ud_walking_around.svg": "7b54b49e814ae8cdd17f1e9bbe00666b",
"assets/assets/images/ud_in_sync.svg": "0e06e3ea9fc90a5c005b1c6c5998e099",
"assets/assets/images/ud_my_notifications.svg": "efd4d3569d9cf7cc4be26f60482c46af",
"assets/assets/images/ud_environment.svg": "4dc83e5c6ec706278990092b7fb50e69",
"assets/assets/images/ud_nature_on_screen.svg": "0256b07845db59084042c687e78e76f3",
"assets/assets/images/shop_woman_look_left.jpg": "13a949901df3abd443912bf5d37a56ec",
"assets/assets/images/shop_man_look_right.jpg": "ada7026a7a20a9f7dbdfe337188777c3",
"assets/assets/images/ud_nature.svg": "22b0852322a29e4b536d69446cec9c29",
"assets/assets/images/ud_apps.svg": "549b71f37205d7ba2eb316ca368430b7",
"assets/assets/images/ud_progress_overview.svg": "d818b52fb91eeedbf22c493e308d62ac",
"assets/assets/images/ud_setup_wizard.svg": "1d6e1b509ab056cccd45d39abc669b5a",
"assets/assets/images/ud_posting_photo.svg": "9e4bc0125385ab8f8a45fed2f459d90b",
"assets/assets/images/ud_mobile_sell.svg": "88556646f36a87deb50fa62baaa19bf6",
"assets/assets/images/ud_city_walk.svg": "ff757fcdf61a9dacbeed776b6965f6c2",
"assets/assets/images/ud_permission_denied.svg": "337d2c07cad2185ecef4f2d0e2480dd2",
"assets/assets/images/ud_modern_design.svg": "759ed5bf7c531b5eeb3433ad293fc821",
"assets/assets/images/ud_product_teardown.svg": "380535d59f7fc5c39c11767adee84f76",
"assets/assets/images/ud_post_online.svg": "5c6186af5b661fd081a30aee372b0111",
"assets/assets/images/ud_energizer.svg": "95403099ff5e01a27f906010fa24a2f3",
"assets/assets/images/ud_building_blocks.svg": "71ee150b7eb86c82e9222b67b74cd4e4",
"assets/assets/images/ud_empty.svg": "25b0854311cf35b8194ebd7be4c97a73",
"assets/assets/images/ud_mobile_feed.svg": "ce23adbc258ad719e368e625a37c61bf",
"assets/assets/images/ud_dark_mode.svg": "cd0e162b95cd9b6130eed4338e665648",
"assets/assets/images/ud_app_installation.svg": "91775dd59e4097f3be7ee28e71e0eb75",
"assets/assets/images/ud_progressive_app.svg": "93b50dae99302df619ea8767dc332d88",
"assets/assets/images/ud_file_sync.svg": "cb8be86399adbe526e658fbd6e6a3334",
"assets/assets/images/ud_sharing_articles.svg": "cb48403b5bdde597605c93d989d0b493",
"assets/assets/images/ud_suburbs.svg": "bf406a95be2d19807b114d25e4e9c4c8",
"assets/assets/images/ud_web_devices.svg": "282dfc9bcc1f6fdfe54e4abc26bbd3e2",
"assets/assets/images/ud_mobile_devices.svg": "f663df7f57bea6e9b5248690265d1421",
"assets/assets/images/ud_prioritise.svg": "082f884f5b06cd951fd0d7256f84cb00",
"assets/assets/images/ud_home_screen.svg": "cf549a61f9e7015311d288e2e0d344f2",
"assets/assets/images/ud_mobile_apps.svg": "9ab42ab85e371b8d9bdececb2cdb9618",
"assets/assets/images/ud_walking_outside.svg": "cc63b0d851a69725aedc4d3b7d7bb58a",
"assets/assets/images/ud_takeout_boxes.svg": "6c28cfb821d13e225a13c25c02df9272",
"assets/assets/images/shop_pet.jpg": "3f55b051db6fb912e1b91a54a8e5e0dd",
"assets/assets/images/ud_open_source.svg": "8d43ab9744ffc0172d0564b8058ff46e",
"assets/assets/images/ud_dream_world.svg": "f520744aba1da5630be11c6e108e6c05",
"assets/assets/images/ud_farm_girl.svg": "7315b699ca0f9ba9c87b7c7dfe8ebe90",
"assets/assets/images/ud_verified.svg": "b2bbe6d00635c4da07b8013c79eb1a52",
"assets/assets/images/ud_set_preferences.svg": "164e0e23d0897428bd42ced3b4ed9841",
"assets/loading.gif": "cb4ffe4ab1cc04057cbd2c5959f51b91",
"assets/NOTICES": "052afbfca3a45b5b324148cce2d404bc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "7a20bc8f6a26b1441a486ed9fce57cb8",
"assets/AssetManifest.bin.json": "47b965c638facd44292dcc7cd1fe2a12",
"index.html": "a24cdd238cc197f325be45225a6f973f",
"/": "a24cdd238cc197f325be45225a6f973f",
"manifest.json": "cd7a31e869734e249c887c0110402ae1",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/Icon-maskable-192.png": "3bf01613997bd4c2011dfe76f034c44a",
"icons/Icon-192.png": "3bf01613997bd4c2011dfe76f034c44a",
"icons/Icon-512.png": "3917503fe2d1bf649fb519323cd8df32",
"icons/Icon-maskable-512.png": "3917503fe2d1bf649fb519323cd8df32",
"favicon.png": "30432e1d4e747b9dab8b3e2e47d9ff0f",
"version.json": "6dd8edd1fe49fb7941f7b9bab19e09b6",
"flutter_bootstrap.js": "c440ad7eb99148f8d4f12111d8a0accf"};
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
