import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { TriggerButton } from "src/utils/triggerButton"
import { Scene } from "../../congif/core/scene"
import { SceneController } from "../../congif/core/sceneController"
import { SceneLocations } from "../../congif/enums"
import { ExitPlane } from "../../utils/exitPlane"
import { movePlayerToVector3 } from "../../utils/movePlayerToVector3"

class KPMGRetailInstance extends Scene {
    //Environment
    private retailSpaceMainGeo = new Entity()
    private retailFurniture = new Entity()
    private furnitureCol = new Entity()
    private retailClickeable = new Entity()
    private flowerDisplay = new Entity()
    //utils
    private exitDoor = new ExitPlane()
    //clothes clickeables
    private click1 = new TriggerButton()
    private click2 = new TriggerButton()
    private click3 = new TriggerButton()
    private click4 = new TriggerButton()
    //music
    private retailmusic = new AudioClip('sounds/Retail_lounge-chill/Light_Sound - Lounge Chill.mp3')
    private sourceMusicRetail = new AudioSource(this.retailmusic)
    private music = new Entity()


    constructor() {
        super(SceneLocations.KPMGRetail)
        this.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_collider.glb'))
        this.retailSpaceMainGeo.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_geo.glb'))
        this.retailFurniture.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_furniture.glb'))
        this.furnitureCol.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_furniture_collider.glb'))
        this.retailClickeable.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_clickable_collider.glb'))
        this.flowerDisplay.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_flower_display.glb'))
        this.music.addComponent(this.sourceMusicRetail)
        this.sourceMusicRetail.playing = true
        this.sourceMusicRetail.volume = 1

        this.retailSpaceMainGeo.setParent(this)
        this.retailFurniture.setParent(this)
        this.furnitureCol.setParent(this)
        this.retailClickeable.setParent(this)
        this.flowerDisplay.setParent(this)
        this.music.setParent(this)


        this.exitDoorPortal()
        this.clickeables()

    }
    clickeable() {

    }
    preload() {
        engine.addEntity(this)
        log('preloaded retailSpace!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Event space Preload Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    exitDoorPortal() {
        [this.exitDoor,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.exitDoor.addComponentOrReplace(new Transform({
            position: new Vector3(77.80, 1.3, 20.17),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(0.000, 90.000, 0.000),
        }))
        this.exitDoor.onCameraEnter = () => this.goInterior(
            new Vector3(17.48, 0.98, 6.15),
            new Vector3(32.15, 1.33, 4.72),
        )



    }
    goInterior(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KPMGInterior)
        movePlayerToVector3(position, direction)
    }
    clickeables() {
        [this.click1, this.click2, this.click3, this.click4
        ].forEach(TriggerButton => {
            TriggerButton.setParent(this)
            TriggerButton.addComponent(Dash_Material.transparent())
            TriggerButton.setMessage("Click Me")
        })
        this.click1.addComponentOrReplace(new Transform({
            position: new Vector3(25.020, 3.380, 22.900),
            scale: new Vector3(1.900, 3.000, 3.200),
            rotation: new Quaternion().setEuler(360.000, 257.000, 1.000),
        }))
        this.click2.addComponentOrReplace(new Transform({
            position: new Vector3(25.020, 3.380, 17.200),
            scale: new Vector3(1.900, 3.000, 3.200),
            rotation: new Quaternion().setEuler(360.000, 257.000, 1.000),
        }))
        this.click3.addComponentOrReplace(new Transform({
            position: new Vector3(39.020, 3.380, 16.900),
            scale: new Vector3(1.900, 3.000, 3.200),
            rotation: new Quaternion().setEuler(360.000, 257.000, 1.000),
        }))
        this.click4.addComponentOrReplace(new Transform({
            position: new Vector3(39.020, 3.380, 22.800),
            scale: new Vector3(1.900, 3.000, 3.200),
            rotation: new Quaternion().setEuler(360.000, 257.000, 1.000),
        }))
        
    }

}

export const KPMGRetail = new KPMGRetailInstance()