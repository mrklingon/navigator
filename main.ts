input.onButtonPressed(Button.A, function () {
    starship.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.AB, function () {
    motor += 1
    if (motor == 2) {
        motor = 0
    }
})
input.onButtonPressed(Button.B, function () {
    starship.turn(Direction.Left, 45)
})
let asteroid: game.LedSprite = null
let starship: game.LedSprite = null
let motor = 0
motor = 0
starship = game.createSprite(0, 2)
game.setLife(5)
basic.forever(function () {
    if (motor == 1) {
        starship.move(1)
        if (starship.isTouchingEdge()) {
            game.addScore(1)
            music.playTone(131, music.beat(BeatFraction.Sixteenth))
        }
        starship.ifOnEdgeBounce()
        basic.pause(200)
    }
})
basic.forever(function () {
    basic.pause(randint(1, 6) * 500)
    asteroid = game.createSprite(4, randint(0, 4))
    asteroid.turn(Direction.Right, 180)
    for (let index = 0; index <= 4; index++) {
        asteroid.move(1)
        if (asteroid.isTouching(starship)) {
            game.removeLife(1)
            music.playTone(988, music.beat(BeatFraction.Sixteenth))
        }
        basic.pause(100)
    }
    asteroid.delete()
})
