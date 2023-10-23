'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e45f1759f2a0207298cc0923e7e16134",
"index.html": "dfb84bb79110685b79734868090d7628",
"/": "dfb84bb79110685b79734868090d7628",
"main.dart.js": "4a397108b1a04bb14f55e85bcd58ab25",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "703d46f3681a27eccdfc9ee124a17caa",
"assets/AssetManifest.json": "f8609e4df8a66751fa04320c296f2341",
"assets/NOTICES": "94e91999a1d6ffd6a78ea036a794ef6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "89d2a60eb2564a81074ff7c51733529c",
"assets/fonts/MaterialIcons-Regular.otf": "6c0b4cb598038e2352d9b6c52bf1d3f4",
"assets/assets/images/f43.jpg": "190d6994cef8ecad6210887233f2c887",
"assets/assets/images/e21.jpg": "e9ed11583d11afa3220e311e85ef2e6a",
"assets/assets/images/g37.jpg": "db6a5d57d205e67c214e50e8f975385d",
"assets/assets/images/g23.jpg": "98865b5b8df8677926b6b3828f6dd7e1",
"assets/assets/images/g22.jpg": "59e8305a4341296d54f2e2d4a0470744",
"assets/assets/images/g36.jpg": "7ac5afbaf5edf7c627e50a9c50383633",
"assets/assets/images/e20.jpg": "690dca1a938f393f59784cf1cf34b535",
"assets/assets/images/a1.jpg": "97349f24117f89679b8c860bb2a38d52",
"assets/assets/images/f42.jpg": "72cce6ad74087c3b71928db1f995f900",
"assets/assets/images/f40.jpg": "509d1a661aa855d96346e4cab9b73708",
"assets/assets/images/a3.jpg": "20f0e52c7a3cc0e3b3e6a5dfafe1e826",
"assets/assets/images/e22.jpg": "b3fb9ba54b0634b8f32ddefa0883d221",
"assets/assets/images/g20.jpg": "7da79ebeb0736abfad446b2d258faed5",
"assets/assets/images/g34.jpg": "4ecac2cefa02b458d81ef7c9133e3451",
"assets/assets/images/g35.jpg": "b768203a764ef3fa15c8cac92c37d391",
"assets/assets/images/g21.jpg": "84548f0bc843e5d547459b241518ee00",
"assets/assets/images/e23.jpg": "77a344ccd4cde7f6fdb521470095e329",
"assets/assets/images/a2.jpg": "323c3920691b22de574f4fc46182dfa7",
"assets/assets/images/f41.jpg": "05d7e4d49cd5e3f6449d7ab2d432b615",
"assets/assets/images/f51.jpg": "d1b1daceee975c2f8e721dc4d3f730e8",
"assets/assets/images/f45.jpg": "0b91ded540b111ca77bbafd061036483",
"assets/assets/images/g19.jpg": "47df2980394c41f700654f1f2b5a0a93",
"assets/assets/images/g25.jpg": "42c7d6298f5c727cb810bc500642b9f1",
"assets/assets/images/g31.jpg": "bce5ae9d35d7f8ddf95fc4a80cd733e9",
"assets/assets/images/g30.jpg": "30572910f0e49350bff36fddc4aa6ba7",
"assets/assets/images/g24.jpg": "b37473f097a26a5fccb95121d85c2a60",
"assets/assets/images/g18.jpg": "f86bac6d5b6b21ff746312f609c8d6d6",
"assets/assets/images/f44.jpg": "31f3ba381ce86ba382621de6ffd8d72a",
"assets/assets/images/f50.jpg": "fedf65ff1fdea409826fb2cf55501216",
"assets/assets/images/f46.jpg": "6dee490efe601b0d435ccc2f5ca07ed3",
"assets/assets/images/e18.jpg": "dd8f7f95c56a92cf6f7457e3c800cd84",
"assets/assets/images/e24.jpg": "49045cba4cb3b4101ad84c622037c6b8",
"assets/assets/images/g32.jpg": "741045a737a925bf804100c383f43e2c",
"assets/assets/images/g26.jpg": "05d2efe366e300d0112c33349c76b59e",
"assets/assets/images/g27.jpg": "6d50109a06824f33081d4a41fffe87a7",
"assets/assets/images/g33.jpg": "dca1adb04b2fa1b2a22300f767e668ed",
"assets/assets/images/e19.jpg": "062216b5109b3587873fe4dc16049b27",
"assets/assets/images/f47.jpg": "2eea69ee3246caf4e20654cbe5499920",
"assets/assets/images/f20.jpg": "c8cee95a84647a3ec1c030d548966f61",
"assets/assets/images/f34.jpg": "8f2913ba5de5783db158bada9cde5341",
"assets/assets/images/f7.jpg": "cd32e38646ac064dfca36efc4964ecce",
"assets/assets/images/g3.jpg": "6f6953ebc118559d9faae25773ca8d8b",
"assets/assets/images/h13.jpg": "b15d5f416293eb17e3dbe6a96dc730fb",
"assets/assets/images/g40.jpg": "0504f1677f9fd90cffc95241622ab6b9",
"assets/assets/images/dac1.jpg": "5f85eddb7d6d251e8fe67c820a82b6a0",
"assets/assets/images/g41.jpg": "9f1695f3f6c28e1066f66e8d8fd1a2b1",
"assets/assets/images/h12.jpg": "4b094c4495b1be015f8528e1c9059584",
"assets/assets/images/g2.jpg": "2f1a092b8f21e9e84d24896df3967a34",
"assets/assets/images/f6.jpg": "1faff5a9091748ceb8ee153873d066d8",
"assets/assets/images/f35.jpg": "494c15224e09127fd251f26b3764a856",
"assets/assets/images/f21.jpg": "74bd7b332381ca1940f7a9cb7ec0ff17",
"assets/assets/images/f37.jpg": "82631e3abc2eddf5738e6954da2b2503",
"assets/assets/images/e8.jpg": "0f85307545508760e38b71d50aec760c",
"assets/assets/images/f23.jpg": "3142057b411182ce22da543cee1d8f64",
"assets/assets/images/f4.jpg": "263b9308928b9c687daa5181afe5c738",
"assets/assets/images/h10.jpg": "17a18a5e1cd89209c6bd80c9783094be",
"assets/assets/images/g43.jpg": "a8a2af09862ebd71916f337d3b60267f",
"assets/assets/images/dac2.jpg": "15c9c997c896fb0908e5778ed79307fe",
"assets/assets/images/dac3.jpg": "20ec66acff261520e144cfb4cb33b1de",
"assets/assets/images/g42.jpg": "94810dee12dd0f2e10fb6fe2bca0ba12",
"assets/assets/images/h11.jpg": "217487765147f6477a89a73cb7ffb421",
"assets/assets/images/f5.jpg": "898f1b0e3cc417c968d2ae9edc7a0070",
"assets/assets/images/g1.jpg": "79721a9eaa919c8fa424cade90128e14",
"assets/assets/images/f22.jpg": "479a9715348517e63174aa4e1baa47d2",
"assets/assets/images/e9.jpg": "9eadae1fe080c599a527e768c2094dbc",
"assets/assets/images/f36.jpg": "e4d30f62c5e68d4b4702adfc909f8518",
"assets/assets/images/g5.jpg": "13740577120d9b37c6a273044aebe98e",
"assets/assets/images/f1.jpg": "11a14c8d1344673f8248b187532eb570",
"assets/assets/images/f32.jpg": "956b6a9c2f3fc39576c14ddb947a436c",
"assets/assets/images/f26.jpg": "b67af3bd62d5fb73e61375ce51ff8bf0",
"assets/assets/images/h15.jpg": "434971617c6b23fdd88fbf26699d007c",
"assets/assets/images/daaa1.jpg": "6f12e77e8254552c017716fa2c7fe0a4",
"assets/assets/images/h14.jpg": "065b877c8d42b204ffebac2000c1d213",
"assets/assets/images/f27.jpg": "250f27c291e4a7d492276847a0878878",
"assets/assets/images/f33.jpg": "83c575edc8128b8e1e4b00392e2f2de9",
"assets/assets/images/g4.jpg": "8def44a317ee1203f5f176678b5f01a2",
"assets/assets/images/f19.jpg": "d3d22d39d55c60da2d62e8b8c9050ed9",
"assets/assets/images/f2.jpg": "564b103f2b12cead438044e321dd2645",
"assets/assets/images/g6.jpg": "f29088665b484dfac136afcc8927e7f6",
"assets/assets/images/f25.jpg": "3941fac63aecf0b44eae7f32a239341c",
"assets/assets/images/f31.jpg": "3a6c11c618f5288864c08bdd08405c15",
"assets/assets/images/h16.jpg": "518bf552441306722c33fd460d2bba02",
"assets/assets/images/h9.jpg": "bbc358810454276f0ecb64f54ff53bab",
"assets/assets/images/daaa2.jpg": "ceb1c907e573726ff45f58ba141735b2",
"assets/assets/images/g45.jpg": "7f11c7771a0b35bb3ca6f06974c5cb14",
"assets/assets/images/g44.jpg": "ff95166cc0cb4c6466f2c898437d7811",
"assets/assets/images/daaa3.jpg": "dc4cccc017a723debe15785b26434654",
"assets/assets/images/h8.jpg": "7fcaa1a0383313cabfa0048eacd3bc9c",
"assets/assets/images/h17.jpg": "7374821d82da8b6698a4dd42d02bbd08",
"assets/assets/images/f30.jpg": "fb2227a76bdb79f62f805658976b6dd5",
"assets/assets/images/f24.jpg": "27f812faf5347f56fbf2526fdec76735",
"assets/assets/images/g7.jpg": "90aec8ff602cf91c1701b72b68b91ff2",
"assets/assets/images/f3.jpg": "6d0cdf4fb891bedf63e520e76761df93",
"assets/assets/images/f18.jpg": "39420303f26330d0a5cd56096a4347db",
"assets/assets/images/f15.jpg": "fb5eb860e42eba7a1cf445c7231316ea",
"assets/assets/images/e2.jpg": "d7f6b63960930a7ae130a7067008c355",
"assets/assets/images/f29.jpg": "d892938958199463aa0d3b35bdff4499",
"assets/assets/images/h5.jpg": "770a289598397bce50806c02c650d4a6",
"assets/assets/images/h26.jpg": "72fac4449def09fc330e7d7fe8a349c2",
"assets/assets/images/daa1.jpg": "d8eb2bde95e49c2f954b5b1f87da7161",
"assets/assets/images/h27.jpg": "40bdc34d18f83f23ad4cf64bd2147e52",
"assets/assets/images/h4.jpg": "2745ef2359495231568af0a39321e6aa",
"assets/assets/images/f28.jpg": "16fb8761b856f9e4dc3ba1ba24d39ae3",
"assets/assets/images/e3.jpg": "46c35488cf6fcf7863976b259b83b483",
"assets/assets/images/f14.jpg": "0f6e1fed8fc380967dbb7862edb0f71e",
"assets/assets/images/f16.jpg": "e1e15f1c2faa22531f0e08e650bd1b01",
"assets/assets/images/g9.jpg": "bbb86a547f437017e9e0dda2ec270134",
"assets/assets/images/e1.jpg": "1e5b7fbf7bc385b0522c49f5394ed233",
"assets/assets/images/h19.jpg": "fabc816c3e5a385faa8341d2e971188d",
"assets/assets/images/h6.jpg": "3d7ba136395612b8d656d4ab8538e138",
"assets/assets/images/h25.jpg": "4644e4a364f7e687f30da2e7e436a9a2",
"assets/assets/images/daa3.jpg": "6b2a383a437d0211c25e83039291b274",
"assets/assets/images/daa2.jpg": "d8cb4c76d67fe197ec48e839c2ad8c39",
"assets/assets/images/h24.jpg": "fc3dd05ed71846fd613a363eb697bd00",
"assets/assets/images/h7.jpg": "26b55d1dce84fcb7169e64f4495cfd9f",
"assets/assets/images/h18.jpg": "d40e01c093ffbee63940de38e14731ac",
"assets/assets/images/g8.jpg": "9dec9c1dc3b97d5e5f885f3fbe1cd659",
"assets/assets/images/f17.jpg": "30ed844fcf4a5a7f8363c739fcfa4748",
"assets/assets/images/e4.jpg": "13883317cc39110bd83e0ad2ead9b723",
"assets/assets/images/f13.jpg": "e546a18819b113395fd5bf7742f56db6",
"assets/assets/images/f8.jpg": "2c8c713f585780f499c3b57d6a4c2b9c",
"assets/assets/images/h3.jpg": "666b74e04d572202d6247bacd11264c0",
"assets/assets/images/h20.jpg": "ea881d741a2bafb97de34d1613fc0a5b",
"assets/assets/images/h21.jpg": "0c728524f8d8c6447986fa67560ecc5f",
"assets/assets/images/h2.jpg": "97df3578232bfad6f748efa06f331050",
"assets/assets/images/f9.jpg": "a345dc479ada60a36c8af9aa65e666bd",
"assets/assets/images/f12.jpg": "e38c68159bbc2c37d4a5a03ef6e8062c",
"assets/assets/images/d1.jpg": "bdc56dd25e777b19e8b9690efbe901b6",
"assets/assets/images/e5.jpg": "0e374dee24a47c447d724463311649fe",
"assets/assets/images/f38.jpg": "96f20642c8780b85d2bd983ef5d7d226",
"assets/assets/images/d3.jpg": "593ad26110f836155f5693724b980587",
"assets/assets/images/e7.jpg": "4e16f0a42a804f1d3784314ce75099e1",
"assets/assets/images/f10.jpg": "82ed3e3210eaea60a7a91c3c40a5d910",
"assets/assets/images/h23.jpg": "459c604a1febfcdfd64bb4d9bf8fc070",
"assets/assets/images/h22.jpg": "c4bffd229d8767ea765f4adee7f90f0d",
"assets/assets/images/h1.jpg": "798f22242de426d20518596672c419cc",
"assets/assets/images/f11.jpg": "d1745d3191d14b6cf7a1743986aa6d84",
"assets/assets/images/e6.jpg": "fe10f3be4db2e5aa4122eab7342f5522",
"assets/assets/images/d2.jpg": "47b49627acd4dff341b668eceb1163df",
"assets/assets/images/f39.jpg": "370f7e2d088e05801cc139003fc50377",
"assets/assets/images/c1.jpg": "2f5ef0f355fcbab79ec857a0caaf7b24",
"assets/assets/images/da3.jpg": "f5582643a8c9a6185d49b2fd35ed64a1",
"assets/assets/images/e14.jpg": "34784e674209dc4dd995c9855940f8dc",
"assets/assets/images/g16.jpg": "383c1e38f7e409287d8dfa434862ac05",
"assets/assets/images/g17.jpg": "638fcde0f0879422041ddc2ecce719da",
"assets/assets/images/e15.jpg": "cd1c6fbc5b88cf2d7859b0028a0eac19",
"assets/assets/images/da2.jpg": "dfb1bcbd8c071c4862411d4c458be251",
"assets/assets/images/c2.jpg": "1346802bcf3fe91cdcef64c11b3c3ce6",
"assets/assets/images/f49.jpg": "9d4d0135193bcec5d2ec2641355285d5",
"assets/assets/images/e17.jpg": "f0abc10219276245527fc3f5532f4700",
"assets/assets/images/g15.jpg": "fa75c565f9f53999c5c2141057d3df11",
"assets/assets/images/g29.jpg": "448cad6c3c08217abb637ed81d42d126",
"assets/assets/images/g28.jpg": "bbb2a72b4d9b0361aedba5e9ad1f5b57",
"assets/assets/images/g14.jpg": "16b522680455d09a224839db3d44d42e",
"assets/assets/images/e16.jpg": "6600dfba2025bc57cf83016ab3765a1b",
"assets/assets/images/da1.jpg": "7750ae754d74eed57258bdb8c41e487b",
"assets/assets/images/f48.jpg": "b90315a9c997eb8ee957d71423f28ee2",
"assets/assets/images/c3.jpg": "44a9524dac5423f80ba4e02ded90a4e0",
"assets/assets/images/b3.jpg": "f68c4f75907271edad9363f87cdefd66",
"assets/assets/images/e12.jpg": "9d6c9f6054540e8c1f43d7cb4c2f6567",
"assets/assets/images/g38.jpg": "cad9b3eb8ba4ae1f4f0cddbb3b066449",
"assets/assets/images/g10.jpg": "85bfd1ea0e8840df8a387e11974ec7bb",
"assets/assets/images/g11.jpg": "1194c9dd8ccef5a9fb7e24ee29610020",
"assets/assets/images/g39.jpg": "45201f9e63fd63cd25558221ee3e5142",
"assets/assets/images/e13.jpg": "27b86f54f066057cb1aa5f5771b0092f",
"assets/assets/images/das1.jpg": "8b57a0885ba5a0a35bab6391f9cbc40f",
"assets/assets/images/b2.jpg": "afda01e98faed51173a140b6ae73980c",
"assets/assets/images/das3.jpg": "d202ea8eb41df9a6dfb3091bbd6547ac",
"assets/assets/images/e11.jpg": "26d7b1af2f41ace8a68c3918109957d4",
"assets/assets/images/g13.jpg": "b79d23808a9c29b234d7674225a5ecdc",
"assets/assets/images/g12.jpg": "98408bfe298d8196f980150ac75775dd",
"assets/assets/images/das2.jpg": "792da64f7c2b565f6667c0ec3db15624",
"assets/assets/images/e10.jpg": "d3eb4f2c72731e59345f62bde686f229",
"assets/assets/images/b1.jpg": "ac2f166702940112c145c5f878460125",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
