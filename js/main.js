$(function () {
    var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [121.441071, 31.216294],
        zoom: 16,
        showLabel: false,
        expandZoomRange: true,
    });

})

$('.J_screen').click(function () {
    layer.open({
        className: 'screen-popup',
        content: '内容'
    })
})