////////// reading json data///////////////////

Alloy.Globals.someGlobalFunction = function(send_url,sucesscall){ 
	var xhr;
xhr=Ti.Network.createHTTPClient({
	onload:function(e)
	{	
		//Ti.API.info("hello"+JSON.stringify(this.responseText));
	sucesscall(JSON.parse(this.responseText));
	//alert(JSON.parse(this.responseText));
	}
});
xhr.open('GET',send_url);
xhr.send();
	};
	

