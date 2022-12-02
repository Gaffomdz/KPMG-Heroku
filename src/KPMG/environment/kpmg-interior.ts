import { NPC, NPCDelay } from "@dcl/npc-scene-utils";
import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash";
import { passCall } from "src/utils/servercall";
import { TriggerButton } from "src/utils/triggerButton";
import { passCodePromptE } from "src/KPMG/Prompts/uievent";
import { Scene } from "../../congif/core/scene"
import { SceneController } from "../../congif/core/sceneController"
import { SceneLocations } from "../../congif/enums"
import { ExitPlane } from "../../utils/exitPlane"
import { movePlayerToVector3 } from "../../utils/movePlayerToVector3"
import { passCodePromptF } from "../Prompts/uifinance";
import { passCodePromptR } from "../Prompts/uiretail";

let doornumber = 0
class KPMGInteriorInstance extends Scene {
    //environment
    private interior1Entity = new Entity()
    private interior2Entity = new Entity()
    private interiorBankDoor = new Entity()
    private interiorDoorFx = new Entity()
    private interiorEventDoor = new Entity()
    private interiorRetailDoor = new Entity()
    //Exit Doors
    private interiorDoor1 = new ExitPlane()
    private interiorDoor2 = new ExitPlane()
    private interiorDoor3 = new ExitPlane()
    private interiorDoor4 = new ExitPlane()
    private interiorDoor5 = new ExitPlane()
    private interiorDoor6 = new ExitPlane()
    private interiorDoor7 = new ExitPlane()
    private interiorDoor8 = new ExitPlane()

    //passcode
    
    private retailpass = new Entity()
    private finanpass = new Entity()
    private eventpass = new Entity()
    //npc
    private npc = new NPC({
        position: new Vector3(8.66, 0.28, 21.31),
        scale: new Vector3(1.000, 1.000, 1.000),
        rotation: new Quaternion().setEuler(0.000, 66.439, 0.000),
    }, 'models/KPMG/npc/kpmg_npc.glb',

        () => {
            this.npc.playAnimation('stash_idle')
            // animation
            const dummyent = new Entity()
            dummyent.addComponent(
                new NPCDelay(0.5, () => {
                    this.npc.playAnimation('stash_talking')
                })
            )
            engine.addEntity(dummyent)

        },
        {
            faceUser: true,
            reactDistance: 2,
            hoverText: 'Talk',
            onWalkAway: () => {
                this.npc.playAnimation('Idle', true, 2)
            }
        }
    )
    constructor() {
        super(SceneLocations.KPMGInterior)
        this.addComponent(new GLTFShape('models/KPMG/interior/KPMG_interior_collider.glb'))
        this.interior1Entity.addComponent(new GLTFShape('models/KPMG/interior/KPMG_interior_geo1.glb'))
        this.interior2Entity.addComponent(new GLTFShape('models/KPMG/interior/KPMG_interior_geo2.glb'))
        this.interiorBankDoor.addComponent(new GLTFShape('models/KPMG/interior/KPMG_Interior_bank_door.glb'))
        this.interiorDoorFx.addComponent(new GLTFShape('models/KPMG/interior/KPMG_Interior_door_fx.glb'))
        this.interiorEventDoor.addComponent(new GLTFShape('models/KPMG/interior/KPMG_Interior_event_door.glb'))
        this.interiorRetailDoor.addComponent(new GLTFShape('models/KPMG/interior/KPMG_Interior_retail_door.glb'))
        this.finanpass.addComponent(new GLTFShape('models/KPMG/interior/KPMG_password_banking_button.glb'))
        this.retailpass.addComponent(new GLTFShape('models/KPMG/interior/KPMG_password_retail_button.glb'))
        this.eventpass.addComponent(new GLTFShape('models/KPMG/interior/KPMG_password_event_room_button.glb'))
        this.retailpass.addComponentOrReplace(new Transform({ position: new Vector3(0.400, 0.000, -0.100),
            scale: new Vector3(1.000, 1.000, 1.000),rotation: new Quaternion().setEuler(0.000, 0.000, 0.000), }))
       
        this.interior1Entity.setParent(this)
        this.interior2Entity.setParent(this)
        this.interiorBankDoor.setParent(this)
        this.interiorDoorFx.setParent(this)
        this.interiorEventDoor.setParent(this)
        this.interiorRetailDoor.setParent(this)
        this.npc.setParent(this)
        this.finanpass.setParent(this)
        this.eventpass.setParent(this)
        this.retailpass.setParent(this)

        this.interiorDoorPortal1()
        this.interiorDoorPortal2()
        this.interiorDoorPortal3()
        this.interiorDoorPortal4()
        this.interiorDoorPortal5()
        this.interiorDoorPortal6()
        this.interiorDoorPortal7()
        this.interiorDoorPortal8()
        this.passButtons()


    }
    preload() {
        engine.addEntity(this)
        log('preloaded Interior!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Interior Preload Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }

    passButtons(){
        this.eventpass.addComponent(new OnPointerDown(() => {
            passCodePromptE()
            
        }))
        this.finanpass.addComponent(new OnPointerDown(() => {
            passCodePromptF()
            
        }))
        this.retailpass.addComponent(new OnPointerDown(() => {
            passCodePromptR()
            
        }))
        
    }
        
        
    interiorDoorPortal1() {
        [this.interiorDoor1,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor1.addComponentOrReplace(new Transform({
            position: new Vector3(24.27, 0.88, 2.53),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 0.000, 2.000),
        }))
        this.interiorDoor1.onCameraEnter = () => this.exit(
            new Vector3(44.50, 1.28, 16.07),
            new Vector3(32.15, 1.33, 4.72),
            doornumber = 1
        )
    }
    interiorDoorPortal2() {
        [this.interiorDoor2,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor2.addComponentOrReplace(new Transform({
            position: new Vector3(7.8, 0.98, 7.79),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 220.000, 1.000),
        }))
        this.interiorDoor2.onCameraEnter = () => this.exit(
            new Vector3(41.44, 1.68, 31.64),
            new Vector3(48.23, 0.88, 34.65),
            doornumber = 2
        )
    }
    interiorDoorPortal3() {
        [this.interiorDoor3,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor3.addComponentOrReplace(new Transform({
            position: new Vector3(1.50, 0.98, 24.02),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 270.000, 1.000),
        }))
        this.interiorDoor3.onCameraEnter = () => this.exit(
            new Vector3(32.00, 1.08, 2.29),
            new Vector3(32.15, 1.33, 4.72),
            doornumber = 3
        )
    }
    interiorDoorPortal4() {
        [this.interiorDoor4,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor4.addComponentOrReplace(new Transform({
            position: new Vector3(8.32, 0.98, 39.5),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 310.000, 1.000),
        }))
        this.interiorDoor4.onCameraEnter = () => this.exit(
            new Vector3(32.00, 1.08, 2.29),
            new Vector3(32.15, 1.33, 4.72),
            doornumber = 4
        )
    }
    interiorDoorPortal5() {
        [this.interiorDoor5,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor5.addComponentOrReplace(new Transform({
            position: new Vector3(23.87, 0.98, 46.29),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 360.000, 1.000),
        }))
        this.interiorDoor5.onCameraEnter = () => this.exit(
            new Vector3(44.58, 1.28, 32.50),
            new Vector3(44.58, 1.28, 32.50),
            doornumber = 5
        )
    }
    interiorDoorPortal6() {
        [this.interiorDoor6,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor6.addComponentOrReplace(new Transform({
            position: new Vector3(39.8, 0.98, 39.56),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 50.000, 1.000),
        }))
        this.interiorDoor6.onCameraEnter = () => this.exit(
            new Vector3(32.00, 1.08, 2.29),
            new Vector3(32.15, 1.33, 4.72),
            doornumber = 6
        )
    }
    interiorDoorPortal7() {
        [this.interiorDoor7,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor7.addComponentOrReplace(new Transform({
            position: new Vector3(46.50, 0.98, 23.98),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 82.000, 1.000),
        }))
        this.interiorDoor7.onCameraEnter = () => this.exit(
            new Vector3(32.00, 1.08, 2.29),
            new Vector3(32.15, 1.33, 4.72),
            doornumber = 7
        )
    }
    interiorDoorPortal8() {
        [this.interiorDoor8,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.interiorDoor8.addComponentOrReplace(new Transform({
            position: new Vector3(39, 0.98, 8.6),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(2.000, 130.000, 1.000),
        }))
        this.interiorDoor8.onCameraEnter = () => this.exit(
            new Vector3(32.00, 1.08, 2.29),
            new Vector3(32.15, 1.33, 4.72),
            doornumber = 8
        ), log('puerta 8 despues de la coma')


    }
    exit(position: Vector3, direction: Vector3, doornumber: number) {
        SceneController.loadScene(SceneLocations.Exterior)
        movePlayerToVector3(position, direction)
        log(doornumber, ' es la puerta')
    }
    }


export const KPMGInterior = new KPMGInteriorInstance()














