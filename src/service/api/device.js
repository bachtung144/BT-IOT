import axiosClient from '../axios/axiosClient';

class Device {
    controlDevice = (deviceId, data) => {
        const url = `/devices/${deviceId}`;
        return axiosClient.put(url, data);
    };
}

const deviceApi = new Device();

export default deviceApi;
