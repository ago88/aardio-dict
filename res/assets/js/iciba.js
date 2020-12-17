//禁止鼠标右键菜单
document.oncontextmenu = function(e){
         return false;
}

function getFlashObject(movieName) {
	if (window.document[movieName]) {
		return window.document[movieName];
	}
	if (navigator.appName.indexOf("Microsoft Internet")==-1) {
		if (document.embeds && document.embeds[movieName])
		return document.embeds[movieName];
	} else  {
		return document.getElementById(movieName);
	}
}

var timer = null;
function player_v1_callback(c) {
	var asound = getFlashObject("asound");
	if(asound){
		try{
			asound.SetVariable("f",c);
			asound.GotoFrame(1);
		}catch(e){
			dispCofirm();
		}   
		return false;
	}
}

function dispCofirm(){
	var confirmflag = confirm("您没有安装flash播放插件，所以无法发音，请先安装下吧！");
	if(confirmflag){
		var url = 'http://www.adobe.com/go/getflashplayer';
		var wo = window.open();
		setTimeout(function(){if(wo)wo.location = url;}, 50);
	}
}

var old = null;//存储前一次发音对象
function asplay(mp3){
	var isNSupportFlash = !! document.createElement("audio").canPlayType && document.createElement("audio").canPlayType("audio/mpeg") && navigator.userAgent.indexOf("Maxthon") < 0;
	if(isNSupportFlash){
		if(old){
			old.pause();//如果多次触发发音，则先停止上一次的发音
		};
		var sound =  new Audio(mp3);
			
		sound.src = mp3;
		old = sound;
		sound.play();
	}else{
		clearTimeout(timer);
		timer = setTimeout(function(){player_v1_callback(mp3); return false;}, 100);
	}
}

function onSecondDelay(mp3) {
	clearTimeout(timer);
	var mp3_1 = "asplay('"+mp3+"')";
	timer = setTimeout(mp3_1, 100);
}