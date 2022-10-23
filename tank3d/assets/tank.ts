import { _decorator, Component, Node, RigidBody, Vec3, Collider, ICollisionEvent, ITriggerEvent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tank')
export class Tank extends Component {
    private body: RigidBody = null;
    private groundCount: number = 0;

    @property(Collider)
    private groundCollider: Collider = null;

    @property
    public moveSpeed : number = 10.0;
    
    @property
    public turnSpeed : number = 10.0;

    @property
    public fireSpeed : number = 100.0;

    @property
    public teamNumber: number = 0;

    onLoad() {
        this.body = this.getComponent(RigidBody);
    }

    start() {
        if (this.groundCollider) {
            this.groundCollider.on('onTriggerEnter', this.onGroundEnter, this);
            this.groundCollider.on('onTriggerExit', this.onGroundExit, this);
        }
    }

    move(d: Vec3) {
        if (this.groundCount == 0) {
            return;
        }
        let f = this.node.forward
            .lerp(d, 0.1)
            .normalize();
        this.node.forward = f;
        let v = f.multiplyScalar(this.moveSpeed);
        this.body.setLinearVelocity(v);
    }

    onGroundEnter(e: ITriggerEvent) {
        if (e.otherCollider.node != this.node) {
            ++this.groundCount;
            //console.log('ground:', this.groundCount, e);
        }
    }

    onGroundExit(e: ITriggerEvent) {
        if (e.otherCollider.node != this.node) {
            --this.groundCount;
            //console.log('ground:', this.groundCount, e);
        }
    }
}

