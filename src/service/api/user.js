import axiosClient from '../axios/axiosClient';

class User {
  login = params => {
    const url = '/user/login';
    return axiosClient.post(url, params);
  };

  getInfor = params => {
    const url = `/user/${params}`;
    return axiosClient.get(url);
  }
}

const userApi = new User();

export default userApi;
