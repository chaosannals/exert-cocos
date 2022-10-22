export function login() {
    console.log('login');
    return new Promise((resolve, reject) => {
        globalThis.tt.login({
            force: true,
            success(res) {
                resolve(res);
                console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
            },
            fail(res) {
                reject(res);
                console.log(`login 调用失败`);
            },
        });
    });
}

export function getUserInfo() {
    console.log('getUserInfo');
    return new Promise((resolve, reject) => {
        globalThis.tt.getUserInfo({
            // withCredentials: true,
            // withRealNameAuthenticationInfo: true,
            success(res) {
                resolve(res);
              console.log(`getUserInfo 调用成功`, res.userInfo);
            },
            fail(res) {
                reject(res);
              console.log(`getUserInfo 调用失败`, res.errMsg);
            },
          });
    });
}

export function checkSession() {
    console.log('checkSession');
    return new Promise((resolve, reject) => {
        globalThis.tt.checkSession({
            success() {
                resolve(true);
                console.log(`session 未过期`);
            },
            fail() {
                console.log(`session 已过期，需要重新登录`);
                resolve(false);
            },
        });
    });
}