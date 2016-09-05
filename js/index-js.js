window.onload = function(){
// ��ȡͼ���б�, ͨ������left������ͼ�����ʾ
    var slider = document.getElementById("slider"),
        dots = document.getElementById("slider-down-dot").children;
    var timer = null;

    //ͨ����ȡ�б��leftֵ��ȡ��ǰ��ͼƬ����
    function getCurImg(){
        return -parseInt(slider.style.left) / 100;
    }

    //���֮ǰ�ĺ�ɫ��
    function clearDot(){
        for(var i = 0, len = dots.length; i < len; i ++){
            if(dots[i].className == "active"){
                dots[i].className = "";
            }
        }
    }

    //����ͼƬ��λ��, ���ö�Ӧ�ĵ���ʾΪ��ɫ
    function dotAcive(){
        clearDot();//�����֮ǰ�ĵ�
        var curImg = getCurImg();
        dots[curImg].className = "active";
    }

    //ͼƬ��ҳ
    function next(){
        var curImg = getCurImg();
        if(curImg == 3){
            slider.style.left = 0;
        }else {
            slider.style.left = (curImg + 1) * (-100) + "%";
        }
        dotAcive();
    }

    //�����Զ�����
    function play() {
        timer = setInterval(next, 2000);
    }

    //Ϊû��������¼��������
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