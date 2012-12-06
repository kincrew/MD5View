/* md5View */
var md5view = function(value, element, size) {
	var size = (size&&" "+size) || " middle";
	var background = [
		value.substring(0,6), 
		value.substring(6,12), 
		value.substring(12,18), 
		value.substring(18,24), 
		value.substring(24,30)
	];
	var html = '<div class="md5View'+size+'" style="border-color:#'+background[0]+'">\n<ul class="md5ViewList">\n';
	html += '<li class="md5ViewValue" style="background:#'+background[1]+'">';
	html += '<span class="overlay" style="color:#'+background[3]+'">' +value.charAt(30)+'</span>';
	html += '<span>' +value.charAt(30)+'</span>';
	html += '</li>\n<li class="md5ViewValue" style="background:#'+background[2]+'">';
	html += '<span class="overlay" style="color:#'+background[4]+'">' +value.charAt(31)+'</span>';
	html += '<span>' +value.charAt(31)+'</span></li>\n';
	html += '</ul>\n<div style="clear:both"></div>\n</div>';
	if (element) {
		element.innerHTML = html;
		return element;
	} else return html;
}