# Ajax API - fetch()


```javascript
fetch('issue.json')
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })
 .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
```

- [예제](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [WHATWG](https://ko.wikipedia.org/wiki/WHATWG) [Fetch standard](https://fetch.spec.whatwg.org/)
- [브라우저 지원현황](https://caniuse.com/#search=fetch)
- [Polyfill](https://ourcodeworld.com/articles/read/625/top-5-best-javascript-polyfills-for-the-fetch-api)