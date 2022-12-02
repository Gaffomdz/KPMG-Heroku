import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { Dash_Tweaker } from 'dcldash'
import { kbDialog } from 'src/utils/dialogs'

export const myNPC = new NPC({
  position: new Vector3(39.09,0.8,62.59),
  scale: new Vector3(1.000, 1.1, 1.000),
  rotation: new Quaternion().setEuler(0.000, 66.439, 0.000),
}, 'models/KB-HOMES/npc/kbhomes_npcF_trm_main_07_1.glb',

  () => {
    myNPC.playAnimation('anim_idle_01')
    // animation
    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(0.5, () => {
        myNPC.playAnimation('anim_talk_01')
      })
    )
    engine.addEntity(dummyent)
    myNPC.talk(kbDialog)

  },
  {
    faceUser: true,
    reactDistance:2,
    hoverText:'Talk',
    onWalkAway: () => {
      myNPC.playAnimation('anim_idle_01', true, 2)
    }
  }
)