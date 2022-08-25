
import { Dash_TriggerZone } from "dcldash"
import { Scene } from "../congif/core/scene"
import { SceneController } from "../congif/core/sceneController"
import { SceneLocations } from "../congif/enums"
import { movePlayerToVector3 } from "../utils/movePlayerToVector3"


class ExteriorInstance extends Scene {

    private exteriorEntity: Entity = new Entity()

    private exteriorDoor1: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor2: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor3: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor4: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor5: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor6: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor7: Dash_TriggerZone = new Dash_TriggerZone()
    private exteriorDoor8: Dash_TriggerZone = new Dash_TriggerZone()


    constructor() {
        super(SceneLocations.Exterior)
        this.addComponent(new GLTFShape('models/KPMG_exterior_collider.glb'))
        this.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
        this.exteriorEntity.addComponent(new GLTFShape('models/KPMG_exterior_Geo1B.glb'))


        this.exteriorEntity.setParent(this)


        this.exteriorDoorPortal1()
        this.exteriorDoorPortal2()
        this.exteriorDoorPortal3()
        this.exteriorDoorPortal4()
        this.exteriorDoorPortal5()
        this.exteriorDoorPortal6()
        this.exteriorDoorPortal7()
        this.exteriorDoorPortal8()
        

    }
    exteriorDoorPortal1() {
        this.exteriorDoor1.addComponent(new Transform({
            position: new Vector3(37.99, 2.28, 17.73),
            scale: new Vector3(0.5, 5, 3),
        }))
        this.exteriorDoor1.setParent(this)
        this.exteriorDoor1.enable() // this.exteriorDoor1.enableDebug() 
        this.exteriorDoor1.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(37.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }

    }
    exteriorDoorPortal2() {
        this.exteriorDoor2.addComponent(new Transform({
            position: new Vector3(38.89, 2.28, 29.53),
            scale: new Vector3(0.5, 5, 3),
        }))
        this.exteriorDoor2.setParent(this)
        this.exteriorDoor2.enable() // this.exteriorDoor2.enableDebug()
        this.exteriorDoor2.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    exteriorDoorPortal3() {
        this.exteriorDoor3.addComponent(new Transform({
            position: new Vector3(29.42, 2.28, 38.35),
            scale: new Vector3(3, 5, 0.5),
        }))
        this.exteriorDoor3.setParent(this)
        this.exteriorDoor3.enable() // this.exteriorDoor3.enableDebugDebug()
        this.exteriorDoor3.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    exteriorDoorPortal4() {
        this.exteriorDoor4.addComponent(new Transform({
            position: new Vector3(18.60, 2.28, 38.35),
            scale: new Vector3(3, 5, 0.5),
        }))
        this.exteriorDoor4.setParent(this)
        this.exteriorDoor4.enable() // this.exteriorDoor4.enableDebug()
        this.exteriorDoor4.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    exteriorDoorPortal5() {
        this.exteriorDoor5.addComponent(new Transform({
            position: new Vector3(9.72, 2.28, 29.58),
            scale: new Vector3(0.5, 5, 3),
        }))
        this.exteriorDoor5.setParent(this)
        this.exteriorDoor5.enable() // this.exteriorDoor5.enableDebug()
        this.exteriorDoor5.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    exteriorDoorPortal6() {
        this.exteriorDoor6.addComponent(new Transform({
            position: new Vector3(9.81, 2.28, 18.21),
            scale: new Vector3(0.5, 5, 3),
        }))
        this.exteriorDoor6.setParent(this)
        this.exteriorDoor6.enable() // this.exteriorDoor6.enableDebug()
        this.exteriorDoor6.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    
    exteriorDoorPortal7() {
        this.exteriorDoor7.addComponent(new Transform({
            position: new Vector3(17.81,2.28,9.97),
            scale: new Vector3(3, 5, 0.5),
        }))
        this.exteriorDoor7.setParent(this)
        this.exteriorDoor7.enable() // this.exteriorDoor7.enableDebug()
        this.exteriorDoor7.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    exteriorDoorPortal8() {
        this.exteriorDoor8.addComponent(new Transform({
            position: new Vector3(29.46,2.28,9.67),
            scale: new Vector3(3, 5, 0.5),
        }))
        this.exteriorDoor8.setParent(this)
        this.exteriorDoor8.enable() // this.exteriorDoor8.enableDebug()
        this.exteriorDoor8.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(25.94, 0.88, 38.39),
                new Vector3(34.31, 0.88, 34.68),
            )
        }
    }
    enter(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.Interior)
        movePlayerToVector3(position, direction)

    }


}
export const Exterior = new ExteriorInstance()







