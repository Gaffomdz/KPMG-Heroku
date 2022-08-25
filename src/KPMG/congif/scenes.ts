import { Exterior } from "../enviroment/exterior"
import { Interior } from "../enviroment/interior"
import { Scene } from "./core/scene"
import { SceneLocations } from "./enums"

export const SceneEntities: {[key: number] : Scene } = {
    [SceneLocations.Exterior]: Exterior,
    [SceneLocations.Interior]: Interior,
}

export const getSceneEntityFromLocation = (location: SceneLocations) : (Scene | undefined) => {
    return SceneEntities[location]
}