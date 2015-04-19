# DOMContentLoaded 이벤트 

DOM 요소가 로딩이 완료되면 발생 


```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Dom요소가 모두 로딩이 되었습니다");
});
```
* load Event: 이미지포함 모든 리소스 로딩 완료되면 발생
* [예제](http://ie.microsoft.com/Testdrive/HTML5/DOMContentLoaded/Default.html)
