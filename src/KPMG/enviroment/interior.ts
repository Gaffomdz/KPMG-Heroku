import { Dash_TriggerZone } from "dcldash"
import { Scene } from "../congif/core/scene"
import { SceneController } from "../congif/core/sceneController"
import { SceneLocations } from "../congif/enums"
import { movePlayerToVector3 } from "../utils/movePlayerToVector3"

class InteriorInstance extends Scene {

    private interior1Entity: Entity = new Entity()
    private interior2Entity: Entity = new Entity()

    private interiorDoor1: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor2: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor3: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor4: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor5: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor6: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor7: Dash_TriggerZone = new Dash_TriggerZone()
    private interiorDoor8: Dash_TriggerZone = new Dash_TriggerZone()



    constructor() {
        super(SceneLocations.Interior)
        this.addComponent(new GLTFShape('models/KPMG_interior_collider.glb'))
        this.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
        this.interior1Entity.addComponent(new GLTFShape('models/KPMG_interior_geo1.glb'))
        this.interior2Entity.addComponent(new GLTFShape('models/KPMG_interior_geo2.glb'))


        this.interior1Entity.setParent(this)
        this.interior2Entity.setParent(this)

        this.interiorDoorPortal1()
        this.interiorDoorPortal2()
        this.interiorDoorPortal3()
        this.interiorDoorPortal4()
        this.interiorDoorPortal5()
        this.interiorDoorPortal6()
        this.interiorDoorPortal7()
        this.interiorDoorPortal8()
    }
    interiorDoorPortal1() {
        this.interiorDoor1.addComponent(new Transform({
            position: new Vector3(24.27, 0.88, 2.53),
            scale: new Vector3(3.8, 5, 0.5),
            rotation: new Quaternion(0, 0, 0),
        }))
        this.interiorDoor1.setParent(this)
        this.interiorDoor1.enable()
        this.interiorDoor1.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal2() {
        this.interiorDoor2.addComponent(new Transform({
            position: new Vector3(8.00, 0.98, 8.19),
            scale: new Vector3(3.9, 5, 0.5),
            rotation: new Quaternion(0, 0.5, 0),
        }))
        this.interiorDoor2.setParent(this)
        this.interiorDoor2.enable()
        this.interiorDoor2.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal3() {
        this.interiorDoor3.addComponent(new Transform({
            position: new Vector3(1.52, 0.98, 24.31),
            scale: new Vector3(0.5, 5, 4.5),
            rotation: new Quaternion(0, 0, 0),
        }))
        this.interiorDoor3.setParent(this)
        this.interiorDoor3.enable()
        this.interiorDoor3.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal4() {
        this.interiorDoor4.addComponent(new Transform({
            position: new Vector3(7.99, 0.98, 39.82),
            scale: new Vector3(1, 5, 4.5),
            rotation: new Quaternion(0, 0.5000, 0),
        }))
        this.interiorDoor4.setParent(this)
        this.interiorDoor4.enable()
        this.interiorDoor4.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal5() {
        this.interiorDoor5.addComponent(new Transform({
            position: new Vector3(24.37, 0.98, 46.49),
            scale: new Vector3(1, 5, 4.5),
            rotation: new Quaternion(0, 1, 0),
        }))
        this.interiorDoor5.setParent(this)
        this.interiorDoor5.enable()
        this.interiorDoor5.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal6() {
        this.interiorDoor6.addComponent(new Transform({
            position: new Vector3(39.85, 0.98, 40.08),
            scale: new Vector3(1, 5, 4.5),
            rotation: new Quaternion(0, 1.5, 0),
        }))
        this.interiorDoor6.setParent(this)
        this.interiorDoor6.enable()
        this.interiorDoor6.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal7() {
        this.interiorDoor7.addComponent(new Transform({
            position: new Vector3(46.47,0.98,23.67),
            scale: new Vector3(1, 5, 4.5),
            rotation: new Quaternion(0, 0, 0),
        }))
        this.interiorDoor7.setParent(this)
        this.interiorDoor7.enable()
        this.interiorDoor7.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    interiorDoorPortal8() {
        this.interiorDoor8.addComponent(new Transform({
            position: new Vector3(40,0.98,7.53),
            scale: new Vector3(1, 5, 4.5),
            rotation: new Quaternion(0, 0.5, 0),
        }))
        this.interiorDoor8.setParent(this)
        this.interiorDoor8.enable()
        this.interiorDoor8.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00, 1.08, 2.29),
                new Vector3(32.15, 1.33, 4.72),
            )
        }

    }
    enter(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.Exterior)
        movePlayerToVector3(position, direction)
    }

}

export const Interior = new InteriorInstance()










