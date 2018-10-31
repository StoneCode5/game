class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.speed = 10
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
        for
        this.y += this.speed
    }
}