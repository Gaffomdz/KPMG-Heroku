import { Scene } from "../congif/core/scene"
import { SceneController } from "../congif/core/sceneController"
import { SceneLocations } from "../congif/enums"
import { movePlayerToVector3 } from "../utils/movePlayerToVector3"
import { ExitPlane } from "../utils/exitPlane"
import { Dash_Material } from "dcldash";



class ExteriorInstance extends Scene {

    private exteriorEntity = new Entity()
    private exteriorInnerEntity = new Entity()

    private triggerDoor1 = new ExitPlane()
    private triggerDoor2 = new ExitPlane()
    private triggerDoor3 = new ExitPlane()
    private triggerDoor4 = new ExitPlane()
    private triggerDoor5 = new ExitPlane()
    private triggerDoor6 = new ExitPlane()
    private triggerDoor7 = new ExitPlane()
    private triggerDoor8 = new ExitPlane()


    

    constructor() {
        super(SceneLocations.Exterior)
        this.addComponent(new GLTFShape('models/exterior/KPMG_exterior_collider.glb'))
        this.exteriorEntity.addComponent(new GLTFShape('models/exterior/KPMG_exterior_Geo1B.glb'))
        this.exteriorInnerEntity.addComponent(new GLTFShape('models/exterior/KPMG_exterior_innerGeo.glb'))


        this.exteriorEntity.setParent(this)
        this.exteriorInnerEntity.setParent(this)

        this.triggerPortal1()
        this.triggerPortal2()
        this.triggerPortal3()
        this.triggerPortal4()
        this.triggerPortal5()
        this.triggerPortal6()
        this.triggerPortal7()
        this.triggerPortal8()

    }
    triggerPortal1() {
        [this.triggerDoor1,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1.addComponentOrReplace(new Transform({
            position: new Vector3(37.99, 2.28, 17.73),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 100.000, 2.000),
        }))
        this.triggerDoor1.onCameraEnter = () => this.enter(
            new Vector3(24.73,0.98,40.71),
            new Vector3(24.22,0.98,39.74),
        )
    }
    triggerPortal2() {
        [this.triggerDoor2,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor2.addComponentOrReplace(new Transform({
            position: new Vector3(37.08,2.28,29.47),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 100.000, 2.000),
        }))
        this.triggerDoor2.onCameraEnter = () => this.enter(
            new Vector3(10.47,0.98,36.87),
            new Vector3(11.39,0.98,36.27),
        )
    }
    triggerPortal3() {
        [this.triggerDoor3,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor3.addComponentOrReplace(new Transform({
            position: new Vector3(29.09,2.28,36.65),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 180.000, 2.000),
        }))
        this.triggerDoor3.onCameraEnter = () => this.enter(
            new Vector3(5.63,0.98,24.99),
            new Vector3(23.93,0.98,41.51),
        )
    }
    triggerPortal4() {
        [this.triggerDoor4,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor4.addComponentOrReplace(new Transform({
            position: new Vector3(18.23,2.28,37.25),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 170.000, 2.000),
        }))
        this.triggerDoor4.onCameraEnter = () => this.enter(
            new Vector3(11.00,0.98,10.28),
            new Vector3(23.93,0.98,41.51),
        )
    }
    triggerPortal5() {
        [this.triggerDoor5,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor5.addComponentOrReplace(new Transform({
            position: new Vector3(11.02,2.28,29.08),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 130.000, 2.000),
        }))
        this.triggerDoor5.onCameraEnter = () => this.enter(
            new Vector3(23.25,0.98,5.88),
            new Vector3(23.93,0.98,41.51),
        )
    }
    triggerPortal6() {
        [this.triggerDoor6,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor6.addComponentOrReplace(new Transform({
            position: new Vector3(9.95,2.28,18.19),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 70.000, 2.000),
        }))
        this.triggerDoor6.onCameraEnter = () => this.enter(
            new Vector3(35.83,0.98,11.23),
            new Vector3(23.93,0.98,41.51),
        )
    }
    triggerPortal7() {
        [this.triggerDoor7,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor7.addComponentOrReplace(new Transform({
            position: new Vector3(19,2.28,11.50),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 30.000, 2.000),
        }))
        this.triggerDoor7.onCameraEnter = () => this.enter(
            new Vector3(42.89,0.98,23.09),
            new Vector3(23.93,0.98,41.51),
        )
    }
    triggerPortal8() {
        [this.triggerDoor8,
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor8.addComponentOrReplace(new Transform({
            position: new Vector3(29.38,2.28,10.47),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 170.000, 2.000),
        }))
        this.triggerDoor8.onCameraEnter = () => this.enter(
            new Vector3(37.87,0.98,36.39),
            new Vector3(23.93,0.98,41.51),
        )
    }


    enter(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.Interior)
        movePlayerToVector3(position, direction)
    }
}

export const Exterior = new ExteriorInstance()