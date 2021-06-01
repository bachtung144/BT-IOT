import AsyncStorage from '@react-native-community/async-storage';
import init from 'react_native_mqtt';

export default function prgMqtt(onConnect, onConnectionLost, onMessageArrived) {
    init({
        size: 10000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        reconnect: true,
        sync : {
        }
    });
    prgMqtt.client = new Paho.MQTT.Client('ws://test.mosquitto.org:8080/ws', '1234');
    prgMqtt.client.onConnectionLost = onConnectionLost;
    prgMqtt.client.onMessageArrived = onMessageArrived;
    prgMqtt.client.connect({ onSuccess:onConnect, useSSL: false });
}

