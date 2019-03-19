// Encode and decode URIS - does what is says on the tin

var url = 'https://uvw.io/somescript?dont bother';
var a = encodeURIComponent(url);
var b = decodeURIComponent(a);
var c = encodeURIComponent(url);
var d = decodeURIComponent(c)

console.log(a);
console.log(b);

console.log(c);
console.log(d);