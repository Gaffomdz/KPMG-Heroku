import { SceneController } from "./KPMG/congif/core/sceneController"
import { SceneLocations } from "./KPMG/congif/enums"
import { SceneEntities } from "./KPMG/congif/scenes"
import { Bank } from "./KPMG/enviroment/bank"
import { Event } from "./KPMG/enviroment/eventSpace"
import { Interior } from "./KPMG/enviroment/interior"


class GameController {
    private scenes = SceneEntities

    constructor() {
        SceneController.loadScene(SceneLocations.Exterior)
        Interior.preload()
        Bank.preload()
        Event.preload()
    }

}

new GameController()



