;(async ()=>{//simple meme interface 
    // console.log("Indexeddb loaded")
    // c.F.M1631331052808BookOpen__________ = async function(){
    self.c={};//fixme
    c.F={};

        self.IDBTransaction = self.IDBTransaction || self.webkitIDBTransaction || self.msIDBTransaction || { READ_WRITE: "readwrite" };
        self.indexedDB = self.indexedDB || self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB;
        self.IDBKeyRange = self.IDBKeyRange || self.webkitIDBKeyRange || self.msIDBKeyRange;
        let libRequest = indexedDB.open("Memoires_eternels",1);
        libRequest.onupgradeneeded=function(event){
            c.M1631331030326Book______________ = libRequest.result;
            // c.E.M1631348412834BookOpenEvent_____;
            if (event.oldVersion < 1) {c.Pages = c.M1631331030326Book______________.createObjectStore("Pages");
                c.Pages = c.M1631331030326Book______________.createObjectStore("Words");}}
        libRequest.onsuccess = function(event) {
            c.M1631331030326Book______________ = libRequest.result;
        ;}
    
c.F.PagesWrite = function (key,value){
    let rq = c.M1631331030326Book______________.transaction("Pages","readwrite").objectStore("Pages").put(value,key); return rq;}
    c.F.PagesRead = function(){ return c.M1631331030326Book______________.transaction("Pages","readonly").objectStore("Pages");}
    c.F.WordsWrite = function (key,value){
    let rq = c.M1631331030326Book______________.transaction("Words","readwrite").objectStore("Words").put(value,key); return rq;}
c.F.WordsRead = function(){ return c.M1631331030326Book______________.transaction("Words","readonly").objectStore("Words");}
// //read usage example:
// ;(async ()=>{
//     let res = c.F.WordsRead().get('F2P');
//     res.onsuccess=function(){
//     console.log(res.result);
//     new AsyncFunction(res.result)();}})();
    // c.F.M1631331052808BookOpen__________();
})()