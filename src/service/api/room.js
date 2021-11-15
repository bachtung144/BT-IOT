import axiosClient from '../axios/axiosClient';

class Room {
    getAll = params => {
        const url = '/room';
        return axiosClient.get(url, {params});
    };
}

const roomApi = new Room();

export default roomApi;
