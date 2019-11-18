var Drainage = {
    Base: {
        setMarke: function () {
            var infoWindow;
            var token = getToken();
            var params = new URLSearchParams();
            params.append('token', token);

            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [121.441071, 31.216294],
                zoom: 10,
                showLabel: false,
                expandZoomRange: true,
            });

            // 创建一个 icon
            var markerIcon = new AMap.Icon({
                size: new AMap.Size(36, 36),
                image: '../images/icons/icon_car.png',
                imageSize: new AMap.Size(36, 36),
            });

            function showInfo(marker, params) {
                console.log(marker, params, marker.getPosition());
                // https://lbs.amap.com/api/javascript-api/reference/infowindow
                // https://lbs.amap.com/api/javascript-api/example/infowindow/default-style-infowindow
                //构建信息窗体中显示的内容
                var info = [];
                info.push("<p><b>鼓楼区建设局龙吸水字母3000</b></p>");
                info.push("<p>车牌：闽A711KA</p>");
                info.push("<p>所属单位：福州市城区水系联排联调中心</p>");
                info.push("<p>定位时间：2019-10-31 14:59</p>");

                infoWindow = new AMap.InfoWindow({
                    anchor: "bottom-center",
                    closeWhenClickMap: true,
                    retainWhenClose: true,
                    offset: new AMap.Pixel(-13, -30),
                    content: info.join("") //使用默认信息窗体框样式，显示信息内容
                });
                infoWindow.open(map, marker.getPosition());
            }
            var markerList = [
                {
                    x: 121.511958,
                    y: 31.239103
                }, {
                    x: 121.428371,
                    y: 31.193829
                }, {
                    x: 121.722616,
                    y: 31.405467
                },
            ]
            markerList.map(function(item){
                var marker = new AMap.Marker({
                    map: map,
                    icon: markerIcon,
                    clickable: true,
                    position: [item.x, item.y],
                    // 以 icon 的 [center bottom] 为原点
                    offset: new AMap.Pixel(-13, -30),
                    direction: 'center', //设置文本标注方位
                    anchor: "center"
                });
                // 添加标记事件
                AMap.event.addListener(marker, "click", function (e) {
                    showInfo(marker, item)
                })
            })
        }
    },
    Page: {
        //车辆
        officeVehicle: function (id) {
            var dmodule = $('#' + id);
            Drainage.Base.setMarke()

        },

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
            dmodule.find('.J_stateBtn').click(function () {
                dmodule.find('.J_statePopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
                dmodule.find('.J_statePopup').hide()
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
        // 一日一查-开始巡河
        checkInfor: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_timeOpen').click(function () {
                if ($('.J_inputValue').val() == '') {
                    layer.open({
                        content: '福州水系调度系统：请先选择河道！',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            })
        },
        //一日一查-选择河道
        riverList: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_listBox').on('click', 'li', function () {
                var self = $(this)
                layer.open({
                    content: `您确认要选择${$(this).find('a').text()}`,
                    btn: ['确认', '取消'],
                    yes: function (index) {
                        location.href = self.attr('data-url')
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
                if (inputVal != '') {
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
                if (inputVal != '') {
                    dmodule.find('.J_maskBox').hide()
                    dmodule.find('.J_msgPopup').hide()
                }

            })
            dmodule.find('.J_listSel').on('click', 'li', function () {
                $(this).addClass("active").siblings().removeClass("active");
                console.log($(this))

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
                if (inputVal != '') {
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

        //管网水情-index
        gwsqIndex: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_gwsqIndex').on('click', '.menu .item', function () {
                $('.J_gwsqIndex .menu .item').attr('class', 'item');
                $(this).addClass('active');
                $('.J_gwsqIndex .tab-main').hide().eq($(this).index()).show();
            })

            //任意
            dmodule.find('.J_gwsqIndex').on('click', '.J_renyiBtn', function () {
                var _html = $('.J_timePopUp').html();
                layer.open({
                    type: 1,
                    className: 'layer-box',
                    content: _html,
                    success: function () {
                        $('.J_startTime').shijian()
                        $('.J_endTime').shijian()
                    }
                })

            })

            dmodule.on('click', '.J_screenBtn', function () {
                var _html = $('.J_choicePopUp').html();
                layer.open({
                    type: 1,
                    className: 'layer-box',
                    content: _html,
                    anim: 'down',
                    style: 'position:fixed; top:0; width:100%; display:table;'
                })
            })

            //站点
            dmodule.on('click', '.J_zhandianBtn', function () {
                var _html = $('.J_zhandianPopUp').html();
                layer.open({
                    type: 1,
                    className: 'layer-box',
                    content: _html,
                    anim: 'down',
                    style: 'position:fixed; top:0; right:0; height: 100%; overflow-y: scroll;'
                })
            })
            $('body').on('click', '.J_zhandianList .item', function () {
                $(this).addClass('active').siblings().removeClass('active')
            })
            $('body').on('input', '.J_zhandianInput', function () {
                if ($(this).val() != '') {
                    $.ajax({
                        type: "get",
                        url: "data.json", //接口
                        data: {

                        },
                        dataType: "json",
                        beforeSend: function () { },
                        success: function (data) {
                            var inforHtml = "";
                            for (var i = 0; i < data.productList.length; i++) {
                                inforHtml += '<li class="item">' + data.productList[i].proName + '</li>';
                            }
                            $('.J_zhandianList').html(inforHtml);
                        }
                    });
                }
            })


            $('body').on('click', '.J_popClose .btn', function () {
                layer.closeAll()
                //确认
                if ($(this).hasClass('active')) {
                    alert('提交') //确认执行事件
                }
            })

            $('body').on('click', '.J_listBox .list .item', function () {
                $(this).addClass('active').siblings().removeClass('active')
            })

            //底部按钮
            dmodule.find('.J_footerBtn').on('click', '.main .item', function () {
                $(this).addClass('active').siblings().removeClass('active')
                //这里写触发事件
            })



        },

        //管网水情-监测信息
        gwsqJcxx: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_gwsqJcxx').on('click', '.menu li', function () {
                $('.J_gwsqJcxx .menu li').attr('class', 'item');
                $(this).addClass('active');
                $('.J_gwsqJcxx .tab-main').hide().eq($(this).index()).show();
            })

            dmodule.on('click', '.J_screenBtn', function () {
                var _html = $('.J_choicePopUp').html();
                layer.open({
                    type: 1,
                    className: 'layer-box',
                    content: _html,
                    anim: 'down',
                    style: 'position:fixed; top:0; width:100%; display:table;'
                })
            })

            $('body').on('click', '.J_popClose .btn', function () {
                layer.closeAll()
                //确认
                if ($(this).hasClass('active')) {
                    alert('提交') //确认执行事件
                }
            })

            $('body').on('click', '.J_listBox .list .item', function () {
                $(this).addClass('active').siblings().removeClass('active')
            })

        },
        // 巡查记录
        patrolRecord: function (id) {
            var dmodule = $('#' + id);
            dmodule.find('.J_report').click(function () {
                dmodule.find('.J_msgPopup').show()
                dmodule.find('.J_maskBox').show()
            })
            dmodule.find('.J_maskBox').click(function () {
                $(this).hide()
                dmodule.find('.J_msgPopup').hide()
            })
            dmodule.find('.J_listSel').on('click', 'p', function () {
                $(this).addClass("active").siblings().removeClass("active");

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
    doWhileExist('screenRyTj', Drainage.Page.screenRyTj);
    doWhileExist('riverList', Drainage.Page.riverList);
    doWhileExist('waterRegime', Drainage.Page.waterRegime);
    doWhileExist('basicRain', Drainage.Page.basicRain);
    doWhileExist('basicPupm', Drainage.Page.basicPupm);
    doWhileExist('checkInfor', Drainage.Page.checkInfor);
    doWhileExist('gwsqIndex', Drainage.Page.gwsqIndex);
    doWhileExist('gwsqJcxx', Drainage.Page.gwsqJcxx);
    doWhileExist('officeVehicle', Drainage.Page.officeVehicle);
    doWhileExist('patrolRecord', Drainage.Page.patrolRecord);
})
