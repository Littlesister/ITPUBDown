// ==UserScript==
// @name		ITPub downloader
// @author		TheCjw
// @description	// 
// @namespace	http://github.com/thecjw
// @updateURL	https://raw.github.com/TheCjw/ITPUBDown/master/cool.js
// @downloadURL	https://raw.github.com/TheCjw/ITPUBDown/master/cool.js
// @include		http://www.itpub.net/thread*
// @include		http://www.itpub.net/forum.php?mod=viewthread*
// @version		1.01
// @require		http://www.itpub.net/static/js/jquery-1.4a2.min.js
// ==/UserScript==

$(document).ready(function(){
	$('ignore_js_op').find('a').click(function(){
		var downloadLink = $(this).attr('href');
		var reg = /(?:attachment\.php\?aid\=)(\w{48})/i
		var result = reg.exec(downloadLink);
		if (result != null) {
			var fileId = result[1];
			$(this).attr('href', 'forum.php?mod=attachment&aid='+fileId);
		}
	});
});
