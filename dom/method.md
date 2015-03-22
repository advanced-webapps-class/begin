## DOM 메소드

## 주요 메소드

```javascript
document.getElementById()
document.querySelectorAll()
document.getElementsByName()
document.createElement()
document.appendChild()
```

### 찾기 - querySelectorAll()

```javascript
$$('#header')
$$('a img')
$$('.daumhide').length
$$('form[name=daumSearch]')

var all = $$('ul');
var length = all.length;
for(var i=0; i < length; i++){
  all[i].style.border = '1px solid red';
}
```

* [Daum](http://daum.net)에서 테스트
* HTMLCollection 형태로 리턴
* [참고](http://api.jquery.com/category/selectors/)

###  만들고 넣기 - createElement()

```javascript
var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";
document.body.appendChild(div);
```

### innerHTML

* IE4에서 처음 구현된 비표준
* createElement(), appendChild()보다 편리
* 모든 브라우저에서 구현

### DOM은 느리다?

* [innerHTML VS dom](http://goo.gl/MO7S0)
* 오래된 브라우저에서는 느리다


## html에 코드 삽입

### html 직접기입

```html
<html>
<head>
    <title>코드 삽입</title>
    <script type="text/javascript">
    function test(){

    }
    <//script>
</head>
<body>
</body>
</html>
```

### js 파일로 넣기


로딩속도의 보장을 위해서 하단에서 호출 권장

```html
<html>
<head>
    <title>js 파일로 삽입</title>
</head>
<body>

    <script type="text/javascript" src="test.js"><//script>
</body>
</html>
```

### 동적 삽입

```javascript
var head = document.getElementsByTagName("head")[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'test.js';
head.appendChild(script);
```
### 실제 서비스에선?

* [미디어다음 소스보기](view-source:http://media.daum.net/)