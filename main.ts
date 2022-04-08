grove.onGesture(GroveGesture.Right, function () {
    basic.showIcon(IconNames.Sad)
    music.playTone(147, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showIcon(IconNames.Happy)
    music.playTone(698, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
grove.initGesture()
basic.forever(function () {
	
})
