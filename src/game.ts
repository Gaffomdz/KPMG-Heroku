import { SceneController } from "./KPMG/congif/core/sceneController"
import { SceneLocations } from "./KPMG/congif/enums"
import { SceneEntities } from "./KPMG/congif/scenes"


class GameController {
    private scenes = SceneEntities

    constructor() {
        SceneController.loadScene(SceneLocations.Exterior)
    }

}

new GameController()



