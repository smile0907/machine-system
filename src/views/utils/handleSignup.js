import axios from 'axios';
import { notification } from 'antd';
import { userApi, socketApi } from '../../setting';

const handleSignup = async (data, history) => {
    axios.post(`${userApi}/user/signup`, data).then((res)=>{
      if (res.status===200) {
        notification["success"]({
          message: "You are signed successfully!",
        });
        history.push("/login");
      }
    });
};

export default handleSignup;
