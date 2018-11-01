class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            this.game.drawImage(element)
        }
    }
    addElement(guaImage) {
        this.elements.push(guaImage)
    }
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            element.update()
        }
    }
}
