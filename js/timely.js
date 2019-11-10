(function () {
    var html = document.scrollingElement;
    var whtml = html.getBoundingClientRect().width;
    html.style.fontSize = whtml / 15 + "px";


})()
// 视频播放
var html = '';
var vdList = [{
        img: '../images/icons/vd.png',
        title: '西行记',
        href: './play.html'
    },
    {
        img: '../images/icons/vd.png',
        title: '武庚纪',
        href: './play.html'
    },
    {
        img: '../images/icons/vd.png',
        title: '画江湖之不良人',
        href: './play.html'
    },
    {
        img: '../images/icons/vd.png',
        title: '寒武纪',
        href: './play.html'
    },
    {
        img: '../images/icons/vd.png',
        title: '镇魂街',
        href: './play.html'
    }

]
for (var i = 0; i < vdList.length; i++) {
    html += '<li><a class="vd_alink" href=' + vdList[i].href + '><img src=' + vdList[i].img + ' /><span>' + vdList[i].title + '</span></a></li>'
}
$('#vd_list').html(html)

// 开始计时
var m = 0;
var s = 0;
var tm = null;
$('.time-open').click(function () {
    clearInterval(tm);
    $('.m-num').text('00');
    $('.s-num').text('00');
    m = 0;
    s = 0;
    tm = setInterval(function () {
        s += 1;
        if (m < 10) {
            $('.m-num').text('0' + m);
        } else {
            $('.m-num').text(m);
        }
        if (s < 10) {
            $('.s-num').text('0' + s);
        } else {
            $('.s-num').text(s);
        }
        if (s > 12) {
            s = 0;
            m = m + 1
        }
    }, 1000)
})