(function () {
    var html = document.scrollingElement;
    var whtml = html.getBoundingClientRect().width;
    html.style.fontSize = whtml / 15 + "px";
})()

//    bar
// $('.bar-list li').click(function () {
//     var b = $(this).attr('data-id');
//     switch (Number(b)) {
//         case 0:
//             $('.move_btn').show();
//             $('.one_check').hide();
//             break;
//         case 2:
//             $('.move_btn').hide();
//             $('.one_check').show();
//             break;
//     }
//     $('.bar-list li span').removeClass('bar_active');
//     $('.bar-list li img').map(function (index) {
//         $('.bar-list li img').eq(index).attr('src', $('.bar-list li img').eq(index).attr('data-src'))
//     })

//     $(this).find('img').attr('src', $(this).find('img').attr('data-srcActive'))
//     $(this).find('span').addClass('bar_active')
// })

var map = new AMap.Map('container', {
    resizeEnable: true,
    center: [121.441071, 31.216294],
    zoom: 4,
    showLabel: false,
    expandZoomRange: true,
});
AMap.plugin('AMap.ToolBar', function () {
    var toolbar = new AMap.ToolBar();
    map.addControl(toolbar)
})

//   切换
var time_list = [{
        zoom: 8,
        center: [121.511958, 31.239103]
    },
    {
        zoom: 15,
        center: [121.428371, 31.193829]
    },
    {
        zoom: 14,
        center: [121.722616, 31.405467]
    },
    {
        zoom: 14,
        center: [121.472815, 31.412247]
    },
    {
        zoom: 15,
        center: [121.386865, 31.2834]
    },
    {
        zoom: 15,
        center: [121.418485, 31.202417]
    },
    {
        zoom: 14,
        center: [121.42916286040499, 31.17883077437713]
    },
    {
        zoom: 14,
        center: [121.533468, 31.389439]
    }
]
$('.timely_list li').click(function () {
    logMapinfo();
    $('.timely_list li').removeClass('timely_active');
    $(this).addClass('timely_active');
    $('.rain').removeClass('state_show');
    $('.rain').eq($(this).data('id')).addClass('state_show')
    let zoom = time_list[$(this).data('id')].zoom;
    let center = time_list[$(this).data('id')].center;
    map.setZoomAndCenter(zoom, center);

})
//   -------


//   初始化信息窗体

var cluster, markers = [];
for (var i = 0; i < points.length; i += 1) {
    markers.push(new AMap.Marker({
        position: points[i]['lnglat'],
        content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
        offset: new AMap.Pixel(-15, -15)
    }))
}
// 聚合
var count = markers.length;
var _renderClusterMarker = function (context) {
    var factor = Math.pow(context.count / count, 1 / 18);
    var div = document.createElement('div');
    var Hue = 180 - factor * 180;
    var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
    var fontColor = 'hsla(' + Hue + ',100%,20%,1)';
    var borderColor = 'hsla(' + Hue + ',100%,40%,1)';
    var shadowColor = 'hsla(' + Hue + ',100%,50%,1)';
    div.style.backgroundColor = bgColor;
    var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
    div.style.w3idth = div.style.height = size + 'px';
    div.style.border = 'solid 1px ' + borderColor;
    div.style.borderRadius = size / 2 + 'px';
    div.style.boxShadow = '0 0 1px ' + shadowColor;
    div.innerHTML = context.count;
    div.style.lineHeight = size + 'px';
    div.style.color = fontColor;
    div.style.fontSize = '14px';
    div.style.textAlign = 'center';
    context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
    context.marker.setContent(div)
};
cluster = new AMap.MarkerClusterer(map, markers, {
    gridSize: 80
});
//   信息窗体显示
var outZoom = map.getZoom();

var logMapinfo = function () {
    var markers = [];
    var zoom = map.getZoom(); //获取当前地图级别
    console.log(zoom, '我是里面的')
    if (zoom < 14) {
        markers = [

        ]
    } else {
        //   标记
        markers = [{
                position: [121.722616, 31.405467],
                content: "<div class='info'><div class='title_div'><span>长兴岛郊野公园</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/small.png' alt='小雨'></div>"
            },
            {
                position: [121.521108, 31.46795],
                content: "<div class='info'><div class='title_div'><span>光明头</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/small.png' alt='小雨'></div>"
            },
            {
                position: [121.533468, 31.389439],
                content: "<a href='./monitoring/video.html' class='title_link'><div class='info'><div class='title_div'><span>电视塔</span><span>视频资源： 20个</span></div><div class='arrow'></div><img src='./images/icons/jiankong.png' alt='监控'></div></a>"
            },
            {
                position: [121.511958, 31.239103],
                content: "<div class='info'><div class='title_div'><span>东方明珠</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/tobig.png' alt='暴雨'></div>"
            },
            {
                position: [121.431204, 31.243453],
                content: "<div class='info'><div class='title_div'><span>外滩18</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/small.png' alt='小雨'></div>"
            },
            {
                position: [121.428371, 31.193829],
                content: "<div class='info'><div class='title_div'><span>上海司法厅</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/small.png' alt='小雨'></div>"
            },
            {
                position: [121.472815, 31.412247],
                content: "<div class='info'><div class='title_div'><span>上海城建学院</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/small.png' alt='小雨'></div>"
            },
            {
                position: [121.386865, 31.2834],
                content: "<div class='info'><div class='title_div'><span>桃浦大楼</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/small.png' alt='小雨'></div>"
            },
            {
                position: [121.418485, 31.202417],
                content: "<a href='../video.html' class='title_link'><div class='info'><div class='title_div'><span>宋园路</span><span>当前水位： 0.0m</span><span>2019-10-21 16:40</span></div><div class='arrow'></div><img src='./images/icons/tobig.png' alt='小雨'></div></a>"
            },
        ];

        markers.map(function (marker) {
            new AMap.Marker({
                map: map,
                icon: marker.icon,
                position: [marker.position[0], marker.position[1]],
                offset: new AMap.Pixel(-13, -30),
                content: marker.content, //设置文本标注内容
                direction: 'right' //设置文本标注方位
            });
        });
    }
};
logMapinfo();

function mapZoom() {
    logMapinfo();

}
map.on('zoomchange', mapZoom);