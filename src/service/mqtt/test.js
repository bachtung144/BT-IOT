import init from 'react_native_mqtt';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export function prgMqtt() {

  prgMqtt.client = new Paho.MQTT.Client(
    "broker.hivemq.com",
    8000,
    "clientID-" + parseInt(Math.random() * 100)
  );
  const storage = new Storage({
    // maximum capacity, default 1000 key-ids
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
      // we'll talk about the details later.
    }
  });

  init(storage);

  function onConnect() {
    prgMqtt.client.subscribe('listDevice')
  }

  prgMqtt.client.connect({ onSuccess:onConnect, useSSL: false })

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  prgMqtt.client.onConnectionLost = onConnectionLost;
  prgMqtt.client.onMessageArrived = onMessageArrived;
}

