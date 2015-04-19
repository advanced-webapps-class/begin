# 메소드 특징 이해

## 어떤 엘리먼트를 타겟으로 하는가?
    
```javascript
// 모든 div안에 text를 집어넣는다
$('div').html("text")

// 모든 div가 아니라 $('div') 에서 가장 처음에 발견된 엘리먼트의 width를 구한다
$('div').width();
```    

## jQuery객체를 리턴하는가?

많은 메소드들이 jQuery 자기 자신을 리턴, 메소드 체이닝이 가능
    
    
```javascript    
//  bgcolor 를 변경하고 uix.kr 텍스트를 집어 넣어라!
$('#box').css("background-color","red").html("uix.kr")

// error
// width를 구하고 uix.kr 텍스트를 집어 넣어라?
$('#box').width().html("uix.kr")
```

width() 메소드는 width값을 리턴하기에 메소드체이닝이 불가능, 에러가 발생

## 수많은 인자 타입들

메소드들에 많은 인자타입이 존재한다 (오버로딩)

```javascript    
//모든 div에 border 클래스를 추가
$("div").addClass("border")

//모든 div에 div-{index} 클래스 추가
$('div').addClass(function(index){   return "div-" + index  })
```
    
인자가 없을경우엔 getter 가 되고 있을 경우엔 setter 가 되는 경우도 있다
   
```javascript    
$('#box').width(300) //300px 로 설정
$('#box').width() // width 구하기
```    
