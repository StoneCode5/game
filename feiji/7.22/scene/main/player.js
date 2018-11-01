class Player extends GuaImage {
    constructor(game, scene) {
        super(game, 'player')
        this.speed = 10
        this.scene = scene
        this.game = game
    }

    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        var b = Bullet.new(this.game)
        b.x = this.x + this.w / 2
        b.y = this.y
        this.scene.addElement(b)
    }
}

class Enemy extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = this.randomBetween(4, 8)
        this.x = this.randomBetween(0,400)
        this.y = this.randomBetween(0,200)
    }
    update() {
        this.y += this.speed
        if (this.y > 800) {
            this.setup()
        }
    }

    randomBetween(start, end) {
        var n = Math.random() * (end - start + 1)
        return Math.floor(n + start)
    }

}

class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 9
    }
    update() {
        this.y -= this.speed
    }

    randomBetween(start, end) {
        var n = Math.random() * (end - start + 1)
        return Math.floor(n + start)
    }

}