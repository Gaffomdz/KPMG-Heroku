import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"


class KBCulDeSacInstance extends Scene {

    //environment
    private kBCulDeSacGeo = new Entity()
    //utils
    private triggerDoor1 = new ExitPlane()
    private triggerDoor1860 = new ExitPlane()

    constructor() {
        super(SceneLocations.KBCulDeSac)

        this.kBCulDeSacGeo.addComponent(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH-Cul-de-sac.glb'))

        this.kBCulDeSacGeo.setParent(this)

        this.triggerDoors1860()
        this.triggerPortals()

    }
    triggerPortals(){
        [this.triggerDoor1, 
            ].forEach(ExitPlane => {
                ExitPlane.setParent(this)
                ExitPlane.addComponent(Dash_Material.transparent())
            })
    
            this.triggerDoor1.addComponentOrReplace(new Transform({
                position: new Vector3(18.50,1.68,50.90),
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
        log('preloaded culdesac!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('cul de sac removed')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    triggerDoors1860() {
        [this.triggerDoor1860].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1860.addComponentOrReplace(new Transform({
            position: new Vector3(49.200, 1.280, 23.820),
            scale: new Vector3(1.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 311.000, 2.000),
        }))
        this.triggerDoor1860.onCameraEnter = () => this.enter1860(
            new Vector3(22.16,0.88,29.58),
            new Vector3(21.80,0.88,26.03),
        )
        Dash_Tweaker(this.triggerDoor1860)
    }
    enter1860(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBInterior1860)
        movePlayerToVector3(position, direction)
    }


}

export const KBCulDeSac = new KBCulDeSacInstance()