# DOM 집어넣기

> 동적으로 DOM을 생성하고 DOM에 집어넣기

* [API](http://api.jquery.com/category/manipulation/dom-insertion-inside/)


```javascript
//#box에 <div>를 추가해
$('#box').append('<div>난 div 요소</div>');
```    


```javascript
// <div>요소를 #box에 추가해
$('<div>').appendTo( $('#box') )
        .text("난 div 요소")
        .addClass("border")
        .css("background-color","#fff");
```

```javascript  
$('<div>', {  
    text : '난 div 요소',
    addClass : 'border',
    css : {
        "background-color":"#fff"
    }
}).appendTo( $('#box') );
```    