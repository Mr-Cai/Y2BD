// ==UserScript==
// @name           Y2BD
// @version        0.0.1
// @description    YouTube Download Videos, All Format Analyzing   
// @author         Kaige Cai
// @namespace      https://github.com/Mr-Cai/Y2BD
// @updateURL      https://raw.githubusercontent.com/Mr-Cai/Y2BD/master/y2bd.js
// @icon           https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube_icon_full-color.svg
// @include        http://*.youtube.com/*
// @include        http://youtube.com/*
// @include        https://*.youtube.com/*
// @include        https://youtube.com/*
// @match          *://*.youtube.com/*
// @match          *://*.googlevideo.com/*
// @match          *://s.ytimg.com/yts/jsbin/*
// @grant          GM_xmlhttpRequest
// @grant          GM.xmlHttpRequest
// @connect        googlevideo.com
// @connect        s.ytimg.com
// ==/UserScript==

(function () {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', 'https://r4---sn-ibj-i3bz.googlevideo.com/videoplayback?expire=1611225662&ei=3gUJYNnACd6Ps8IPwN-ssAE&ip=210.0.158.165&id=o-AI7UQ2vGTeJMqZyFEep3gfD1-QLee6uly5IbCzpUpoer&itag=303&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=-u&mm=31%2C29&mn=sn-ibj-i3bz%2Csn-i3b7knld&ms=au%2Crdu&mv=m&mvi=4&pcm2cms=yes&pl=26&initcwndbps=1308750&vprv=1&mime=video%2Fwebm&ns=nalRAuHrnh8e1gUDnSiO-ZsF&gir=yes&clen=8796007&dur=67.651&lmt=1610772501893866&mt=1611203560&fvip=4&keepalive=yes&c=WEB&txp=5535434&n=zDR_1Z7Heu69uo&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgVF8MDoa1wIba2W4e_mkTAFtOMtz9sQXJ0n5-KJIm7v4CIA4kgs1utQVfCixHG484p_qyqNBfB4ZLaVO_C857vult&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKxEp30Iyxkttai_xgTtRXbzG6u345rXzktY33rrlxuNAiEAxvb63F-tQVbfTB3cWLVcI2C1WcmXs6uIZacApOdxIf0%3D&title=Angry%20Pom', true);
    xmlHttpRequest.send();
})();