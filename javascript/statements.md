# 조건문, 반목문

## if 문

```javascript
if(isMan){ // 표현식이 true일경우 블럭 코드 실행
    console.log('난 남자');
}
else {
    console.log('난 여자인가?');
}
```

## for 문

```javascript
for(var count=0; count < 5; count++){
    //총 5번 실행
}

var obj = {a:1,b:2};

//느리다.비권장
for(var prop in obj){
    console.log(prop, obj[prop]);
}
```

## while 문

```javascript
var isClosed = true;
while(isClosed) {

  //반복코드

  //false로 만들어서 루프종료
  isClosed = false;

  //루프종료
  break;
}

```

## 함수

```javascript
function sum(x){
    var y = 1;
    return x+y; //return 문이 없을경우 undefined반환
}
```


## try / catch / finally

```javascript
  try{
      //이부분 실행시 예외발생할경우 catch 로 이동
  }
  catch(e){
      // 예외발생할 경우만 실행
  }
  filnally{
      //무조건 실행
  }
```


## 기타

* [while](http://www.w3schools.com/js/js_loop_while.asp)
* [switch](http://www.w3schools.com/js/js_switch.asp)