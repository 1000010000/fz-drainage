
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

            dmodule.find('.J_navList').on('click', 'li', function () {
                $(this).addClass('active').find('img').attr('src', $(this).find('img').attr('data-src')).siblings().removeClass('active')
            })
        },
        //一日一查首页
        checkIndex: function (id) {
            var dmodule = $('#' + id);
            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [121.441071, 31.216294],
                zoom: 16,
                showLabel: false,
                expandZoomRange: true,
            });
        },
        //实时雨晴
        realTime:function(id){
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click','li',function(){ 
			console.log( $(this).children('p'))
                    $(this).children('p').addClass("active");
                    $(this).siblings().children('p').removeClass("active");
                    $(this).addClass("active").siblings().removeClass("active");
                    dmodule.find(".products .main-cont").eq($(this).index()).show().siblings().hide();
                
               
                
            })

        },
        //闸泵水情
        gatePump:function(id){
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click','li',function(){ 
                $(this).children('p').addClass("active");
                $(this).siblings().children('p').removeClass("active");
                $(this).addClass("active").siblings().removeClass("active");
                dmodule.find(".products .main-cont").eq($(this).index()).show().siblings().hide();
                
               
                
            })

        },
        // 实时雨晴--基本信息
        basicDetails:function(id){
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click','li',function(){ 
                $(this).children('p').addClass("active");
                $(this).siblings().children('p').removeClass("active");
                $(this).addClass("active").siblings().removeClass("active");
                dmodule.find(".products .main-cont").eq($(this).index()).show().siblings().hide();
        })
        dmodule.find('.J_screen').click(function () {
            layer.open({
                className: 'screen-popup',
                content: '内容'
            })
        })
       

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
    doWhileExist('realTime', Drainage.Page.realTime);
    doWhileExist('gatePump', Drainage.Page.gatePump);
    doWhileExist('basicDetails', Drainage.Page.basicDetails);
})


