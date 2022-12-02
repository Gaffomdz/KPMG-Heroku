import * as ui from '@dcl/ui-scene-utils'
import { SceneController } from 'src/congif/core/sceneController'
import { SceneLocations } from 'src/congif/enums'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'
import { passCall } from 'src/utils/servercall'



export async function passCodePromptR() {
    let code: string
    let noSign = new ui.CenterImage("images/no-sign.png", 1, true, 0, 20, 128, 128, {
        sourceHeight: 512,
        sourceWidth: 512,
        sourceLeft: 0,
        sourceTop: 0,
    })

    let cinemaKeyPadPrompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
    cinemaKeyPadPrompt.canvas = new UICanvas()
    cinemaKeyPadPrompt.addText('ENTER THIS AREA', 0, 150, Color4.White(), 30)
    cinemaKeyPadPrompt.addText('REQUIRES A PASSCODE', 0, 110, Color4.White(), 30)
    cinemaKeyPadPrompt.closeIcon.visible = true
    cinemaKeyPadPrompt.closeIcon.onClick = new OnPointerDown(() => {
        cinemaKeyPadPrompt.hide()
        passwortd1Input.visible = false
    })


    let button1 = cinemaKeyPadPrompt.addButton(
        'Unlock',
        -100,
        -90,
        async () => {
            passwortd1Input.focusedBackground = Color4.Gray()
            // log(passwortd1Input.value)
            // code = passwortd1Input.value
            //let permission = await passCall(code)
            // if (permission == true) {
            //     log("get in")
            // }
            // if (permission == false) {
            //     noSign.show(2)
            //     passwortd1Input.visible = false
            //     cinemaKeyPadPrompt.hide()
            // }
            SceneController.loadScene(SceneLocations.KPMGRetail)
            movePlayerToVector3(new Vector3(71.43, 1.08, 20.44),new Vector3(69.30, 1.08, 20.50),)
            passwortd1Input.visible = false
            cinemaKeyPadPrompt.hide()
        },
        ui.ButtonStyles.ROUNDWHITE
    )
    let button2 = cinemaKeyPadPrompt.addButton('Exit',
        100,
        -90,
        () => {
            passwortd1Input.visible = false
            cinemaKeyPadPrompt.hide()
        },
        ui.ButtonStyles.ROUNDWHITE 
    )
    const canvas = new UICanvas()
    const passwortd1Input = new UIInputText(canvas)
    passwortd1Input.width = "15%"
    passwortd1Input.height = "25px"
    passwortd1Input.vAlign = "center"
    passwortd1Input.hAlign = "center"
    passwortd1Input.fontSize = 15
    passwortd1Input.placeholder = "Enter Passcode"
    passwortd1Input.positionY = "10px"
    passwortd1Input.positionX = "-10px"
    passwortd1Input.isPointerBlocker = true
    passwortd1Input.textWrapping = true
    passwortd1Input.hTextAlign = 'center'
    passwortd1Input.vTextAlign = 'center'
    passwortd1Input.focusedBackground = Color4.Gray()










    passwortd1Input.onBlur = new OnBlur((e) => {
        const day = new UIText(passwortd1Input)
        log('day onblur ' + passwortd1Input.value)
    })

}