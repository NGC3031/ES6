// Encode and decode URIS - does what is says on the tin

var url='https://uvw.io/somescript?dont bother';
console.log(encodeURI(url));

console.log(encodeURIComponent(url));