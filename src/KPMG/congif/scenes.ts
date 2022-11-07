import { Bank } from "../enviroment/bank"
import { Event } from "../enviroment/eventSpace"
import { Exterior } from "../enviroment/exterior"
import { Interior } from "../enviroment/interior"
import { Scene } from "./core/scene"
import { SceneLocations } from "./enums"

export const SceneEntities: {[key: number] : Scene } = {
    [SceneLocations.Exterior]: Exterior,
    [SceneLocations.Interior]: Interior,
    [SceneLocations.Interior]: Event,
    [SceneLocations.Interior]: Bank,
}

export const getSceneEntityFromLocation = (location: SceneLocations) : (Scene | undefined) => {
    return SceneEntities[location]
}