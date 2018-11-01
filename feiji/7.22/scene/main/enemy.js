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