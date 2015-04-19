# Attributes 메소드

[API](http://api.jquery.com/category/attributes/)

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

## .attr()

엘리먼트에 있는 어트리뷰트를 읽거나 세팅할때 사용된다.
    
```javascript    
$('#box').attr('data','i am box');
$('#box').attr('data'); //i am box 출력
```

## .removeAttr()

엘리먼트에 있는 어트리뷰트 제거

```javascript    
$('#box').removeAttr('data'); 
```

## .html()

엘리먼트의 내용을 html형태로 가지고 오던가 세팅한다

```javascript    
$('#box').html(); // id=box
$('#box').html('hello box');  
```
## .prop()

엘리먼트의 프로퍼티에 직접 접근하여 값을 가져오거나 세팅한다

```javascript    
$("input[type='checkbox']").attr("checked") // checked
$("input[type='checkbox']").prop("checked") // true
$("input").prop("disabled", true) // 폼요소를 사용하지 못하게 세팅
$("input").prop({"disabled": false}) //인자를 object 형태로도 전달 가능
```

## .removeProp()

프로퍼티를 제거

## .val()

value 어트리뷰트가 있는 엘리먼트에서 value값을 가져온다

```javascript    
$('input[type=text]').val()
```