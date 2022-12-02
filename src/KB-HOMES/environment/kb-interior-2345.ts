import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"


class KBInterior2345Instance extends Scene {
    //environment
    private mainGeo = new Entity()
    private mainGeo2 = new Entity()
    private furniture = new Entity()
    private furniture2 = new Entity()
    private yard = new Entity()
    private collider2 = new Entity()
    //utils
    private kbInterior2345ExitDoor = new ExitPlane()
    constructor() {
        super(SceneLocations.KBInterior2345)
        this.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_1_collider.glb"))
        this.mainGeo.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_1_MainGeo.glb"))
        this.mainGeo2.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_2_MainGeo.glb"))
        this.collider2.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_2_collider.glb"))
        this.furniture.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_1_furniture.glb"))
        this.furniture2.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_2_furniture.glb"))
        this.yard.addComponent(new GLTFShape("models/KB-HOMES/interior-2345/KBH_Interior_model2345_yard.glb"))

        this.mainGeo.setParent(this)
        this.collider2.setParent(this)
        this.furniture.setParent(this)
        this.mainGeo2.setParent(this)
        this.furniture2.setParent(this)
        this.yard.setParent(this)
        this.createExitDoor()
    }
    preload() {
        engine.addEntity(this)
        log('kb interior 2345 preloaded')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('kb interior 2345 Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    createExitDoor() {
        [this.kbInterior2345ExitDoor].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.kbInterior2345ExitDoor.addComponentOrReplace(new Transform({
            position: new Vector3(32.560, 1.180, 40.360),
            scale: new Vector3(3.400, 1.400, 2.000),
            rotation: new Quaternion().setEuler(356.000, 181.000, 92.000),
        }))
        this.kbInterior2345ExitDoor.onCameraEnter = () => this.exitToCulDeSac(
            new Vector3(31.94,0.93,20.66),
            new Vector3(31.73,0.88,26.06),
        )
        
    }
    exitToCulDeSac(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBCulDeSac)
        movePlayerToVector3(position, direction)
    }

}

export const KBInterior2345 = new KBInterior2345Instance()