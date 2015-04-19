# 이벤트

[API](http://api.jquery.com/category/events/)


## 등록


```javascript
$('#box').on('click', function(event){
    console.log(this,event);
});

//이렇게도 가능
$('#box').click(function(event){
    console.log(this, event);
});
```

## 제거

```javascript
#('#box').on('click', func);

#('#box').off('click', func);
```

## 사용자 이벤트

[예제](assets/custom-event.html)

```javascript
$( "p" ).on( "myCustomEvent", function( event, myName ) {
  ...
  
});

$( "button" ).click(function () {
  $( "p" ).trigger( "myCustomEvent", [ "John" ] );
})
```

## Delegate

상위 엘리먼트 이벤트핸들러로 처리

```javascript
$( "#dataTable tbody tr" ).on( "click", function() {
  console.log( $( this ).text() );
});

// delegate
$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});
```

## jQuery Event객체

js Event객체가 크로스브라우징이 필요하기에 통일된 [jQuery Event객체](http://api.jquery.com/category/events/event-object/)를 제공

```javascript
$('#box').on('click', function(event){
    console.log('#box 이벤트를 시작한 요소', event.target );
    console.log('#box 이벤트 요소', event.currentTarget );

    console.log('#box 네이티브 event객체', event.originalEvent );
});

$(document.body).on('click', function(event){
    console.log('body 이벤트를 시작한 요소', event.target );
    console.log('body이벤트 요소', event.currentTarget );
});
```

## 이벤트 전파방지

[예제](assets/event-stop.html)

```javascript
$(a).click(function(event){

    //동작구현

    //이벤트막고 , 기본동작 중지
    event.stopPropagation();
    even.preventDefault();

    //return false; 로 대체가능
}    
```


