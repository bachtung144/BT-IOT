import io from 'socket.io-client';
import {domain} from "../domain";
import {storeListDevice} from "../../states/actions/listDevice";
import {store} from "../../states/store";
const domain_socket = domain;

let _socket = false;

async function connectSocket() {
    return new Promise(async (resolve, reject) => {
        if (_socket) {
            resolve(true);
            return true;
        }
        _socket = io(domain_socket, {reconnection: false});
        _socket.on('connect', () => {
            console.log('connected');
            onEvent();
            resolve(true);
        });
        _socket.on('connect_error', () => {
            console.log('connect error');
            if (_socket) {
                _socket.off();
                _socket = false;
            }
            reject(false);
        });
    });
}

function disconnect() {
    if (!_socket) {
        return false;
    }
    _socket.off();
    _socket.disconnect();
    _socket = false;
    return true;
}

function emit(eventMess, data: {}) {
    if (!_socket) {
        return false;
    }
    _socket.emit(eventMess, data);
    return true;
}

function onEvent() {
    if (!_socket) {
        return false;
    }
    _socket.on('disconnect', () => {
        console.log('disconnect');
        _socket = false;
    });

    _socket.on('Server-list-device', response => {
        let data = JSON.parse(response);
        store.dispatch(storeListDevice(data))
    });

    return true;
}

export {connectSocket, disconnect, emit};
