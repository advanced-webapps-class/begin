# javascript 기본

## Hello World!

```javascript
var str = 'hello world!';
console.log(str);
```

## 변수

```javascript
var x = 'abc';
```

* var 사용 권장
* 첫번째 문자로 숫자 불가능
* 변수명 대소문자 구분
* 어떤 값도 넣기 가능, 자동 타입을 변환
* [예약어](https://msdn.microsoft.com/ko-kr/library/ie/0779sbks(v=vs.94).aspx)는 사용불가

## 세미콜론

* 자바스크립트 구문은 세미콜론(;)으로 각각 구분
* 구문이 별도의 줄로 나눠져 있다면 세미콜론을 생략해도 됨

```javascript
var nick = 'hulk';
var age = 30
var hobby = 'bike';


var nick = 'hulk'; var age = 30; var hobby = 'bike';
```

* **세미콜론은 항상 사용하는 습관이 중요**