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
let starship: game.LedSprite = null
let motor = 0
motor = 0
starship = game.createSprite(0, 2)
basic.forever(function () {
    if (motor == 1) {
        starship.move(1)
        starship.ifOnEdgeBounce()
        basic.pause(200)
    }
})
