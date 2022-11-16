import { Dash_Material, Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"


class KBInterior1860Instance extends Scene {
    //environment
    private kbInteriorGeo = new Entity()
    //utils
    private triggerDoor1 = new ExitPlane()
    constructor() {
        super(SceneLocations.KBInterior1860)
        this.kbInteriorGeo.addComponent(new GLTFShape('models/KB-HOMES/interior/KBH_1860_interior_main.glb'))
        this.kbInteriorGeo.setParent(this)
        

        this.triggerPortals()

    }
    triggerPortals(){
        [this.triggerDoor1, 
            ].forEach(ExitPlane => {
                ExitPlane.setParent(this)
                ExitPlane.addComponent(Dash_Material.transparent())
            })
    
            this.triggerDoor1.addComponentOrReplace(new Transform({
                position: new Vector3(31.80,1.68,77.42),
                scale: new Vector3(4.000, 4.000, 5.000),
                rotation: new Quaternion().setEuler(1.000, 100.000, 2.000),
            }))
            this.triggerDoor1.onCameraEnter = () => this.enterExterior(
                new Vector3(24.73, 0.98, 40.71),
                new Vector3(24.22, 0.98, 39.74),
            )
    }
    enterExterior(position: Vector3, direction: Vector3){
        SceneController.loadScene(SceneLocations.Exterior)
        movePlayerToVector3(position, direction)
    }
    
    preload() {
        engine.addEntity(this)
        log('kb interior preloaded')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('kb interior Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }

  
}

export const KBInterior1860= new KBInterior1860Instance()