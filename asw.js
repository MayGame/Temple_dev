//#region vars
const window = self;
const urlToOpen = new URL('/', self.location.origin).href;

self.importScripts("./js/agent.js")
// self.importScripts("/js/cdn/gun.js", "/js/cdn/sea.js","/js/sw_agent.js")
// var CACHE_NAME = 'cachee';
// var urlsToCache = []
// var modules={}
// var gun_user = undefined
// const channel = new BroadcastChannel('sw-messages');
// // channel.postMessage({title: 'Hello from SW'})
// channel.addEventListener('message',(event)=>{
//   if(event.data.type=='PAGE_SUBMITED'){
//   console.log('Module Submited')
//   modules[event.data.module]=event.data.data
//   console.log(modules);
//   channel.postMessage({'data':modules,'type':'MODULES_UPDATED'});}
//   else console.log(event.data.type)
// })
// // var urlsToCache = [
// //   '/',
// //   '/styles/main.css',
// //   '/script/main.js'
// // ];
//#endregion
//#region install
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
    //   caches.open(CACHE_NAME)
    //     .then(function(cache) {
    //       console.log('Opened cache');
    //       console.log('me = v0001');
    //       return cache.addAll(urlsToCache);
    //     })
    async function(){console.log("installing");return }
    );
  });
// self.addEventListener('install', function(event) {
//     // Perform install steps
//     event.waitUntil(
//       caches.open(CACHE_NAME)
//         .then(function(cache) {
//           console.log('Opened cache');
//           console.log('me = v0001');
//           return cache.addAll(urlsToCache);
//         })
//     );
//   });
  /*self.addEventListener('install', (event) => {
    event.waitUntil(async function() {
      const cache = await caches.open('mygame-core-v1');
      cache.addAll(
        // levels 11-20
      );
      await cache.addAll(
        // core assets & levels 1-10
      );
    }());
  });*/
//#endregion
//#region activate
self.addEventListener('activate', (event) => {
    event.waitUntil(async function(){console.log("activating sw")})})

// self.addEventListener('activate', (event) => {
//     event.waitUntil(async function() {
//       const cacheNames = await caches.keys();
//       await Promise.all(
//         cacheNames.filter((cacheName) => {
//           // Return true if you want to remove this cache,
//           // but remember that caches are shared across
//           // the whole origin
//           if(cacheName=="toDelete")
//           console.log('cache deleted')
//           return true;
//         }).map(cacheName => caches.delete(cacheName))
//       );
//     }());
//   });
//   /* 
//   base64url encode-> qr
//   qr->base64url decode-> json->cache ->link
//   */
//   self.addEventListener('fetch', (event) => {
//     // If a match isn't found in the cache, the response
//     // will look like a connection error
//     if(event.request.url==self.location.origin+"/your_cache.html")
//     {
//       // console.log("inside if statement in sw fetching cache")
//       event.respondWith(caches.match(event.request,{'ignoreSearch':true}));
//       // event.respondWith(new Response(`<p>generated response</p>`));//, {
//         // headers: {
//       //   url: self.location.origin+'/your_cache.html', 
//       //   status: 200,
//       //   headers: {
//       //     'Content-Type': 'text/html'}
//       // }));
//     }
//     else 
//     {
//       var matches_flag=false;
//       for (const [key, value] of Object.entries(modules)) 
//         {
//           let qm_index=event.request.url.indexOf('?');
//           let stripped_url = event.request.url
//           if(qm_index>0)
//           stripped_url=stripped_url.substr(0, qm_index)
//           if(value==stripped_url)//fixme: actual validation
//           matches_flag=true;
//           // console.log("Fetch. matches")
//           // console.log(matches_flag)
//           // console.log(modules)
//         }
//       if(matches_flag){
//         // { let resp=
//           event.respondWith(caches.match(event.request,{'ignoreSearch':true}));
//         }
//       // else
//       //   { 
//       //     console.log(event.request.url+" not cached")
//       //   }//end else
//     }//end else
//     // event.respondWith(caches.match(event.request));
//   });//end event listener scope
// //#region push
// self.addEventListener('push', (event) => {
//   // if (event.data.text() == 'new-email') {
//   //   event.waitUntil(async function() {
//   //     const cache = await caches.open('mysite-dynamic');
//   //     const response = await fetch('/inbox.json');
//   //     await cache.put('/inbox.json', response.clone());
//   //     const emails = await response.json();
//   //     registration.showNotification("New email", {
//   //       body: "From " + emails[0].from.name,
//   //       tag: "new-email"
//   //     });
//   //   }());
//   // }
//   console.log(event.data.text());
//   registration.showNotification("New email", {body: "Body", tag: "tag"})
// });

// self.addEventListener('notificationclick', function(event) {
//   if (event.notification.tag == 'new-email') {
//     // Assume that all of the resources needed to render
//     // /inbox/ have previously been cached, e.g. as part
//     // of the install handler.
//     new WindowClient('/inbox/');
//   }
// });
//#endregion 
//#region agent
// let swSuperAgent = new SuperAgent({

// })
let mock_swSuperAgent={
    dynamicInterfaces:{//name resolves to the one in use right now 
        pages:new Proxy({},{
            get:function(_,k){
                k_whitelist={
                    a:'a_body'
                }
                let header={
                      headers: {'Content-Type': 'text/html'}
                    }
                if(k_whitelist[k])
                return new Response(k_whitelist[k], header);
                else return undefined

            }
        })
        // pages:{
        //     "":""
        // }
        // pages:mock_swSuperAgent.interfaces


    }
}
 self.addEventListener('fetch',(event) => {
    let rurl = event.request.url
    // event.respondWith(caches.match(event.request,{'ignoreSearch':true}));
// event.respondWith(mock_swSuperAgent.syncFuncs.get_page_response
let response=mock_swSuperAgent.dynamicInterfaces.pages[rurl]
if(response)
event.respondWith(response
)
    })
    // c.F.M1631167618982CraftResponse_____=function(event){
    //     let header = c.M1631015695037html_header_______;
    //     return new Response(event.request.url, header);
    // }
    
    // c.F.M1631244397674ProcessFetch______=function(event){
    //     let url = event.request.url;
    //     if(url=='https://maygame.github.io/r2/2')
    //     event.respondWith(c.F.M1631167618982CraftResponse_____(event));
    // }
    // self.addEventListener('fetch', function(M1631010512244fetch_event_______) {
    //     if(M1631010512244fetch_event_______.request.url=='https://maygame.github.io/r2/'){
    //     M1631010512244fetch_event_______.respondWith(
    //         new Response(c.M1631015901555index_markup______,c.M1631015695037html_header_______ )
    //      );}
    //     else c.F.M1631244397674ProcessFetch______(M1631010512244fetch_event_______);
    //   });
    // c.M1631015695037html_header_______={
    //   headers: {'Content-Type': 'text/html'}
    // }
    
//#endregion 