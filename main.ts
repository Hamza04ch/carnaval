input.onButtonPressed(Button.A, function () {
    basic.showString("game over!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
    music.playMelody("B A G A G F A C5 ", 120)
})
basic.forever(function () {
	
})
