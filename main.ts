basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.digitalWritePin(DigitalPin.P2, 180)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
