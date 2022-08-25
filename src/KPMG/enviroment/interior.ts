import { Dash_TriggerZone } from "dcldash"
import { Scene } from "../congif/core/scene"
import { SceneController } from "../congif/core/sceneController"
import { SceneLocations } from "../congif/enums"
import { movePlayerToVector3 } from "../utils/movePlayerToVector3"

class InteriorInstance extends Scene {

    private interior1Entity: Entity = new Entity()
    private interior2Entity: Entity = new Entity()
    private interiorXport: Entity = new Entity()

    private interiorDoor: Dash_TriggerZone = new Dash_TriggerZone()



    constructor() {
        super(SceneLocations.Interior)
        this.addComponent(new GLTFShape('models/KPMG_interior_collider.glb'))
        this.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
        this.interior1Entity.addComponent(new GLTFShape('models/KPMG_interior_geo1.glb'))
        this.interior2Entity.addComponent(new GLTFShape('models/KPMG_interior_geo2.glb'))
        this.interiorXport.addComponent(new GLTFShape('models/KPMG_interior_Xportcollider.glb'))


        this.interior1Entity.setParent(this)
        this.interior2Entity.setParent(this)
        this.interiorXport.setParent(this)

        this.interiorDoorPortal()
    }
    interiorDoorPortal() {
        this.interiorDoor.addComponent(new Transform({
            position: new Vector3(24.27, 0.88, 2.53),
            scale: new Vector3(3.5, 5, 0.5),
        }))
        this.interiorDoor.setParent(this)
        this.interiorDoor.enableDebug() //this.interiorDoor.enable()
        this.interiorDoor.onEnter = () => {
            log('User has entered the zone')
            this.enter(
                new Vector3(32.00,1.08,2.29),
                new Vector3(31.22,1.88,40.60),
            )
        }

    }
    enter(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.Exterior)
        movePlayerToVector3(position, direction)
    }

}

export const Interior = new InteriorInstance()














