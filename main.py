motor.stepperTurnDual_42(motor.Stepper.STE1, motor.Dir.CW, 0, motor.Dir.CW, 0)

def on_forever():
    pass
basic.forever(on_forever)
