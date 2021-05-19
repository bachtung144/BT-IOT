import axiosClient from '../axios/axiosClient';

class UserApi {
  login = params => {
    const url = '/users/login';
    return axiosClient.get(url, {params});
  };
}

const userApi = new UserApi();

export default userApi;
