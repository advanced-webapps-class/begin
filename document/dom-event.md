# Event

* 문서에서 Element에 변화가 생기면서 발생하는 모든 사건
* 이벤트타입: click, mouseover, load, mouseout, unload, change,submit, focus, blur, error, keypress,DOMContentLoaded,touchstart ..
* [Mozilla event reference](https://developer.mozilla.org/en/DOM/DOM_event_reference)

## Event 등록 방법

```javascript
//인라인
<body onload="alert(1)">

//프로퍼티로 주기
window.load=function(){
    alert("load");
};

//DOM 레벨2
window.addEventListener('load', function(){
    alert("load");
});
```

* DOM 레벨2 권장
* IE에서는 독자적인 모델 구현
* [크로스브라우징 구현](http://jsfiddle.net/niceaji/kcbke/)

## 이벤트 등록,제거

* [addEventListener()](https://developer.mozilla.org/en/DOM/element.addEventListener)
* [removeEventListener()](https://developer.mozilla.org/en/DOM/element.removeEventListener)

## Methods, Properties

* [메소드](https://developer.mozilla.org/en-US/docs/DOM/event#Methods)
* [프로퍼티](https://developer.mozilla.org/en-US/docs/DOM/event#Properties)

## Callback 함수

```javascript
var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});
```

* 특정 동작(이벤트)등이 완료후에 발생하는 함수
* this, event.currentTarget : 이벤트 처리기가 등록된 객체

## 이벤트 전파

![](http://i.imgur.com/yFv5hSy.png)

* 캡쳐,버블
* [예제](http://jsfiddle.net/niceaji/Ve9zd/)

## 이벤트 전파 중지

[예제](http://jsfiddle.net/niceaji/FHmBE/)

```javascript
event.stopPropagation(); // 이벤트 전파 중지

event.preventDefault(); // 기본 행동 중지
```

