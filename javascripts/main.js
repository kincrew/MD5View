var EXCUTE = function() {
	var value = CryptoJS.MD5($("#userInputField").val()).toString();
	md5view(value, document.getElementById("MD5ViewResult"))
	$("#md5ResultHex").html(value);
}
$(document).ready(function(){
	SyntaxHighlighter.all();
	EXCUTE();
	$("#userInputField").keyup(EXCUTE);
	$("#maker").html("oneiroi@outlook.com");
});