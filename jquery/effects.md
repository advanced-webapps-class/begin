# 손쉬운 에니메이션 효과

[API](http://api.jquery.com/category/effects/)

## .hide()

엘리먼트를 숨긴다

```javascript
// $('div').css("display","none") 과 동일
$('div').hide()
//천천히 사라지게
$('div').hide('slow',function(){ console.log('hide ok!') });
```
## .show()

엘리먼트를 보여준다

```javascript
$('div').show()
$('div').show('fast')
```

## .toggle()

엘리먼트 show(),hide() 를 toggle 처리
    
```javascript
$('div').toggle('fast')
```    
## .fadeOut()

엘리먼트가 opacity값이 빠지면서 사라진다
    
```javascript
//모든 태그 사라짐 
$('*').fadeOut()
```   

## .fadeIn()

엘리먼트가 opacity값이 채워지면서 나타남

```javascript
$('*').fadeIn('fast')
```

## .fadeTo()

두번째 인자로 엘리먼트의 opacity를 결정한다

```javascript   
$('*').fadeTo('slow', 0.3, function(){ console.log('done') })
```

## .fadeToggle()

fadeIn(), fadeOut() toggle

## .slideUp()

엘리먼트를 슬라이드가 올라가는 형태로 숨긴다

```javascript    
$('#box').slideUp();
```    

## .slideDown()

엘리먼트를 밑으로 슬라이드 펼쳐지는 형태로 보여준다

```javascript
$('#box').slideDown();
```
    
## .slideToggle()

slideDown(), slideUp() toggle

## .animate()

엘리먼트 CSS속성에 에니메이션 효과를 적용하여 변경한다. [API 참고](http://api.jquery.com/animate/)


```javascript    
$('#ani').animate({ 
    'background-color' : '#ff0000',
    'top' : '200',
    'left' : '500',
    'width' : 200
},5000, function(){
    console.log('animate end!');
})
```
    
## .delay()

지연 타이머를 설정

```javascript    
$('#box').slideUp(300).delay(800).fadeIn(400)
```

이 외에도 현재 동작중인 모든 에니메이션을 멈춘다든가 ([jQuery.fx.off](http://api.jquery.com/jQuery.fx.off/)), 에니메이션의 framerate를 변경 하는([jQuery.fx.interval](http://api.jquery.com/jQuery.fx.interval/)) 등의 전역변수들도 참고

