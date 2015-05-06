# module 

## 기본모듈 

[API](https://nodejs.org/api/)

```javascript
// fs 모듈 사용 
// node fs.js
var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
```


## npm  

[npm](http://npmjs.com/)

### 로컬 설치

[pretty-bytes 모듈](https://github.com/sindresorhus/pretty-bytes)

```
$ npm install pretty-bytes --save 
```

```javascript
// node pretty.js

var prettyBytes = require('pretty-bytes');

console.log(prettyBytes(100));
console.log(prettyBytes(1337));
```

### 글로벌 설치 

```
$ npm install serve --global
$ npm install pretty-bytes --global
```

