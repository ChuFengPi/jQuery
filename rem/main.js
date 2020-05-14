document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/16+"px";//改变窗口的时候重新计算大小
window.onresize = function(){document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/16+"px";}



   