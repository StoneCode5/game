var log = function () {
    console.log.apply(console, arguments)
}

var e = function (sel) {
    return document.querySelector(sel)
}

var removeAll = function (sel) {
    var tags = document.querySelectorAll(sel)
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        tag.remove()
    }
}

var appendHtml = function (element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function (element, eventName, callback) {
    element.addEventListener(eventName, callback)
}


var bindAll = function (selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// 加载图片 返回图片对象
function loadImgFromPath(path) {
    var img = new Image()
    img.src = path
    return img
}

// 返回一个布尔值
function isCollide (obj1, obj2) {
    if (obj2.y + obj2.image.height >= obj1.y) {
        if (obj2.x > obj1.x && obj2.x < obj1.x + obj1.image.width) {
            log('相撞')
            return true
        }
    }
    return false
}

// 碰撞检测
var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}