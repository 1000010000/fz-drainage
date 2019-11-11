
var Drainage = {
    Page: {
        //办公-人员
        officeRy: function (id) {
            var dmodule = $('#' + id);
            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [121.441071, 31.216294],
                zoom: 16,
                showLabel: false,
                expandZoomRange: true,
            });

            dmodule.find('.J_screen').click(function () {
                layer.open({
                    className: 'screen-popup',
                    content: '内容'
                })
            })
        },
        //运动轨迹详情
        trajectoryDetails: function (id) {
            var dmodule = $('#' + id);
            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [121.441071, 31.216294],
                zoom: 16,
                showLabel: false,
                expandZoomRange: true,
            });
        },
        //气象信息
        officeWeather: function (id) {
            var dmodule = $('#' + id);
            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [121.441071, 31.216294],
                zoom: 16,
                showLabel: false,
                expandZoomRange: true,
            });
        },
        //一日一查首页
        checkIndex:function(id){
            var dmodule = $('#' + id);
            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [121.441071, 31.216294],
                zoom: 16,
                showLabel: false,
                expandZoomRange: true,
            });
        }

    }
}

$(function () {
    var doWhileExist = function (sModuleId, oFunction) {
        if (document.getElementById(sModuleId)) {
            oFunction(sModuleId);
        }
    };
    doWhileExist('officeRy', Drainage.Page.officeRy);
    doWhileExist('trajectoryDetails', Drainage.Page.trajectoryDetails);
    doWhileExist('officeWeather', Drainage.Page.officeWeather);
    doWhileExist('checkIndex', Drainage.Page.checkIndex);
})


