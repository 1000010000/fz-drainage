
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
                dmodule.find('.J_msgPopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
            })
        },
        //办公-人员-统计
        screenRyTj: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_screen').click(function () {

                dmodule.find('.J_msgPopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
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
                $(this).addClass('active').find('img').attr('src', $(this).find('img').attr('data-active')).end().siblings().removeClass('active')
                $(this).siblings().each(function (index, el) {
                    $(el).find('img').attr('src', $(el).find('img').attr('data-src'))
                })
            })

            dmodule.find('.J_closeBtn').click(function () {
                dmodule.find('.J_tipsMsg').hide()
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
        //一日一查-选择河道
        riverList: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_listBox').on('click', 'li', function () {
                layer.open({
                    content: `您确认要选择${$(this).find('a').text()}`
                    , btn: ['确认', '取消']
                    , yes: function (index) {
                        location.href = $(this).attr('data-url')
                        layer.close(index);
                    }
                });
            })
        },

        //实时水晴
        realTime: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click', 'li', function () {
                console.log($(this).children('p'))
                $(this).children('p').addClass("active");
                $(this).siblings().children('p').removeClass("active");
                $(this).addClass("active").siblings().removeClass("active");
                dmodule.find(".products .main-cont").eq($(this).index()).show().siblings().hide();
            });
            dmodule.find('.J_selectOnly').click(function () {

                dmodule.find('.J_msgPopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_cancelSel').click(function () {
                dmodule.find('.J_maskBox').hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_confirmSel ').click(function () {
                var inputVal = dmodule.find('.pump-input input').val()
                if(inputVal != ''){
                    dmodule.find('.J_maskBox').hide()
                    dmodule.find('.J_msgPopup').hide()
                } 
            })
            dmodule.find('.J_listSel').on('click', 'li', function () {
                $(this).addClass("active").siblings().removeClass("active");         
            })
            dmodule.find('.J_timeSel').click(function () {
                dmodule.find('.J_msgPopupTime').show()
                dmodule.find('.J_maskBoxTime').show() 
            })
            dmodule.find('.J_maskBoxTime').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopupTime').hide()
            })
            // laydate.render({
            //     elem:  dmodule.find('#test5') ,
            //     type: 'datetime'
            // });
            dmodule.find('.J_follow').on('click', 'span', function () {
                $(this).addClass("active").siblings().removeClass("active");
               
            })
            dmodule.find('.J_site').click(function () {

                dmodule.find('.J_msgPopupSite').show()
                dmodule.find('.J_maskBoxSite').show()
            })
            dmodule.find('.J_maskBoxSite').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopupSite').hide()
            })
             

        },
        //闸泵水情
        gatePump: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click', 'li', function () {
                $(this).children('p').addClass("active");
                $(this).siblings().children('p').removeClass("active");
                $(this).addClass("active").siblings().removeClass("active");
                dmodule.find(".products .main-cont").eq($(this).index()).show().siblings().hide();
            })
            dmodule.find('.J_selectOnly').click(function () {

                dmodule.find('.J_msgPopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_cancelSel').click(function () {
                dmodule.find('.J_maskBox').hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_confirmSel ').click(function () {
                var inputVal = dmodule.find('.pump-input input').val()
                if(inputVal != ''){
                    dmodule.find('.J_maskBox').hide()
                    dmodule.find('.J_msgPopup').hide()
                }
                
            })
            dmodule.find('.J_listSel').on('click', 'li', function () {
                $(this).addClass("active").siblings().removeClass("active");
                console.log( $(this))
               
            })
            dmodule.find('.J_follow').on('click', 'span', function () {
                $(this).addClass("active").siblings().removeClass("active");
               
            })
            dmodule.find('.J_timeSel').click(function () {
                dmodule.find('.J_msgPopupTime').show()
                dmodule.find('.J_maskBoxTime').show()  
            })
            dmodule.find('.J_maskBoxTime').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopupTime').hide()
            })

        },
        // 实时水晴--基本信息
        basicDetails: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click', 'li', function () {
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

        },
        // 实时水情
        waterRegime: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click', 'li', function () {
                $(this).children('p').addClass("active");
                $(this).siblings().children('p').removeClass("active");
                $(this).addClass("active").siblings().removeClass("active");
                dmodule.find(".products .main-cont").eq($(this).index()).show().siblings().hide();
            })
            dmodule.find('.J_selectOnly').click(function () {
                dmodule.find('.J_msgPopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_cancelSel').click(function () {
                dmodule.find('.J_maskBox').hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_confirmSel').click(function () {
                var inputVal = dmodule.find('.pump-input input').val()
                if(inputVal != ''){
                    dmodule.find('.J_maskBox').hide()
                    dmodule.find('.J_msgPopup').hide()
                }
                
            })
            dmodule.find('.J_listSel').on('click', 'li', function () {
                $(this).addClass("active").siblings().removeClass("active");
               
            })
            dmodule.find('.J_follow').on('click', 'span', function () {
                $(this).addClass("active").siblings().removeClass("active");
               
            })
            dmodule.find('.J_timeSel').click(function () {
                dmodule.find('.J_msgPopupTime').show()
                dmodule.find('.J_maskBoxTime').show()  
            })
            dmodule.find('.J_maskBoxTime').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopupTime').hide()
            })
        },
        // 实时雨晴--基本信息
        basicRain: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click', 'li', function () {
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

        },
        // 实时雨晴--基本信息
        basicPupm: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_tabClick').on('click', 'li', function () {
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

        },

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
    doWhileExist('screenRyTj', Drainage.Page.screenRyTj);
    doWhileExist('riverList', Drainage.Page.riverList);
    doWhileExist('waterRegime', Drainage.Page.waterRegime);
    doWhileExist('basicRain', Drainage.Page.basicRain);
    doWhileExist('basicPupm', Drainage.Page.basicPupm);
})


