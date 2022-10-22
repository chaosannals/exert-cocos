import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { login, getUserInfo, checkSession } from './bdmg';

@ccclass('Start')
export class Start extends Component {
    start() {
        console.log('start');
        if (globalThis.tt) {
            console.log('sss tt');
            Promise.resolve((async () => {
                if (!await checkSession()) {
                    await login();
                }
                await getUserInfo();
            })());
        } else {
            console.log('sss not tt');
        }
    }

    update(deltaTime: number) {
        
    }

    onClickStartButton() {
        console.log('click');
        if (globalThis.tt) {
            console.log('tt');
        } else {
            console.log('not tt');
        }
    }
}

