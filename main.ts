let janaria = game.createSprite(4, 4)
let pacman = game.createSprite(4, 2)
let mamua = game.createSprite(2, 2)
janaria.set(LedSpriteProperty.Brightness, 100)
mamua.set(LedSpriteProperty.Brightness, 100)
mamua.set(LedSpriteProperty.Blink, 100)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        pacman.move(1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < 200) {
        pacman.move(-1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < 200) {
        pacman.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
    }
    if (pacman.isTouching(mamua)) {
        game.gameOver()
    }
})
