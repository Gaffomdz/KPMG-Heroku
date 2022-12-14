import { Dash_AnimationQueue, Dash_Ease, Dash_Tweaker } from "dcldash"
import { article1background, article1page1, article1page2, article1page3, article1page4, article1page5, article1page6, article1page7 } from "../Resources/article1"

export class dynamicArticle1floor2 extends Entity {

    private pagenum = 1

    public page1 = new Entity()
    public page2 = new Entity()
    public page3 = new Entity()
    public page4 = new Entity()
    public page5 = new Entity()
    public page6 = new Entity()
    public page7 = new Entity()

    public currentEntity = new Entity()

    private cooldown = 0

    constructor() {
        super()

        this.pagenum = 1

        //this.addComponentOrReplace(new PlaneShape)
        //this.addComponentOrReplace(article1background)
        this.addComponentOrReplace(new Transform({
            position: new Vector3(11.163, 3.236, 51.249),
            scale: new Vector3(1.241, 2.332, 1.900),
            rotation: new Quaternion().setEuler(359.800, 271.000, 180.000),
        }))


        this.loadPages()


    }

    loadPages() {
        [
            this.page1,
            this.page2,
            this.page3,
            this.page4,
            this.page5,
            this.page6,
            this.page7
        ].forEach(page => {
            page.addComponentOrReplace(new PlaneShape())
            page.setParent(this)
            engine.removeEntity(page)
            page.addComponentOrReplace(new Transform({
                position: new Vector3(0, 0, 0.10),
                scale: new Vector3(0, 0, 0),
                rotation: new Quaternion().setEuler(360.000, 360.000, 180.000),
            }))
            // let pageTransform = this.getComponent(Transform)
            // page.addComponentOrReplace(pageTransform)
            // page.addComponentOrReplace(new Transform({
            //     position: new Vector3(0.1,0,0),
            //     scale: new Vector3(2.6, 5.080, 4.1),
            //     rotation: new Quaternion().setEuler(0,90,180)
            // }))
            // page.setParent(this)
        })
        this.page1.addComponentOrReplace(article1page1)
        this.page2.addComponentOrReplace(article1page2)
        this.page3.addComponentOrReplace(article1page3)
        this.page4.addComponentOrReplace(article1page4)
        this.page5.addComponentOrReplace(article1page5)
        this.page6.addComponentOrReplace(article1page6)
        this.page7.addComponentOrReplace(article1page7)
    }

    load() {
        engine.addEntity(this.page1)
        this.currentEntity = this.page1
        this.pagenum = 1
        Dash_AnimationQueue.add({
            duration: 1,
            data: {},
            onFrame: (progress, data) => {
                const transform = this.page1.getComponent(Transform)
                const transform2 = this.getComponent(Transform)

                const easeValuex = Scalar.Lerp(0, 1, Dash_Ease.easeInOutCirc(progress))
                const easeValuey = Scalar.Lerp(0, 1, Dash_Ease.easeInOutCirc(progress))
                const easeValuez = Scalar.Lerp(0, 1, Dash_Ease.easeInOutCirc(progress))

                const easeValuex2 = Scalar.Lerp(1, 2.78, Dash_Ease.easeInOutCirc(progress))
                const easeValuey2 = Scalar.Lerp(1, 3.74, Dash_Ease.easeInOutCirc(progress))
                const easeValuez2 = Scalar.Lerp(1, 2.80, Dash_Ease.easeInOutCirc(progress))

                transform.scale.set(easeValuex, easeValuey, easeValuez)
                transform2.scale.set(easeValuex2, easeValuey2, easeValuez2)
            },
            onComplete: () => {
                log('Animation Done! [LOAD]')
            }
        })
    }

    pageSpawn(entityOld: Entity, entityNew: Entity) {
        engine.addEntity(entityNew)
        this.currentEntity = entityNew

        entityNew.addComponentOrReplace(new Transform({
            position: new Vector3(11.173, 3.316, 51.249),
            scale: new Vector3(1.240, 2.33, 1.90),
            rotation: new Quaternion().setEuler(359.800, 271.000, 180.000),
        }))
        //engine.addEntity(entityNew)

        entityOld.addComponentOrReplace(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: new Quaternion().setEuler(0.000, 0.000, 180.000)
        }))



        Dash_AnimationQueue.add({
            duration: 1,
            data: {},
            onFrame: (progress, data) => {
                const transformNEW = entityNew.getComponent(Transform)
                const easeValuexNEW = Scalar.Lerp(0, 1.24, Dash_Ease.easeInOutCirc(progress))
                const easeValueyNEW = Scalar.Lerp(0, 2.33, Dash_Ease.easeInOutCirc(progress))
                const easeValuezNEW = Scalar.Lerp(0, 1.90, Dash_Ease.easeInOutCirc(progress))


                const transformOld = entityOld.getComponent(Transform)

                transformOld.position.x = transformOld.position.x + 0.0001
                const easeValuexOld = Scalar.Lerp(1, 0, Dash_Ease.easeInOutCirc(progress))
                const easeValueyOld = Scalar.Lerp(1, 0, Dash_Ease.easeInOutCirc(progress))
                const easeValuezOld = Scalar.Lerp(1, 0, Dash_Ease.easeInOutCirc(progress))

                transformNEW.scale.set(easeValuexNEW, easeValueyNEW, easeValuezNEW)
                transformOld.scale.set(easeValuexOld, easeValueyOld, easeValuezOld)


            },
            onComplete: () => {
                log('Animation Done! [Entity Spawning]')
                engine.removeEntity(entityOld)
                this.cooldown = 0
            }
        })



    }

    onExit(entity: Entity) {
        entity = this.currentEntity
        Dash_AnimationQueue.add({
            duration: 0.5,
            data: {},
            onFrame: (progress, data) => {
                const transform = entity.getComponent(Transform)
                const transform2 = this.getComponent(Transform)

                const easeValuey = Scalar.Lerp(1, 0, Dash_Ease.easeOutCirc(progress))
                const easeValue2 = Scalar.Lerp(1, 0, Dash_Ease.easeOutCirc(progress))


                transform.scale.set(1, easeValuey, 1)
                transform2.scale.set(1, easeValue2, 1)
            },
            onComplete: () => {
                this.pagenum = 1
                engine.removeEntity(entity)
                engine.removeEntity(this)
            }
        })
    }

    nextPage() {
        if (this.cooldown == 0) {
            this.cooldown = 1

            if (this.pagenum == 1) {
                this.pageSpawn(this.page1, this.page2)
                this.pagenum = 2
                log('pagenum: ' + this.pagenum)

            } else
                if (this.pagenum == 2) {
                    this.pageSpawn(this.page2, this.page3)
                    this.pagenum = 3
                    log('pagenum: ' + this.pagenum)
                } else
                    if (this.pagenum == 3) {
                        this.pageSpawn(this.page3, this.page4)
                        this.pagenum = 4
                        log('pagenum: ' + this.pagenum)
                    } else
                        if (this.pagenum == 4) {
                            this.pageSpawn(this.page4, this.page5)
                            this.pagenum = 5
                            log('pagenum: ' + this.pagenum)
                        } else
                            if (this.pagenum == 5) {
                                this.pageSpawn(this.page5, this.page6)
                                this.pagenum = 6
                                log('pagenum: ' + this.pagenum)
                            } else
                                if (this.pagenum == 6) {
                                    this.pageSpawn(this.page6, this.page7)
                                    this.pagenum = 7
                                    log('pagenum: ' + this.pagenum)
                                } else
                                    if (this.pagenum == 7) {
                                        this.pageSpawn(this.page7, this.page1)
                                        this.pagenum = 1
                                        log('pagenum: ' + this.pagenum)
                                    }

        }
    }
    prevPage() {


        if (this.cooldown == 0) {
            this.cooldown = 1

            if (this.pagenum == 8) {
                this.pageSpawn(this.page1, this.page7)
                this.pagenum = 7
            } else

                if (this.pagenum == 7) {
                    this.pageSpawn(this.page7, this.page6)
                    this.pagenum = 6
                    log('pagenum: ' + this.pagenum)
                } else
                    if (this.pagenum == 6) {
                        this.pageSpawn(this.page6, this.page5)
                        this.pagenum = 5
                        log('pagenum: ' + this.pagenum)
                    } else
                        if (this.pagenum == 5) {
                            this.pageSpawn(this.page5, this.page4)
                            this.pagenum = 4
                            log('pagenum: ' + this.pagenum)
                        } else
                            if (this.pagenum == 4) {
                                this.pageSpawn(this.page4, this.page3)
                                this.pagenum = 3
                                log('pagenum: ' + this.pagenum)
                            } else
                                if (this.pagenum == 3) {
                                    this.pageSpawn(this.page3, this.page2)
                                    this.pagenum = 2
                                    log('pagenum: ' + this.pagenum)
                                } else
                                    if (this.pagenum == 2) {
                                        this.pageSpawn(this.page2, this.page1)
                                        this.pagenum = 1
                                        log('pagenum: ' + this.pagenum)
                                    }

        }
    }
}

