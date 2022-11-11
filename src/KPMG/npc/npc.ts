import { NPC, NPCDelay } from '@dcl/npc-scene-utils'

export const myNPC = new NPC({
  position: new Vector3(8.66,0.28,21.31),
  scale: new Vector3(1.000, 1.000, 1.000),
  rotation: new Quaternion().setEuler(0.000, 66.439, 0.000),
}, 'models/KPMG/npc/kpmg_npc.glb',

  () => {
    myNPC.playAnimation('stash_idle')
    // animation
    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(0.5, () => {
        myNPC.playAnimation('stash_talking')
      })
    )
    engine.addEntity(dummyent)
    
  },
  {
    faceUser: true,
    reactDistance:2,
    hoverText:'Talk',
    onWalkAway: () => {
      myNPC.playAnimation('Idle', true, 2)
    }
  }
)