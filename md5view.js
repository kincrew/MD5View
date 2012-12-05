var md5view = function(value, element, key) {
	var background = [
		value.substring(0,6), 
		value.substring(6,12), 
		value.substring(12,18), 
		value.substring(18,24), 
		value.substring(24,30), 
		value.charAt(30), 
		value.charAt(31)
	];
	var key = [value.charAt(30), value.charAt(31), key&&key.charAt(0)||"M", key&&key.charAt(1)||"D", key&&key.charAt(2)||"5"];
	var html = '<div class="md5View">\n<ul class="md5ViewList">\n';
	for (var i=0; i < 5;i++) {
		html += '<li class="md5ViewValue" style="background:#'+background[i]+'">' +key[i]+'</li>\n';
	}
	html += '</ul>\n<div style="clear:both"></div>\n</div>';
	if (element) {
		element.innerHTML = html;
		return element;
	} else return html;
}