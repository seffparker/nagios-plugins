// PhantomJS script for Icinga/Nagios to check the status of Tawk Chat
// Usage: phantomjs check_tawk.js <tawk_token>
//
// Author: Seff P., Maddy. M
// Version: 20190613

var system = require('system');
var webPage = require('webpage');

var args = system.args;
var page = webPage.create();

var htmlCodeBegin = '<html><head><meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\"\/><meta name=\"viewport\" content=\"minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height\"\/><title>Chat Status<\/title><\/head><script type=\"text\/javascript\">var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];s1.async=true;s1.src=\'https:\/\/embed.tawk.to\/';
var htmlCodeEnd = '\/default\';s1.charset=\'UTF-8\';s1.setAttribute(\'crossorigin\',\'*\');s0.parentNode.insertBefore(s1,s0);})();Tawk_API.onLoad = function(){var pageStatus = Tawk_API.getStatus();document.getElementById(\"stat\").innerHTML = pageStatus;};<\/script><body><p id=\"stat\"><\/p><\/body><\/html>';

var tawkToken = args[1];
if (tawkToken == undefined) {
	console.log("UNKNOWN: Tawk token required");
	phantom.exit(3);
	}

var dummyURL = 'http://tawk.to/';
var htmlCodeMarged = htmlCodeBegin + tawkToken + htmlCodeEnd;

page.setContent(htmlCodeMarged, dummyURL);
setTimeout(function() {
	var status = page.evaluate(function() {
		return document.getElementById('stat').textContent;
		});
	if (status == 'online') {
        	exitMessage = 'OK: Chat operator is online';
	        exitCode = '0';
        }
	else if (status == 'offline') {
        exitMessage = 'WARNING: Chat operator is offline';
        exitCode = '1';
        }
else {
        exitMessage = 'UNKNOWN: Unable to get chat status';
        exitCode = '3';
        }
console.log(exitMessage);
phantom.exit(exitCode);

}, 2000);
