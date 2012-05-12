var list = [ "core-min.js", "aes.js", "hmac-md5.js", "hmac-sha1.js","hmac-sha224.js", "hmac-sha256.js", "hmac-sha384.js",
   "hmac-sha512.js",  "md5.js",  "pbkdf2.js",  "rabbit.js" , "rc4.js" , "sha1.js", "sha224.js", "sha256.js", "sha384.js", "sha512.js", "tripledes.js", "enc-base64-min.js", "enc-utf16-min.js", "end.js"]

//just in case it was included using url
var path = ''; //explicitly declare here or

if (path === '') {

(function (name) {
   var scripts = document.getElementsByTagName('script');

   for (var i = scripts.length - 1; i >= 0; --i) {
       var src = scripts[i].src.split('?')[0];
       var l = src.length;
       var length = name.length;
       if (src.substr(l - length) == name) {
           // set a global propery here
           path = src.substr(0, l - length);
       }
   }
})('crypto.js');

}

for (var i in list) {
    var script = document.createElement('script');
    script.src = path + '/crypto2/'+ list[i];
    script.type = 'text/javascript';
    script.defer = true;
    var head = document.getElementsByTagName('head').item(0);
    head.appendChild(script);
}
