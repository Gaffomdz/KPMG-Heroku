import { Dialog } from "@dcl/npc-scene-utils";
import { myNPC } from "src/KB-HOMES/kb-npc";


export const kbDialog: Dialog[] = [
    {
        text: " Hi there, I’m Lynn! Welcome to KB Home in the Metaverse!"
    },
    {
        text: "Here at KB Home we’re built on relationships and we believe that the best homes start with the people who live in them."
    },
    {
        text: "That's why we partner with every customer to learn all about what they want, what they need and where they see themselves in the future,"
    },
    {
        text: "so we can build a personalized new home that fits how they live. For today and the years ahead."
    },
    {
        text: "And during your KB homebuying journey, a dedicated team will be there for help and guidance every step of the way."
    },
    {
        text: "Now let's get started with a tour!"

    },
    {
        text: "Step by Step Guide to Buying a New Home",
        isQuestion: true,
        buttons: [
            { label: 'Open', goToDialog: 7, triggeredActions: () => openExternalURL('https://www.kbhome.com/homebuying-journey') },
            { label: 'Close', goToDialog: 7 }
        ]
    },
    {
        text: "Click to Close",
        triggeredByNext: () => {myNPC.playAnimation('')},
        isEndOfDialog:true,
    },
]