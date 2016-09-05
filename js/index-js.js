window.onload = function(){
// 获取图像列表, 通过控制left来控制图像的显示
    var slider = document.getElementById("slider"),
        dots = document.getElementById("slider-down-dot").children;
    var timer = null;

    //通过获取列表的left值获取当前的图片索引
    function getCurImg(){
        return -parseInt(slider.style.left) / 100;
    }

    //清空之前的红色点
    function clearDot(){
        for(var i = 0, len = dots.length; i < len; i ++){
            if(dots[i].className == "active"){
                dots[i].className = "";
            }
        }
    }

    //根据图片的位置, 来让对应的点显示为红色
    function dotAcive(){
        clearDot();//先清除之前的点
        var curImg = getCurImg();
        dots[curImg].className = "active";
    }

    //图片翻页
    function next(){
        var curImg = getCurImg();
        if(curImg == 3){
            slider.style.left = 0;
        }else {
            slider.style.left = (curImg + 1) * (-100) + "%";
        }
        dotAcive();
    }

    //设置自动播放
    function play() {
        timer = setInterval(next, 2000);
    }

    //为没个点添加事件处理程序
    for(var i = 0, len = dots.length; i < len; i ++) {
        dots[i].onmouseover = function(){
            clearInterval(timer);
            var curDot = this.getAttribute("index");
            slider.style.left = -(curDot * 100) + "%";
            dotAcive();
        }
        dots[i].onmouseout = function() {
            play();
        }
    }
    play();
};