def RtoG():
    global r, g
    for index in range(1023):
        pins.analog_write_pin(AnalogPin.P0, r)
        pins.analog_write_pin(AnalogPin.P1, g)
        pins.analog_write_pin(AnalogPin.P2, b)
        basic.pause(1)
        r += -1
        g += 1
def BtoR():
    global b, r
    for index2 in range(1023):
        pins.analog_write_pin(AnalogPin.P0, r)
        pins.analog_write_pin(AnalogPin.P1, g)
        pins.analog_write_pin(AnalogPin.P2, b)
        basic.pause(1)
        b += -1
        r += 1
def GtoB():
    global g, b
    for index3 in range(1023):
        pins.analog_write_pin(AnalogPin.P0, r)
        pins.analog_write_pin(AnalogPin.P1, g)
        pins.analog_write_pin(AnalogPin.P2, b)
        basic.pause(1)
        g += -1
        b += 1
b = 0
g = 0
r = 0
r = 1023
g = 0
b = 0

def on_forever():
    RtoG()
    basic.pause(500)
    GtoB()
    basic.pause(500)
    BtoR()
    basic.pause(500)
basic.forever(on_forever)
