import { Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"


class KBInteriorInstance extends Scene {
    //environment
    private kbInteriorGeo = new Entity()
    //utils
    constructor() {
        super(SceneLocations.KBInterior)
        this.kbInteriorGeo.addComponent(new GLTFShape('models/KB-HOMES/interior/KBH_1860_interior_main.glb'))
        this.kbInteriorGeo.setParent(this)

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

export const KBInterior= new KBInteriorInstance()