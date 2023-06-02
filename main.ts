function 左回転 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 128)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 128)
}
function 後退 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 128)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 128)
}
function 前進 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 128)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 128)
}
function 右回転 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 128)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 128)
}
motor.motorStopAll()
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    前進()
    basic.pause(1000)
    右回転()
    basic.pause(2000)
    左回転()
    basic.pause(2000)
    後退()
    basic.pause(1000)
    motor.motorStopAll()
    basic.showIcon(IconNames.No)
    basic.pause(5000)
})
