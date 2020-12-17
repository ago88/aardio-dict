$(document).ready(
  function() { 
    $("body").niceScroll();
  }
);

//屏蔽鼠标右键、Ctrl+N、Shift+F10、F11、F5刷新、退格键
document.oncontextmenu = function(e){
   return false;
} //屏蔽鼠标右键

window.onhelp = function(e){ 
	return false 
} //屏蔽F1帮助 

document.onkeydown = function(e){ 
	if ((window.event.altKey) && ((window.event.keyCode == 37) || (window.event.keyCode == 39))) { //屏蔽 Alt+ 方向键 ← 、Alt+ 方向键 → 
		//alert("不准你使用ALT+方向键前进或后退网页！"); 
		event.returnValue = false; 
	} 

	if ((event.keyCode == 8) || (event.keyCode == 116) || (event.ctrlKey && event.keyCode == 82)) { //屏蔽退格删除键、F5 刷新键、 Ctrl + R 
		event.keyCode = 0; 
		event.returnValue = false; 
	} 
	if (event.keyCode == 122) { 
		event.keyCode = 0; 
		event.returnValue = false; 
	} 
	if (event.ctrlKey && event.keyCode == 78) event.returnValue = false; 	//屏蔽F11 
	if (event.shiftKey && event.keyCode == 121) event.returnValue = false; //屏蔽 Ctrl+n 
	if (window.event.srcElement.tagName == "A" && window.event.shiftKey) //屏蔽 shift+F10 
		window.event.returnValue = false; //屏蔽 shift 加鼠标左键新开一网页 
	if ((window.event.altKey) && (window.event.keyCode == 115)) { //屏蔽Alt+F4 
		window.showModelessDialog("about:blank", "", "dialogWidth:1px;dialogheight:1px"); 
		return false; 
	}
}