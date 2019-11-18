function getQueryVariable (variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }

    return false;
}

function formatData (date, type) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = (m < 10 ? '0' + m : m);
    var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() <
        10 ? '0' + date.getHours() : date.getHours();
    var f = date.getMinutes() < 10 ? '0' + date.getMinutes() :
        date.getMinutes();
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    switch (type) {
        case 'y':
            return y;
        case 'm':
            return y + '-' + m;
        case 'd':
            return y + '-' + m + '-' + d;
        case 'h':
            return y + '-' + m + '-' + d + ' ' + h;
        case 'f':
            return y + '-' + m + '-' + d + ' ' + h + ':' + f;
        case 's':
            return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s;
        case 'md':
            return m + '-' + d + ' ' + h + ':' + f;
        default:
            return '';
    }
}


function setToken (token) {
    window.localStorage.setItem("token", token);
}

function getToken () {
    var _token = getQueryVariable("token");
    console.log('get url token:', _token);
    if (!_token) {
        _token = window.localStorage.getItem("token");
    } else {
        setToken(_token);
    }
    console.log('return  token:', _token);
    return _token;
}

function removeToken () {
    return window.localStorage.removeItem("token");
}

$(function () {
    axios.defaults.baseURL = 'http://114.116.5.183:12332/';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
});