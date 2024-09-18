input.onButtonPressed(Button.A, function () {
    Carro_Nuevo = Carro_Nuevo + 1
    basic.showNumber(Carro_Nuevo)
    if (Carro_Nuevo > 10) {
        Carro_Nuevo = 10
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Carro_Nuevo > 0) {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        Carro_Nuevo = Carro_Nuevo - 1
        basic.showNumber(Carro_Nuevo)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
let Carro_Nuevo = 0
Carro_Nuevo = 0
basic.forever(function () {
	
})
