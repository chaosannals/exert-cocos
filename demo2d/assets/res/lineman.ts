import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('lineman')
export class lineman extends Component {
    private dt : number = 0;
    private si : number = 0;
    private s: Sprite = null;

    start() {
        this.s = this.getComponent(Sprite);
    }

    update(deltaTime: number) {
        this.dt += deltaTime;
        let si = Math.floor(this.dt % 4);
        if (si != this.si) {
            this.si = si;
            console.log(this.s);
            this.s.spriteFrame.offset.x = 64 * this.si;
            console.log(this.si);
        }
    }
}


