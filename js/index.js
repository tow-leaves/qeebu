window.onload = function () {
	//获取图像列表，通过控制left来控制图片显示
	var slider = document.getElementById('slider-container');
	var dots = document.getElementById('slider-dot').children;
	var timer = null;

	//通过获取列表的left来获取当前图片的索引
	function getCurimg () {
		return -parseInt(slider.style.left) / 100;
	}

	//清除之前的红点
	function clearDot () {
		for (var i = 0; i < dots.length; i ++) {
			if (dots[i].className == "active") {
				dots[i].className = "";
			}
		}
	}

	//根据图片让对应的点变为红色
	function changeCurdot () {
		clearDot();//先清除之前的红点
		var curimg = getCurimg();
		dots[curimg].className = "active";
	}

	//图片切换
	function next () {
		var curimg = getCurimg();
		if (curimg == 3) {
			slider.style.left = 0;
		}
		else {
			slider.style.left = (curimg + 1) * (-100) + "%";
		}
		changeCurdot();
	}

	//设置自动播放
	function play () {
		timer = setInterval(next, 2000);
	}

	//为每个点添加事件
	for (var i = 0; i < dots.length; i ++) {
		dots[i].onmouseover = function () {
			clearInterval(timer);//停止播放
			var curDot = this.getAttribute("index");
			slider.style.left = -(curDot * 100) + "%";
			changeCurdot();
		}
		dots[i].onmouseout = function () {
			play();
		}
	}
	play();
}
