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
	$.each(cards, function(index, value){
		var html = $('<div class="qItems">'+md5view(CryptoJS.MD5(value).toString())+"</div>");
		$("#lists-item").append(html);
		if (value == original) html.addClass("correct");
		html.click(function(){
			// FIX IE CSS BUG
			if ($(this).hasClass("correct")) $(this).addClass("aCorrect");
			else $(this).addClass("iCorrect");
		});
	});
}
var EXCUTE = function() {
	$("#version").html(_v);
	var value = CryptoJS.MD5($("#userInputField").val()).toString();
	md5view(value, document.getElementById("MD5ViewResult"));
	var clone = $("#MD5ViewResult div.md5View").clone().removeClass("middle").addClass("large");
	$("#md5ResultHex").html(value);
	$("#sampleLarge div.item").empty().append(clone);
	var clone = $("#MD5ViewResult div.md5View").clone();
	$("#sampleMiddle div.item").empty().append(clone);
	var clone = $("#MD5ViewResult div.md5View").clone().removeClass("middle").addClass("small");
	$("#sampleSmall div.item").empty().append(clone);
}
// update page
var _r = Math.floor((Math.random()*10000)+1)
$.get('version.html?rand='+_r, function(data) {
	if (_v != data) {
		alert("updated!!! : " + data + " from " + _v);
		location.reload(true);
	}
});
$(document).ready(function(){
	EXCUTE();
	$("#userInputField").keyup(EXCUTE);
	$("#maker").html("oneiroi@outlook.com");
	var check;
	$("button").click(function(){
		$("#lists-item").html("");
		if (!check) {
			$("#overlay").height($(document).height());
			check = true;
		}
		$("#MD5ViewResult").hide();
		$("#overlay").show();
		$("#overlay2").show();
		test();
	});
	$("#close").click(function(){
		$("#overlay2").hide();
		$("#overlay").hide();
		$("#MD5ViewResult").show();
	});	
	SyntaxHighlighter.all();
});