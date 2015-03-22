# Ajax API


[XMLHttpRequest](https://developer.mozilla.org/ko/docs/XMLHttpRequest)

* open(string method,string url,boolean asynch)
    * HTTP 요청과 동기/비동기 통신에 따른 필요사항을 준비
* setRequestHeader(string header,string value)
    * 요청 헤더를 설정합니다. 반드시 open( ) 메소드를 호출한 다음 사용
* onreadystatechange
    * 정의되는 콜백 함수는 readyState가 변경될 때마다 호출
* send(string)
    * HTTP 요청을 합니다.
* readyState
    * 0 : uninitialized(open( ) 메소드가 호출되지 않은 상태)
    * 1 : loading(send( ) 메소드가 호출되지 않은 상태)
    * 2 : loaded(send( ) 메소드가 호출된 상태. header와 status 사용 가능)
    * 3 : interactive(reponseText에 부분적인 데이터가 저장됨)
    * 4 : completed
* status : 응답 상태 코드
    * 200(Okay), 404(Not Found) 등
* statusText
    * 응답상태 문자열
* abort()
    * HTTP 요청을 취소
* responseText
    * 반환된 일반 텍스트 문자열
* responseXML
    * 반환된 XML , DOM객체
* getAllResponseHeaders()
    * 모든 헤더 정보를 반환,문자열
* getResponseHeader(string header)
    * 특정 헤더 값을 반환,문자열