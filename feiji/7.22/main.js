var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        // ball: 'img/ball.png',
        // block: 'img/block.png',
        // paddle: 'img/paddle.png',
        bg: 'assets/image/background.png',
        player: 'assets/image/hero1.png',
        enemy0: 'assets/image/enemy0.png',
        enemy1: 'assets/image/enemy1.png',
        enemy2: 'assets/image/enemy2.png',   
        bullet: 'assets/image/bullet.png',                 
    }
    var game = GuaGame.instance(50, images, function(g){
        var s = Scene.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
