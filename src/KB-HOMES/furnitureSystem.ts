/**
 * 
→ Choose your cabinets
→ Choose your flooring
→ Choose your lighting
→ Choose your backsplash

New preloading system (loads next choice in advance; like spotify)
Loading always starts on random numbers

UI -> Furniture Systems -> [Scene Loading]?

Furniture System exists to control the database and return the right strings. It also prepares
the files for preloading.

ADR: 

We want to seperate the interior scene loading and the rotation system for the furniture.
This will provide less room for error with the build, and can make it more seamless.
Main build can also face better optimisation.

UI connected to Furniture System directly.

 */


// Path: src/KB-HOMES/environment/furnitureSystem.ts
// Compare this snippet from src/KB-HOMES/environment/kb-interior-1860.ts:

import {furniture, cabintes, backsplash, flooring, lighting} from 'database'

class furnitureSystem extends Entity {
    public cabinets = new Entity
    public flooring = new Entity
    public lighting = new Entity
    public backsplash = new Entity

    private furnArray = new Array

    constructor() {
        super()

        this.addComponent(new Transform({
            position: new Vector3(0, 0, 0),
        }))

        this.furnArray[0] = this.cabinets
        this.furnArray[1] = this.flooring
        this.furnArray[2] = this.lighting
        this.furnArray[3] = this.backsplash
        
        this.loadfirstShapes()

            this.cabinets.addComponent(new GLTFShape(`models/${furniture[0]}`))
            log(furniture[this.getRandomInt(0, furniture.length-1)][this.getRandomInt(0, furniture.length)])
            log(furniture[this.getRandomInt(0, furniture.length-1)][this.getRandomInt(0, furniture.length)])
        
    }
    getRandomInt(min:number, max:number) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }

    loadfirstShapes(){
        let startVar0 = furniture[0][this.getRandomInt(0, furniture[0].length-1)]
        let startVar1 = furniture[1][this.getRandomInt(0, furniture[1].length-1)]
        let startVar2 = furniture[2][this.getRandomInt(0, furniture[2].length-1)]
        let startVar3 = furniture[3][this.getRandomInt(0, furniture[3].length-1)]

        this.cabinets.addComponent(new GLTFShape(`models/${startVar0}`))
        this.flooring.addComponent(new GLTFShape(`models/${startVar1}`))
        this.lighting.addComponent(new GLTFShape(`models/${startVar2}`))
        this.backsplash.addComponent(new GLTFShape(`models/${startVar3}`))

        this.addAllToEngine()
    }

    addAllToEngine(){
        for(let i = 0; i < this.furnArray.length; i++){
            this.furnArray[i].setParent(this)
            engine.addEntity(this.furnArray[i])
        }
    }

    removeAllFromEngine(){
        for(let i = 0; i < this.furnArray.length; i++){
            engine.removeEntity(this.furnArray[i])
        }
    }

    glbSwap(){
        let furnitureType = 0
        let typeVariation = 0
        engine.removeEntity(this.furnArray[furnitureType])
        this.furnArray[furnitureType].addComponentOrReplace(new GLTFShape(`models/${furniture[furnitureType][typeVariation]}`))
        engine.addEntity(this.furnArray[furnitureType])
    }


}
