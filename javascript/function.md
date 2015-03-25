# 함수

> 한 번 정의하면 몇 번이든 실행할 수 있고 호출 할 수 있는 javascript 코드블록

* 메서드(method) : 어떤 객체의 속성으로 저장된 javascript 함수
* javascript 함수는 다른 함수 내에 중첩되어 정의도 가능

```javascript
function 함수이름(전달인자1, 전달인자2, … ,전달인자n) {
  //구문
}
```

## 함수 호출


### 일반 함수

```javascript
function sum(a, b){
  return a + b;
}
sum(1, 3);
```
* return 문의 값이 있으면 그 값을 반환 아니면 undefined을 반환

### 멤버 변수

```javascript
var car = {
  year: '2014',
  starting: function(){
    console.log('starting..');
  }
};

car.starting();
```

## 여러가지 함수모양

```javascript
// 익명 함수표현식
var car = function() {
  //코드
};

//중첩함수


// 익명 즉시실행함수, 스코프 보호
(function() {
    //코드
})();
```

## 생략 가능한 전달인자

```javascript
function sum(x, y){
    if(!y) y = 1;
    console.log(x+y);
}
sum(3);
```

## 가변 길이 전달인자

```javascript
function sum(){
  var size = 0;
  for(var i=0; i < arguments.length; i++){
      size += arguments[i];
  }

  console.log(size);
}

sum(1,2,3,4,5,6,7);
```

* Arguments 객체로  인자 전달
* arguments 객체는 Array가 아니다


## 함수의 프로퍼티와 메소드

```javascript
function test(x,y){}
console.log(test.length); //함수가 전달받기 기대하는 인자갯수

//직접 정의도 가능
test.count = 1; //static

test.prototype;  //prototype객체를 가르킴
```