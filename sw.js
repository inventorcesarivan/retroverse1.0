const CACHE="retroverse-v06";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("retroverse-")&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith(caches.open(CACHE).then(async cache=>{
  const cached=await cache.match(event.request);
  try{
   const response=await fetch(event.request);
   if(response.ok){cache.put(event.request,response.clone()).catch(()=>{});}
   return response;
  }catch(error){
   if(cached)return cached;
   if(event.request.mode==="navigate")return cache.match("./index.html");
   throw error;
  }
 }))
});
