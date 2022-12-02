
    
    export enum cabintes{
        cabinet1,
        cabinet2,
        cabinet3,
        cabinet4,
        cabinet5,
        cabinet6
    }
  
    export enum flooring{
        flooring1,
        flooring2,
        flooring3,
        flooring4,
        flooring5
    }
  
    export enum lighting{
        lighting1,
        lighting2,
        lighting3,
        lighting4,
        lighting5
    }
  
    export enum backsplash{
        backsplash1,
        backsplash2,
        backsplash3,
        backsplash4,
        backsplash5
    }

    export let furniture = new Array
    furniture[0] = cabintes
    furniture[1] = flooring
    furniture[2] = lighting
    furniture[3] = backsplash
    

let test = new Entity()
test.addComponent(new GLTFShape(`models/${backsplash[0]}`))

export function getRandomInt(min:number, max:number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }



  
