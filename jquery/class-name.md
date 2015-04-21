# Class Name

> 엘리먼트의 clsss 속성 관련 

[API](http://api.jquery.com/category/css/)

### .addClass()

엘리먼트에 css클래스명을 추가할때 사용

```javascript
$('#box').addClass('red');
  
//모든 div엘리먼트에 border 클래스 추가
$('div').addClass('border');
```    

### .removeClass()


엘리먼트에 css클래스명을 제거
    
```javascript
$('#box').removeClass('red');
$('div').removeClass('border');
```

### .hasClass()

클래스명의 존재여부를 true,false 로 리턴
    
```javascript    
if($('#box').hasClass('red')){
  $('#box').removeClass('red'); 
}
```    

### .toggleClass()

인자로 주어지는 클래스명이 toggle 

```javascript
$('#box').toggleClass('red');
```