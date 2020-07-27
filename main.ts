let ya = 0
let yb = 1
let directionA = 1
let directionB = 1
let directionC = 1
let directionD = 1
let directionE = -1
led.plot(0, ya)
led.plot(1, yb)
let yc = 2
let yd = 3
let ye = 4
led.plot(2, yc)
led.plot(3, yd)
led.plot(4, ye)
basic.forever(function () {
    led.unplot(0, ya)
    led.unplot(1, yb)
    led.unplot(2, yc)
    led.unplot(3, yd)
    led.unplot(4, ye)
    ya += directionA
    yb += directionB
    yc += directionC
    yd += directionD
    ye += directionE
    led.plot(0, ya)
    led.plot(1, yb)
    led.plot(2, yc)
    led.plot(3, yd)
    led.plot(4, ye)
    if (ya >= 4) {
        directionA = -1
    } else if (ya <= 0) {
        directionA = 1
    }
    basic.pause(500)
    if (yb >= 4) {
        directionB = -1
    } else if (yb <= 0) {
        directionB = 1
    }
    if (yc >= 4) {
        directionC = -1
    } else if (yc <= 0) {
        directionC = 1
    }
    if (yd >= 4) {
        directionD = -1
    } else if (yd <= 0) {
        directionD = 1
    }
    if (ye >= 4) {
        directionE = -1
    } else if (ye <= 0) {
        directionE = 1
    }
})
