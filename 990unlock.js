// ==UserScript==
// @name       990 unlock
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.990.ro/*
// @copyright  2012+, You
// ==/UserScript==


var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++)
{
	if (links[i].href.indexOf("http://fastupload.ro/video/") > -1)
    {
       var mylink = links[i].href.split("http://fastupload.ro/video/")[1];
       mylink = "http://superweb.rol.ro/video/"+mylink;
       window.location.href = mylink;
    } 
    if (links[i].href.indexOf("http://superweb.rol.ro/video/") > -1)
    {
       var mylink = links[i].href.split("http://superweb.rol.ro/video/")[1];
       mylink = "http://superweb.rol.ro/video/"+mylink;
       window.location.href = mylink;
    }
}

