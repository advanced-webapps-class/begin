# 객체와 배열

## 객체

```javascript
var person = {
  "nick" : "aji",
  "age" : 30,
  "area" :  "jeju",
  "hobby" : ["movie","walk"]
};
```

* [JSON](http://json.org/) (제이슨,JavaScript Object Notation)
* is a lightweight data-interchange format


## 기본 프로퍼티,메소드

```javascript
//constructor : 생성자 함수를 가르킴
obj.constructor == Object // true

// hasOwnProperty : 객체가 프로퍼티를 소유(상속이 아닌)하고 있는지 검사
console.log( obj.hasOwnProperty("nick") );

// toString() : 문자열로 반환, 그다지 유용하지 않는 정보 출력
alert(obj) // alert(obj.toString())
```

* Object에서 상속받은 프로퍼티와 메소드


## 내장 객체

```javascript
console.log(window); //브라우저 가장 최상위 객체

var date = new Date();

Math.floor(1.4);    //static

var patten = new RegExp("^abc"); //패턴매칭

```

[참고 레퍼런스](http://www.w3schools.com/jsref/default.asp)

## 배열

```javascript
var arr = [1,2,3];

// new Array() 비권장, 모호하다
var arr = new Array(1,2,3); // [1,2,3]
var arr = new Array(3); // []  // [], arr.lenght=3
console.log(arr.length); //3

for(var i=0; i < arr.length; i++){
    console.log(arr[i]);
}
```

[배열 관련 메소드 보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

