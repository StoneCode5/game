class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.game = game
        this.setup()
        this.setInputs()
        
    }
    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'bg')
        this.player = Player.new(game, this)
        this.player.x = 200
        this.player.y = 600
        this.enemiesNumber = 10
        this.enemy0 = Enemy.new(game, 'enemy0')
        
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.enemy0)

        this.addEnemies()

    }

    setInputs() {
        var s = this
        s.game.registerAction('a', function(){
            console.log('left')
            s.player.moveLeft()
        })
        s.game.registerAction('d', function(){
            s.player.moveRight()
        })
        s.game.registerAction('w', function(){
            console.log('left')
            s.player.moveUp()
        })
        s.game.registerAction('s', function(){
            s.player.moveDown()
        })
        s.game.registerAction('j', function(){
            s.player.fire()
        })
    }

    randomBetween(start, end) {
        var n = Math.random() * (end - start + 1)
        return Math.floor(n + start)
    }

    addEnemies() {
        for (let i = 0; i < this.enemiesNumber; i++) {
            var n = this.randomBetween(0,1)
            var enemy = Enemy.new(this.game, `enemy${n}`)
            this.addElement(enemy)
        }
    }
}

// var Scene = function(game) {
//     var s = {
//         game: game,
//     }
//     // 初始化
//     var paddle = Paddle(game)
//     var ball = Ball(game)

//     var score = 0

//     var blocks = loadLevel(game, 1)

//     
//     game.registerAction('f', function(){
//         ball.fire()
//     })

//     s.draw = function() {
//         // draw 背景
//         game.context.fillStyle = "#554"
//         game.context.fillRect(0, 0, 400, 300)
//         // draw
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         // draw blocks
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.alive) {
//                 game.drawImage(block)
//             }
//         }
//         // draw labels
//         game.context.fillText('分数: ' + score, 10, 290)
//     }
//     s.update = function() {
//         if (window.paused) {
//             return
//         }

//         ball.move()
//         // 判断游戏结束
//         if (ball.y > paddle.y) {
//             // 跳转到 游戏结束 的场景
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//         }
//         // 判断相撞
//         if (paddle.collide(ball)) {
//             // 这里应该调用一个 ball.反弹() 来实现
//             ball.反弹()
//         }
//         // 判断 ball 和 blocks 相撞
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.collide(ball)) {
//                 // log('block 相撞')
//                 block.kill()
//                 ball.反弹()
//                 // 更新分数
//                 score += 100
//             }
//         }
//     }

//     // mouse event
//     var enableDrag = false
//     game.canvas.addEventListener('mousedown', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         log(x, y, event)
//         // 检查是否点中了 ball
//         if (ball.hasPoint(x, y)) {
//             // 设置拖拽状态
//             enableDrag = true
//         }
//     })
//     game.canvas.addEventListener('mousemove', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         // log(x, y, 'move')
//         if (enableDrag) {
//             log(x, y, 'drag')
//             ball.x = x
//             ball.y = y
//         }
//     })
//     game.canvas.addEventListener('mouseup', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         log(x, y, 'up')
//         enableDrag = false
//     })

//     return s
// }
