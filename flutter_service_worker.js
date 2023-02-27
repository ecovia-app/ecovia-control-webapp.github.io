'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4dd38b0b02792c9752e3ee5c1ccc5531",
"splash/img/light-2x.png": "7846a70d4973e4b379c8bb4126029566",
"splash/img/dark-4x.png": "58bcbe4d7e977d2ae0959d67d66dc2ca",
"splash/img/light-3x.png": "06a7cfab3985fcc8e59ce61c773652e6",
"splash/img/dark-3x.png": "06a7cfab3985fcc8e59ce61c773652e6",
"splash/img/light-4x.png": "58bcbe4d7e977d2ae0959d67d66dc2ca",
"splash/img/dark-2x.png": "7846a70d4973e4b379c8bb4126029566",
"splash/img/dark-1x.png": "1b82a4380bfd97ae7ae49befc27547da",
"splash/img/light-1x.png": "1b82a4380bfd97ae7ae49befc27547da",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"index.html": "96b81600ed9ebde5277a3ebbfe71361b",
"/": "96b81600ed9ebde5277a3ebbfe71361b",
"firebase-messaging-sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"main.dart.js": "84c34c8643fb2addec935df41161328a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "2b9732ebbe1e45c1649a006a667c035b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f3f797438cede702dbcb720d73b7122",
"assets/AssetManifest.json": "03703e6285610eac007a806839cace9c",
"assets/NOTICES": "fbc040b9dc20f7c3c26d634d1b526b1b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places_hoc081098/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_hoc081098/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/research_package/assets/lang/en.json": "1d7025059e3ff6592542d53208eb8164",
"assets/packages/research_package/assets/lang/da.json": "8226322230709bbdbedaf2c7b31e907b",
"assets/packages/research_package/assets/audio/RPTimerStepSound.mp3": "39618f277b71da45418111ba420d985f",
"assets/packages/research_package/assets/icons/document.png": "baf5f7e19f4a40f0efbcb28e68816eb0",
"assets/packages/research_package/assets/icons/archive.png": "774dd5a71e4d911fe550cf55515632f6",
"assets/packages/research_package/assets/icons/settings.png": "4e19b796edaaec7be67204987b9b6ac2",
"assets/packages/research_package/assets/icons/health.png": "be3ed6fb9fe7460b7e1fc9223c5f053a",
"assets/packages/research_package/assets/icons/networking.png": "5c32a1b960963f41dd7e93a370e5b06f",
"assets/packages/research_package/assets/icons/deadline.png": "b84f6551cefb9a1fc843bc38b3c377c1",
"assets/packages/research_package/assets/icons/target.png": "20cd5efaaab93aca9b9b59a1cb0e5f67",
"assets/packages/research_package/assets/icons/checkmark.png": "78a18f2a7a1581c6dfb9407f3ba23cdd",
"assets/packages/research_package/assets/icons/management.png": "ca332c308380f95bae725ea460002f0d",
"assets/packages/research_package/assets/icons/task.png": "ff2254a13f8390240811dd0f48f3b7c8",
"assets/packages/research_package/assets/icons/id.png": "e82237beb95dd46c69d645c1f404f09e",
"assets/packages/research_package/assets/icons/handshake.png": "42d786337771ddc6ad8847c26af3ac41",
"assets/packages/research_package/assets/icons/location.png": "ae8041eb0eb7ef658ae90fd234e26f1d",
"assets/packages/research_package/assets/icons/analysis.png": "ff31bab59d70bd99192f05381e81b2c4",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/background/background_6.jpg": "13be08d1f4fe638ca17683a01184f612",
"assets/assets/background/background_7.jpg": "080aab5974c6ba366ee47ec5104aeb74",
"assets/assets/background/background_5.jpg": "8d6489741355d64f536e7ac5857900d5",
"assets/assets/background/background_4.jpg": "ad9acb38a401b7f1eeba8658c0e77d79",
"assets/assets/background/background_1.jpg": "d2679ac35d8f8333d645af08ecdca508",
"assets/assets/background/background_3.jpg": "5cfbc3c064d98137f531563de4c63f5a",
"assets/assets/background/background_2.jpg": "e6225eed10ee3b858a068f8213cdaac7",
"assets/assets/fi-rr-cross.svg": "87735c5de36aa3cacd3c76e0515e1e9a",
"assets/assets/fi-rr-cross-small.svg": "ba00f6a37207f398d7b7de720536beed",
"assets/assets/fi-rr-list.svg": "ef87c78ffbce34e6bae99e735681d41f",
"assets/assets/fi-rr-heart.svg": "c0b7e59708b7786914bf37cc83322dda",
"assets/assets/fi-rr-settings-sliders.svg": "8cd1b9bbdad3f54a648058d1281ec795",
"assets/assets/fi-rr-notebook.svg": "971c108a9043e95c26048893a25ad866",
"assets/assets/fi-rr-home.svg": "02199e2d0b39ca09765f35c925de839e",
"assets/assets/fi-rr-user.svg": "e7fe985d6eb47a0f65c40964ddea1f80",
"assets/assets/fi-rr-refresh.svg": "6e34a5f4e1319d851c6451d9ee2336c1",
"assets/assets/ecovia_images/ecovia_app_icon_transparent.png": "3f4fdb3c6c3f331b4e3006305e01feea",
"assets/assets/ecovia_images/ecovia_app_icon.png": "bd2c5d93f0542ef2505668c962e4e172",
"assets/assets/ecovia_images/ecovia_logo.png": "6c1cf2893243d0ea91e04d247f950c0a",
"assets/assets/ecovia_images/ecovia_logo_with_text.png": "60ca237126cf83a5d7d81d126b66caf2",
"assets/assets/ecovia_images/ecovia_logo_rounded_corners.png": "800a2eb58c3487fa605f174a183f9bd5",
"assets/assets/ecovia_images/ecovia_control_logo_rounded_corners.png": "06ddaeea4cddfdc210b6cc0c22d483e1",
"assets/assets/ecovia_images/ecovia_logo.jpeg": "6c1cf2893243d0ea91e04d247f950c0a",
"assets/assets/ecovia_images/ecovia_logo_squared.png": "857668fd9a6e0c0bd336c7f883a9df07",
"assets/assets/fi-rr-time-forward.svg": "db8aeb74c94c3b90c4a6ddf576364e17",
"assets/assets/example_json.json": "0dbac5eccb9f8a8dd8c434f9e9264ca6",
"assets/assets/fi-rr-feather.svg": "aa46e381ca591ab44dbbeb31647bd4f5",
"assets/assets/fi-rr-box.svg": "9758ca4391d2dc0be1d4e5497cabe998",
"assets/assets/fi-rr-apps.svg": "3c7473b41f48f3d3c8b112045343737f",
"assets/assets/fi-rr-settings.svg": "eafb7bcefea3896f7dd95243288e77e5",
"assets/assets/fi-rr-star.svg": "af21dca64a44efe5774d1fdb493fe325",
"assets/assets/fi-rr-portrait.svg": "bbbc3eeb42d6fab8b6bd0c1b1aaa7090",
"assets/assets/fi-rr-world.svg": "06c0c9d8f6a9a6cf232c775a3ad0a42f",
"assets/assets/fi-rr-align-left.svg": "c1e4a92eca09e4302d1deb60ef85a0d5",
"assets/assets/fi-rr-thumbs-up.svg": "a5b60b9856a830ccfc361fc50c87a329",
"assets/assets/fi-rr-menu-burger.svg": "25c919923bed23e3eb12c51590a51b38",
"assets/assets/portion_images/milk_portion.png": "35e1d5c08bcabc8a5c78029e03bb328d",
"assets/assets/portion_images/saltysnacks_portion.png": "128f505514e8adda5e6b026b5ae4242d",
"assets/assets/portion_images/cheese_portion.png": "11c528567dc3bde1f4862823e2652601",
"assets/assets/portion_images/pasta_portion.png": "34dd18cee387c96a9e58b4ff928ac309",
"assets/assets/portion_images/softdrink_portion.png": "45190a87dea98108e423187603f5afa6",
"assets/assets/portion_images/deli_portion.png": "80d3624074c116c04d90738382f57cfc",
"assets/assets/portion_images/bread_portion.png": "11522c16d348ed02f5d3198ce090f570",
"assets/assets/portion_images/frenchfries_portion.png": "1f2e5b64bf015bf00ae0ae27a9e1f32b",
"assets/assets/portion_images/coffee_portion.png": "54417b7599869b0acbd8b78f1bfb3077",
"assets/assets/portion_images/rice_portion.png": "aa98378a4415c35e761902bd7f1b1e3d",
"assets/assets/portion_images/eggs_portion.png": "050250605cc440d3f014cd44676f1ea7",
"assets/assets/portion_images/meat_portion.png": "11f46e277f1d6b51369e88b300ccf92a",
"assets/assets/portion_images/poultry_portion.png": "0f5a4682ba36099f4281fb11b658c614",
"assets/assets/portion_images/veggie_portion.png": "a6a76720f9b5caac1c96900e479fd67d",
"assets/assets/fi-rr-thumbs-down.svg": "fa4e262fb947a758e5647e831cc3abe1",
"assets/assets/grapes_icon.svg": "2ad4993a197bd624ae1288e4e3ca4de1",
"assets/assets/back.png": "3535e4c46ab9870786d68b2d377a3389",
"assets/assets/fi-rr-search.svg": "fc732f902c005b51cc6ed27ba09c6abd",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
