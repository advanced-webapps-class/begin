var Ajax = function(options) {
  this.options={
    method:'GET',
    param:'',
    onComplete:null,
    onError:null,
    asynchronous: true,
    contentType: 'application/x-www-form-urlencoded',
    encoding:'UTF-8'
  }
  Object.extend(this.options, options);
  if(this.options.url) this.send();
};

Ajax.prototype={
  getReq:function(){
    var req=null;
    try { req = new XMLHttpRequest(); }
    catch(e)
    {
      try { req = new ActiveXObject("Msxml2.XMLHTTP"); }
      catch(e)
      {
        try { req = new ActiveXObject("Microsoft.XMLHTTP"); }
        catch(e) { }
      }
    }
    return req;
  },
  send:function(){
    this.req = this.getReq();
    var op=this.options;
    var url=op.url;
    var param=op.param;
    var method=op.method.toUpperCase();
    if(method=='GET' && param) url=url+"?"+param;
    this.req.open(method, url, op.asynchronous);
    this.req.setRequestHeader('Content-Type', op.contentType+';charset='+op.encoding);

    var self = this;
    this.req.onreadystatechange = function() { self.onStateChange.call(self) }
    this.req.send(method=='POST'?param:null);
  },
  onStateChange: function() {
    if(this.req.readyState==4)
    {
      if(this.req.status=="200") this.options.onComplete(this.req);
      else
      {
        if(this.options.onError) this.options.onError(this.req);
        else alert("서버에러입니다! 잠시후에 다시 시도하세요! "+this.req.status);
      }
    }
  }
};