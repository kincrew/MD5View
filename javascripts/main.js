Array.prototype.shuffle = function() {
 	var len = this.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = this[i];
  	this[i] = this[p];
  	this[p] = t;
 	}
};

var test = function(s) {
	var z = s || 10;
	var original = $("#userInputField").val();
	var correct;
	var cards =[original];
	for (var t=0; t < z - 1; t++) {
		cards.push(""+Math.floor((Math.random()*10000)+1));
	}
	cards.shuffle();
	console.log(cards);
	$.each(cards, function(index, value){
		var html = $('<div class="qItems">'+md5view(CryptoJS.MD5(value).toString())+"</div>");
		$("#lists-item").append(html);
		if (value == original) html.addClass("correct");
		html.click(function(){
			$(this).addClass('active');
		});
	});
}

var EXCUTE = function() {
	var value = CryptoJS.MD5($("#userInputField").val()).toString();
	md5view(value, document.getElementById("MD5ViewResult"));
	$("#md5ResultHex").html(value);
}

$(document).ready(function(){
	SyntaxHighlighter.all();
	EXCUTE();
	$("#userInputField").keyup(EXCUTE);
	$("#maker").html("oneiroi@outlook.com");

	$("button").click(function(){
		$("#lists-item").html("");
		$("#overlay").css('height', $(document).height() + "px");
		$("#MD5ViewResult").hide();
		$("#overlay").show();
		$("#overlay2").fadeIn();
		test();
	});
	$("#close").click(function(){
		$("#overlay2").fadeOut(function(){
			$("#overlay").hide();
			$("#MD5ViewResult").show();
		});
	});
});