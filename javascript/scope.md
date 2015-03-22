# Scope


## 유효범위
```javascript
var nick = "aji"; //전역변수

function test(){
  var age = "30"; //지역변수
  console.log(nick , age);
}

test();
console.log(age);
```

* Block Scope **X**, Function Scope **O**
* var 를 빼면?

## 호이스팅 - Hoisting

```javascript
var name = "global";
function test() {
  console.log(name);
  var name = "local";
  console.log(name);
}

//함수또한
test2();
function test2() { console.log('test')};
```

* var 구문, function 선언문을
* 해당 Scope의 가장 처음으로 옮기는 것
* 항상 상단에서 변수 선언 사용 권장


