let y: number[] = []
let lux = [255, 150, 50]
for (let x = 0; x <= 4; x++) {
    y.push(0)
}
let z = 150
let a = input.runningTime()
while (true) {
    if (input.runningTime() - a >= z) {
        a = input.runningTime()
        for (let b = 0; b <= 4; b++) {
            for (let c = 0; c <= y[b]; c++) {
                if (b <= 4) {
                    led.plotBrightness(b, y[b] - c, lux[c])
                } else {
                    led.plotBrightness(b, y[b] - c, 0)
                }
            }
            if (y[b] <= 8) {
                y[b] = y[b] + 1
            } else if (randint(0, 101) > 80) {
                y[b] = 0
            }
        }
    } else {
        basic.pause(z - (input.runningTime() - a))
    }
}
basic.forever(function () {
	
})
