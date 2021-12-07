import axiosClient from '../axios/axiosClient';

class Apartment {
    getInfo = params => {
        const url = `/apartment/${params}`;
        return axiosClient.get(url);
    };
}

const apartmentApi = new Apartment();

export default apartmentApi;
