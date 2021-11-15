import axiosClient from '../axios/axiosClient';

class User {
  login = params => {
    const url = '/user/login';
    return axiosClient.get(url, {params});
  };
}

const userApi = new User();

export default userApi;
