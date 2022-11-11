import { Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"


class KBCulDeSacInstance extends Scene {
    //environment
    private kBCulDeSacGeo = new Entity()
    //utils
    constructor() {
        super(SceneLocations.KBCulDeSac)
        this.kBCulDeSacGeo.addComponent(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH-Cul-de-sac.glb'))

        this.kBCulDeSacGeo.setParent(this)

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
  
}

export const KBCulDeSac= new KBCulDeSacInstance()