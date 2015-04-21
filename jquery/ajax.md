# Ajax 

[API](http://api.jquery.com/category/ajax/)


### [jQuery.get( [settings ] )](http://api.jquery.com/jQuery.get/)

```javascript
$.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
```

### [jQuery.post( [settings ])](http://api.jquery.com/jQuery.post/)

```javascript
$.post( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
});
```


### [jQuery.getJSON(url [, data ] [, success ] )](http://api.jquery.com/jQuery.getJSON/)

url에 `callback=?`가 있으면 jsonp 동작

```javascript
$.getJSON( "http://daum.net/?callback=?", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
```


### [jQuery.ajax( url [, settings ] )](http://api.jquery.com/jQuery.ajax/)

Low-Level Interface

```javascript
$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
```

