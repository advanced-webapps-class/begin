# Hello World

> 간단한 웹서버 만들기 

```javascript
// server.js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```

```
$ node server.js

Server running at http://127.0.0.1:1337/
```


