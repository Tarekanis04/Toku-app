'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "52955aaa0d0a8ff3f1a9a28f15d3350d",
"assets/AssetManifest.bin.json": "820430c2331d2926d1d51d0c19786fc8",
"assets/AssetManifest.json": "ff6cd2c3e614183e046d51bfa37db157",
"assets/assets/images/colors/color_black.png": "1d6ede6b96163c0de60018184a8f36da",
"assets/assets/images/colors/color_brown.png": "12e6b20f554f4f8c851ec47a365bf017",
"assets/assets/images/colors/color_dusty_yellow.png": "5b679e0183b88702b6528eb4da68cce8",
"assets/assets/images/colors/color_gray.png": "f50d1356a99bd6382b84527f3578c7a5",
"assets/assets/images/colors/color_green.png": "de033fee5288447f79091cd9b569604b",
"assets/assets/images/colors/color_red.png": "dbcd4214d77182318965f6a86769b607",
"assets/assets/images/colors/color_white.png": "5576eca1639bcfd1e31b32d9b433254d",
"assets/assets/images/colors/color_yellow.png": "b957cc2bdb10dff1d6067259db6d3bab",
"assets/assets/images/family_members/family_daughter.png": "cdd7fb9db2a675d46d06f89a86d0be0b",
"assets/assets/images/family_members/family_father.png": "c78f781ad62a3686c9be867167312c68",
"assets/assets/images/family_members/family_grandfather.png": "0121efe2ebcb97765637f7726ef16a7a",
"assets/assets/images/family_members/family_grandmother.png": "0fd3c11927b039403f33e98d072b39ac",
"assets/assets/images/family_members/family_mother.png": "6a8e31be689fb3a91661cdd5ec861b2e",
"assets/assets/images/family_members/family_older_brother.png": "469d30da1934a787aa84396760cfa687",
"assets/assets/images/family_members/family_older_sister.png": "a6a16e02a8dfe42bb3fd456f080bda41",
"assets/assets/images/family_members/family_son.png": "c59fcf64b6232ab64df4cc903245c42e",
"assets/assets/images/family_members/family_younger_brother.png": "06c833cc7f1be021c6ed16f383645197",
"assets/assets/images/family_members/family_younger_sister.png": "e78d81331555152baacde9b3e8e11b72",
"assets/assets/images/numbers/number_eight.png": "ea5d780cfc9491ab82bba31a31dd2e18",
"assets/assets/images/numbers/number_five.png": "e0c9009fbe430487e7d5174872126540",
"assets/assets/images/numbers/number_four.png": "cf676495042b487dbdc2cf149765e554",
"assets/assets/images/numbers/number_nine.png": "d24ed98de89f13b0336f35fff5ae779f",
"assets/assets/images/numbers/number_one.png": "34fc8b9aade5b369154fe960d2d9f3e4",
"assets/assets/images/numbers/number_seven.png": "d5b777830843f6809c89f34a493fa17f",
"assets/assets/images/numbers/number_six.png": "1c097e3acbbe41727b116aebb10afc7e",
"assets/assets/images/numbers/number_ten.png": "4c65d43eb9dee72ab0717ce88209b5e6",
"assets/assets/images/numbers/number_three.png": "455f2d8ed32f0eb87cbba3a902f44e1d",
"assets/assets/images/numbers/number_two.png": "aacf7a7530aa1473842a028dfebd2e7d",
"assets/assets/sounds/colors/black.wav": "469e4200c8daa07f72ecc63aedd3f016",
"assets/assets/sounds/colors/brown.wav": "ed39be916c031be4f293ff886d0ab7be",
"assets/assets/sounds/colors/dusty%2520yellow.wav": "54007ffa4cc9cd4db9d182bb0304adfc",
"assets/assets/sounds/colors/gray.wav": "207c4d6a080b24560c0d074a1640431d",
"assets/assets/sounds/colors/green.wav": "d39079b11836fc6ffd350321722c914d",
"assets/assets/sounds/colors/red.wav": "dc8ea9bb28ca6d91ec890634f728463a",
"assets/assets/sounds/colors/white.wav": "143836b949d231e9babdec31a72049ea",
"assets/assets/sounds/colors/yellow.wav": "c3754c73dc38da7e865ce815afce1dd6",
"assets/assets/sounds/family_members/daughter.wav": "cc276be872a8fa6c313a425f380a45e6",
"assets/assets/sounds/family_members/father.wav": "4824ebf7a0565171769b7d89cda46276",
"assets/assets/sounds/family_members/grand%2520father.wav": "bbcd644a881de70c8666dbf9ece85a2e",
"assets/assets/sounds/family_members/grand%2520mother.wav": "85cb8363371f0bc66583b5734298c3ea",
"assets/assets/sounds/family_members/mother.wav": "bcaac16d0600423182428d7053e24492",
"assets/assets/sounds/family_members/older%2520brother.wav": "589ca6a44cb4887fe624373fa1c5af1a",
"assets/assets/sounds/family_members/older%2520sister.wav": "293f108c8e03943b5495be5ee8639e96",
"assets/assets/sounds/family_members/son.wav": "562a7135782bd5dbe07c4151044ec284",
"assets/assets/sounds/family_members/younger%2520brother.wav": "5a58963a5b4648736e812ce882c2cabd",
"assets/assets/sounds/family_members/younger%2520sister.wav": "97f5644e4ad5e1fe49de671786a056b0",
"assets/assets/sounds/numbers/number_eight_sound.mp3": "7f70b38cdce45811390aa8628e9d38ef",
"assets/assets/sounds/numbers/number_five_sound.mp3": "70be109ac082b65fd94866a73c9c7a0d",
"assets/assets/sounds/numbers/number_four_sound.mp3": "def1c10410803da2efc858591b03ea43",
"assets/assets/sounds/numbers/number_nine_sound.mp3": "b616f982b0f07cb45b528f7a38a53eb6",
"assets/assets/sounds/numbers/number_one_sound.mp3": "5da1c90895a57da0beb06a41fd6d5ffe",
"assets/assets/sounds/numbers/number_seven_sound.mp3": "847fa5bbf43c8094f1e579c4e063412b",
"assets/assets/sounds/numbers/number_six_sound.mp3": "f0b438ae0eb482843d3f71d6ed627c2b",
"assets/assets/sounds/numbers/number_ten_sound.mp3": "2448b17c73d351dd0b4546508ed98807",
"assets/assets/sounds/numbers/number_three_sound.mp3": "aa85030cd01dbd6f1414f9057e1d42e1",
"assets/assets/sounds/numbers/number_two_sound.mp3": "2709c7db98b99c41184d9a9f993898e7",
"assets/assets/sounds/phrases/are_you_coming.wav": "76ea62bb3a7c4d31fe9967ed0173d045",
"assets/assets/sounds/phrases/dont_forget_to_subscribe.wav": "d4afea5f480ecaaa412e8513bbdcdf4a",
"assets/assets/sounds/phrases/how_are_you_feeling.wav": "d98c5a2d4bd6f8a277568af4d66a416b",
"assets/assets/sounds/phrases/i_love_anime.wav": "dd0e15ebddf0073cb7109d13853034b2",
"assets/assets/sounds/phrases/i_love_programming.wav": "fbf5dd008efe3e02f5b6430d543aa810",
"assets/assets/sounds/phrases/programming_is_easy.wav": "822eefdd72a7effa3902bf91e4f2dfb5",
"assets/assets/sounds/phrases/what_is_your_name.wav": "1defe186c04028cf5c07b9131c3325b7",
"assets/assets/sounds/phrases/where_are_you_going.wav": "1b91340a3ae40a9a07de5560427fe643",
"assets/assets/sounds/phrases/yes_im_coming.wav": "c64f75bd2f64109cdfc4670161a9c7b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58ebf5947c421c26899f0f13f9d58a8c",
"assets/NOTICES": "4279ec22178b9adb411caf77ea77ce0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "21e18e9691bd7b86210c6e6defa0b701",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0e1a431cfe14b882f4965c2e404feab",
"/": "e0e1a431cfe14b882f4965c2e404feab",
"main.dart.js": "6ce2dec29144bd259f94e76cb90e5d64",
"manifest.json": "27d08cef52bef5c5aa0e78703f84a4bb",
"version.json": "5b01ccd219748939ae0bb85bb44a32f7"};
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
