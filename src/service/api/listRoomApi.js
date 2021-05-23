import axiosClient from '../axios/axiosClient';

class ListRoomApi {
    getAll = params => {
        const url = '/listRoom';
        return axiosClient.get(url, {params});
    };
}

const listRoomApi = new ListRoomApi();

export default listRoomApi;
