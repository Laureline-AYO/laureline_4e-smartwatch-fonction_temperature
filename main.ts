function Celsius () {
    basic.pause(500)
    basic.showNumber(input.temperature())
    basic.pause(500)
    if (input.temperature() < 10) {
        basic.showString("Couvrez-vous !")
    }
    if (input.temperature() >= 10 && input.temperature() <= 25) {
        basic.showString("Bonne journee !")
    }
    if (input.temperature() > 25) {
        basic.showString("Hydratez-vous !")
    }
}
basic.forever(function () {
    Celsius()
})
