import axiosClient from '../axios/axiosClient';

class Room {
    getAll = params => {
        const url = '/rooms';
        return axiosClient.get(url, {params});
    };

    getDevices = params => {
        const url = `/rooms/${params}/devices`;
        return axiosClient.get(url);
    }
}

const roomApi = new Room();

export default roomApi;
