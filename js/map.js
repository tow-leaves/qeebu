
//地图
function init() {

        var center = new qq.maps.LatLng(39.910979,116.512917);
        var map = new qq.maps.Map(
                document.getElementById("mapContent"),
                {
                    center: center,
                    zoom: 15
                }
        );
        var marker = new qq.maps.Marker({
            position: center,
            map: map
        });
    }
    init();