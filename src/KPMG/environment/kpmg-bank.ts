import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { TriggerPrompts } from "src/utils/triggerPrompts"
import { Scene } from "../../congif/core/scene"
import { SceneController } from "../../congif/core/sceneController"
import { SceneLocations } from "../../congif/enums"
import { ExitPlane } from "../../utils/exitPlane"
import { movePlayerToVector3 } from "../../utils/movePlayerToVector3"
import { ButtonNext } from "../Articles/Buttons/buttonNext"
import { ButtonPrev } from "../Articles/Buttons/buttonPrev"
import { ButtonStop } from "../Articles/Buttons/buttonStop"
import { dynamicArticle1floor2 } from "../Articles/DynamicArticles/dynamicArticle"
import { article1page1, article1page3 } from "../Articles/Resources/article1"
import { article1cover } from "../Articles/Resources/covers"

class KPMGBankInstance extends Scene {
    [x: string]: any
    //environment
    private bankMainGeo = new Entity()
    private bankExitDoor = new Entity()
    private bankAnimatedObject = new Entity()
    private bankFurniture = new Entity()
    private bankFurnitureCols = new Entity()
    //articles
    private firstarticle = new dynamicArticle1floor2()
    public articlenum = 0
    public pagenum = 0
    private prompt1 = new TriggerPrompts()
    private prompt2 = new TriggerPrompts()
    private prompt3 = new TriggerPrompts()
    private prompt4 = new TriggerPrompts()
    //buttons
    private a1bs = new ButtonStop()
    private a1bn = new ButtonNext()
    private a1bp = new ButtonPrev()
    //music
    private bankmusic = new AudioClip('sounds/Financial_lounge-relax/Light_Sound - Lounge Relax.mp3')
    private sourceMusicBank = new AudioSource(this.bankmusic)
    private music = new Entity()


    //utils
    private exitDoor = new ExitPlane()



    constructor() {
        super(SceneLocations.KPMGBank)
        this.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_collider_11.glb'))
        this.bankMainGeo.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_main_geo_6.glb'))
        this.bankExitDoor.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_exit_door_1.glb'))
        this.bankAnimatedObject.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_animated_object_1.glb'))
        this.bankFurniture.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_decor_main_geo_1.glb'))
        this.bankFurnitureCols.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_decor_colliders_1.glb'))
        this.music.addComponent(this.sourceMusicBank)
        this.sourceMusicBank.playing = true
        this.sourceMusicBank.volume = 1


        this.bankMainGeo.setParent(this)
        this.bankExitDoor.setParent(this)
        this.bankAnimatedObject.setParent(this)
        this.bankFurniture.setParent(this)
        this.bankFurnitureCols.setParent(this)
        this.music.setParent(this)

        this.exitDoorPortal()
        this.fixReel()
        this.createTriggerPrompts()
    }
    preload() {
        engine.addEntity(this)
        log('preloaded bank!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Event bank Removed.')
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
            position: new Vector3(16.26, 2.30, 77.53),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(360.000, 212.000, 1.000),
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
    fixReel() {
        this.firstarticle.page1.setParent(this)
        this.firstarticle.page2.setParent(this)
        this.firstarticle.page3.setParent(this)
        this.firstarticle.page4.setParent(this)
        this.firstarticle.page5.setParent(this)
        this.firstarticle.page6.setParent(this)
        this.firstarticle.page7.setParent(this)
        //this.firstarticle.page8.setParent(this)

        engine.removeEntity(this.firstarticle.page1)
        engine.removeEntity(this.firstarticle.page2)
        engine.removeEntity(this.firstarticle.page3)
        engine.removeEntity(this.firstarticle.page4)
        engine.removeEntity(this.firstarticle.page5)
        engine.removeEntity(this.firstarticle.page6)
        engine.removeEntity(this.firstarticle.page7)
        //engine.removeEntity(this.firstarticle.page8)
    }
    createTriggerPrompts() {
        [this.prompt1, this.prompt2, this.prompt3, this.prompt4
        ].forEach(triggerPrompts => {
            triggerPrompts.setParent(this)
        })

        this.prompt1.addComponentOrReplace(new Transform({
            position: new Vector3(11.160, 3.236, 51.248),
            scale: new Vector3(1.361, 2.392, 1.910),
            rotation: new Quaternion().setEuler(359.800, 269.000, 180.000),
        }))
        this.prompt1.addComponent(article1page3)
        this.prompt1.onClick = () => this.createArticles()


        this.prompt2.addComponentOrReplace(new Transform({
            position: new Vector3(11.160, 3.236, 41.128),
            scale: new Vector3(1.361, 2.392, 1.910),
            rotation: new Quaternion().setEuler(359.800, 269.000, 180.000),
        }))
        this.prompt2.addComponent(article1page3)

        this.prompt3.addComponentOrReplace(new Transform({
            position: new Vector3(20.845, 3.236, 41.116),
            scale: new Vector3(1.361, 2.392, 1.910),
            rotation: new Quaternion().setEuler(360.000, 90.200, 180.000),
        }))
        this.prompt3.addComponent(article1page3)

        this.prompt4.addComponentOrReplace(new Transform({
            position: new Vector3(20.845, 3.236, 51.256),
            scale: new Vector3(1.361, 2.392, 1.910),
            rotation: new Quaternion().setEuler(360.000, 90.200, 180.000),
        }))
        this.prompt4.addComponent(article1page3)

    }
    createArticles() {

        //engine.removeEntity(this.prompt1)
        engine.addEntity(this.firstarticle)
        this.firstarticle.setParent(this)
        this.firstarticle.addComponentOrReplace(new Transform({
            position: new Vector3(11.163, 3.236, 51.249),
            scale: new Vector3(1.241, 2.332, 1.900),
            rotation: new Quaternion().setEuler(359.800, 271.000, 180.000),
        }))

        this.pagenum = 1
        this.firstarticle.load()

        log(this.firstarticle.getComponent(Transform).position)

        this.a1CreateButtons()

    }
    a1CreateButtons() {
        engine.addEntity(this.a1bs)
        engine.addEntity(this.a1bn)
        engine.addEntity(this.a1bp)

        this.a1bs.setParent(this)
        this.a1bn.setParent(this)
        this.a1bp.setParent(this)

        this.a1bn.addComponentOrReplace(new Transform({
            position: new Vector3(11.140, -1.200, 49.940),
            scale: new Vector3(3.000, 3.000, 3.000),
            rotation: new Quaternion().setEuler(360.000, 90.000, 360.000),
        }))

        this.a1bn.addComponentOrReplace(new OnPointerDown(() => {

            log('clicked!')
            this.firstarticle.nextPage()



        }, {
            hoverText: 'Next Page'
        }))

        // this.nextbuttonLeft.setParent(article1background)

        this.a1bs.addComponentOrReplace(new Transform({
            position: new Vector3(11.020, -1.780, 52.540),
            scale: new Vector3(3.000, 3.000, 3.000),
            rotation: new Quaternion().setEuler(360.000, 270.000, 360.000),
        }))

        this.a1bs.addComponentOrReplace(new OnPointerDown(() => {

            this.firstarticle.onExit(this.firstarticle.currentEntity)



            engine.removeEntity(this.a1bn)
            engine.removeEntity(this.a1bp)
            engine.removeEntity(this.a1bs)


        }, {
            hoverText: 'Close Article'
        }))


        this.a1bp.addComponentOrReplace(new
            Transform({
                position: new Vector3(11.140, -1.200, 49.440),
                scale: new Vector3(3.000, 3.000, 3.000),
                rotation: new Quaternion().setEuler(360.000, 90.000, 360.000),
            })
        )

        this.a1bp.addComponentOrReplace(new OnPointerDown(() => {

            this.firstarticle.prevPage()


            this.firstarticle.prevPage()

        }, {
            hoverText: 'Previous Page'
        }))

    }


}

export const KPMGBank = new KPMGBankInstance()