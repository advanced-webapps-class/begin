#  Hello Ajax

```javascript
var req = new XMLHttpRequest();

req.open('POST', '/echo/html/', true);

req.send("html=hello Ajax");

req.onreadystatechange=function(){

};
```
[예제](assets/hello.html)

## 요청 응답 흐름

![](http://i.imgur.com/pUVGkKC.jpg)
