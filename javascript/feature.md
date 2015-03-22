# 특징


## 자동 변환

한 타입의 값이 다른 타입값을 요구하는 곳에서 사용될때 필요에 따라 알아서 변환


```javascript
if("test"){  //true 로 자동 변환
  console.log("true");
}

"2"  + 2; // "22"

2 + 5 + "1" // "71"
```
* [암묵적인 강제형변환과 타입캐스팅](http://www.slideshare.net/senxation/ss-16791882)

## 중첩함수

```javascript
function sum(){
  function sum2(x){
    return x + x;
  }
  console.log(sum2(3));
}
```


## 생략 가능한 전달인자

```javascript
function sum(x, y){
    if(!y) y = 1;
    console.log(x+y);
}
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


## 객체를 전달인자로 사용

```javascript
function area1(width,height){
  console.log(width * height);
}

function area2(options){
  console.log(options.width * options.height);
}

area2( {width:300,height:200} );
```

전달인자가 많을경우 유용




## 함수 - 프로퍼티와 메소드

```javascript
function test(x,y){}
console.log(test.length); //함수가 전달받기 기대하는 인자갯수

//직접 정의도 가능
test.count = 1; //static

test.prototype;  //prototype객체를 가르킴
```


## 기본 타입 래퍼 객체

```javascript
var str = "jeju";
console.log( str.substring(0,2) ); //String 래퍼객체로 자동변환

var str = new String("jeju");
console.log( str + " jeju" );
```

## 값에 의한 & 참조에 의한

```javascript
//call by value
function byValue(count){
    count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); //3

//call by reference
function byReference(count){
    count.push("2");
}
var count = ["1"];
byReference(count);
console.log(count); // ["1","2"]
```

*   by value : 기본타입 ( 숫자,불리언,문자열)
*   by reference : 객체타입