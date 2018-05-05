window.onload =function(){//页面加载时候触发
var banner = document.getElementById("banner"),
	bannerImg = banner.getElementsByTagName("img"),
	nav =document.getElementById("nav"),
	lis = nav.getElementsByTagName("li"),
	timer = null,
	index = 0,
	len = bannerImg.length;
	
function carousel() {
	//定时器
	banner.onmouseout= function (){
		timer = setInterval(function(){
			index++;
			if(index>=len) index = 0;
			changeImg();			
		},1000)
	}
	//清楚定时器
	banner.onmouseover = function() {
		clearInterval(timer);
	}
	banner.onmouseout();//页面加载执行一次鼠标离开事件
	//tab点击切换图片和颜色
	for(var m=0;m<len;m++){
		lis[m].setAttribute("dataIndex",m);
		lis[m].onclick = function() {
			index = this.getAttribute("dataIndex");
			changeImg();
		}
		//tab的处理
		lis[m].onmouseover = function() {
			clearInterval(timer);
		}
		lis[m].onmouseout = function() {
			banner.onmouseout();
		}
	}	
}
//切换图片代码和改变颜色
function changeImg() {
	for(var j= 0;j<len;j++){
		bannerImg[j].style.display = "none";
		bannerImg[j].className = "";
		lis[j].className = ""
	}
		bannerImg[index].style.display = "block";
	    bannerImg[index].className = "show";
	    lis[index].className = "change";
}
carousel();
}
