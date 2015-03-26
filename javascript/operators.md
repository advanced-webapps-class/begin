# 주요 연산자

> [모든 연산자](http://goo.gl/IKp7AB)


## 연산자

### +

```javascript
console.log( 1 + 2 ) // 3
console.log( "a" + "b" ) // "ab"
console.log( 1 + "4") // "14"
```

* 숫자형일경우 값 더함
* 문자형일경우 이어붙임

### 동등, 일치

```javascript
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true
```

* ==  동등,  != 부등   : 비권장
* **=== 일치, !== 불일치**

### 논리곱 - and

```javascript
if( isHero && isHulk ) {
  //둘다 참일경우 실행
}
```
* 두 식이 모두 true이면 result는 true
* 두 식 중 하나가 false인 경우 false를 반환

### 논리합 - or

```javascript
if( isHero || isHulk ) {
  //하나라도 참일경우 실행
}
```

* 두 식 중 하나가 true이면 true 반환

### 논리부정 - !

```javascript
if( !isHero ) {
  //영웅이 아니라면
}
```


### in

```javascript
var image = {width:1,height:2};

console.log( "width" in image ); //true
console.log( "size" in image );
console.log( "toString" in image );
```

* 좌변값이 우변객체 프로퍼티 이름에 해당할 경우

### delete

```javascript
delete image.width;

image.width = null; //value만 지우고 프로퍼티 는 남겨둠
```

* 객체의 프로퍼티 삭제
* var 로 선언한 변수 delete못함


### typeof

```javascript
console.log( typeof (1 + "4") );

typeof foo !== 'undefined';
```

### instanceof

```javascript
var arr = [1,2,3];

console.log( a instanceof Array) //true
```

* 인스턴스인지 여부


