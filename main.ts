function RtoG () {
    for (let index = 0; index < 1023; index++) {
        pins.analogWritePin(AnalogPin.P0, r)
        pins.analogWritePin(AnalogPin.P1, g)
        pins.analogWritePin(AnalogPin.P2, b)
        basic.pause(1)
        r += -1
        g += 1
    }
}
function BtoR () {
    for (let index = 0; index < 1023; index++) {
        pins.analogWritePin(AnalogPin.P0, r)
        pins.analogWritePin(AnalogPin.P1, g)
        pins.analogWritePin(AnalogPin.P2, b)
        basic.pause(1)
        b += -1
        r += 1
    }
}
function GtoB () {
    for (let index = 0; index < 1023; index++) {
        pins.analogWritePin(AnalogPin.P0, r)
        pins.analogWritePin(AnalogPin.P1, g)
        pins.analogWritePin(AnalogPin.P2, b)
        basic.pause(1)
        g += -1
        b += 1
    }
}
let b = 0
let g = 0
let r = 0
r = 1023
g = 0
b = 0
basic.forever(function () {
    RtoG()
    basic.pause(500)
    GtoB()
    basic.pause(500)
    BtoR()
    basic.pause(500)
})
