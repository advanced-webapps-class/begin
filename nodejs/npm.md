# NPM

> npm is the package manager for Node.js, IO.js, Mobile...



## 주요 명령어

[Command-Line Tools (CLI)](https://docs.npmjs.com/cli/init)


### npm init

앱 package.json 작성

```
$ npm init
```

참고 package.json: [pretty-bytes 모듈](https://github.com/sindresorhus/pretty-bytes)


### npm install [모듈]

모듈 설치

```
$ npm install jquery --save
$ npm uninstall jquery
```

### npm start 

```javascript
...
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "deploy": "grunt deploy"
  }
...  
```