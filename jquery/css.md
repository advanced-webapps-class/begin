# CSS 메소드

> CSS 와 관련된 속성을 얻고 설정하는 메소드

[API](http://api.jquery.com/category/css)


### .css()

첫번째 인자의 style값을 가져오거나 style을 적용

```javascript
$('.book-summary').css("background-color");
$('div').css("background-color", 'yellow');
$('ul').css({'list-style':'none','border':'1px solid red'});
```

### .height()

엘리먼트의 높이값을 구하거나 인자값으로 세팅

```javascript
$('.book-header').height()    
$('.book-header').height(500) //500으로 늘림 
```

![](http://i.imgur.com/pJxZQoe.png)

### .innerHeight()

엘리먼트의 패딩을 포함하는 높이값을 구함

```javascript
$('.book-header').css('padding', '30px');
$('.book-header').innerHeight()    
```

![](http://i.imgur.com/Z5tXzSQ.png)

### .outerHeight()

엘리먼트의 외부 padding,boder를 포함한 높이를 구함, 인자값이 true 일경우 margin 도 포함

```javascript
$('.book-header').outerHeight() 
```

![](http://i.imgur.com/ZCH7dMx.png)

### .width()

```javascript
$('.book-header').width() 
```

### .offset()

엘리먼트의 절대좌표를 반환

```javascript
$('.book-header').offset() 
```

### .position()

엘리먼트의 부모엘리먼트 기준 좌표를 반환

```javascript
$('.book-header').position() 
```

### .scrollLeft()

엘리먼트의 수평 스크롤 위치를 구하거나 인자로 주어진값으로 세팅

```javascript
$('.book-header').scrollLeft() 
```

### .scrollTop()

엘리먼트의 수직 스크롤 위치를 구하거나 인자로 주어진값으로 세팅

```javascript
$('.book-header').scrollTop() 
```
