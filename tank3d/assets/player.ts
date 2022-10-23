import { _decorator, Component, Node, Vec3, input, Input, EventKeyboard, KeyCode } from 'cc';
import { Tank } from './tank';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(Tank)
    private tank: Tank | null = null;
    private tankV: Vec3 = Vec3.ZERO.clone();

    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestory() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    start() {
        if (this.tank) {
            this.tank.teamNumber = 1;
        }
    }

    update(deltaTime: number) {
        if (this.tank) {
            this.node.position = this.tank.node.position;
        }
        if (!this.tankV.equals(Vec3.ZERO)) {
            this.tank?.move(this.tankV);
        }
    }

    onKeyDown(ek: EventKeyboard) {
        switch(ek.keyCode) {
            case KeyCode.KEY_W:
                this.tankV.z = -1.0;
                break;
            case KeyCode.KEY_A:
                this.tankV.x = -1.0;
                break;
            case KeyCode.KEY_D:
                this.tankV.x = 1.0;
                break;
            case KeyCode.KEY_S:
                this.tankV.z = 1.0;
                break;
            default:
                return;
        }
        this.tankV = this.tankV.normalize();
        console.log('tank v:', this.tankV);
    }

    onKeyUp(ek: EventKeyboard) {
        switch(ek.keyCode) {
            case KeyCode.KEY_W:
                this.tankV.z = 0;
                break;
            case KeyCode.KEY_A:
                this.tankV.x = 0;
                break;
            case KeyCode.KEY_D:
                this.tankV.x = 0;
                break;
            case KeyCode.KEY_S:
                this.tankV.z = 0;
                break;
            default:
                return;
        }
        this.tankV = this.tankV.normalize();
        console.log('tank v:', this.tankV);
    }
}

