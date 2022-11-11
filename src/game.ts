import { SceneController } from "./congif/core/sceneController"
import { SceneLocations } from "./congif/enums"
import { SceneEntities } from "./congif/scenes"
import { KBCulDeSac } from "./KB-HOMES/environment/kb-cul-de-sac"
import { KBInterior } from "./KB-HOMES/environment/kb-interior"
import { KPMGBank } from "./KPMG/environment/kpmg-bank"
import { KPMGEvent } from "./KPMG/environment/kpmg-eventSpace"
import { KPMGInterior } from "./KPMG/environment/kpmg-interior"
import { KPMGRetail } from "./KPMG/environment/kpmg-retail"



class GameController {
    private scenes = SceneEntities

    constructor() {
        SceneController.loadScene(SceneLocations.Exterior)
        KPMGInterior.preload()
        KPMGBank.preload()
        KPMGEvent.preload()
        KPMGRetail.preload()
        KBInterior.preload()
        KBCulDeSac.preload()
    }

}

new GameController()



