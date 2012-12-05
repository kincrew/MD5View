var EXCUTE = function() {
	var value = CryptoJS.MD5($("#userInputField").val()).toString();
	var key   = $("span.key");
	var keys  = "" + key.eq(0).html() + key.eq(1).html() + key.eq(2).html();
	md5view(value, document.getElementById("MD5ViewResult"), keys)
	$("#md5ResultHex").html(value);
}
$(document).ready(function(){
	SyntaxHighlighter.all();
	EXCUTE();
	$("#excute").click(EXCUTE);
	$("#userInputField").focus(function(){
		$("span.key").removeClass("focus");
	});
	$("#userInputField").keyup(EXCUTE);
	
	$("body").click(function(){
		$("span.key").removeClass("focus");
	});

	$("span.key").click(function(e) { 
		e.stopImmediatePropagation();
		$("span.key").removeClass("focus");
		$(this).addClass("focus");
	});
	$("body").keypress(function(e){
		var check = $("span.key.focus");
		if (check.length) {
			check.html(String.fromCharCode(e.charCode));
			EXCUTE();
		}
	});
	$("#maker").html("oneiroi@outlook.com");
});