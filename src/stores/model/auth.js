import jwt from 'jwt-decode';
import axios from 'axios';
import { notification } from 'antd';
import { userApi } from '../../setting';

export default ({ commit, getState }) => ({
    initState: {
        user: {},
    },

    onCheckUser(history) {
        const token = window.localStorage.getItem("token");
        if (token) {
            const user = jwt(token);
            commit({ user });
        } else {
            notification["warning"]({
                message: "Please login now!",
            });
            history.push("login")
        };
    },
    onLoginUser(data, history) {
        axios.post(`${userApi}/user/login`, data).then((res)=>{
            if (res.status === 200) {
                const { token, user } = res.data;
                window.localStorage.setItem("token", token);
                commit({ user });
                history.push("dashboard");
                notification["success"]({
                    message: "Login successfully!",
                });
            } else notification["error"]({
                message: "Login failed!",
            });
        });
    },
    onLogout() {
        window.localStorage.setItem("token", "");
        notification["info"]({
            message: "Logout successfully!",
        });
        window.location.href = "/login";
    },
    initActive() {
        const token = window.localStorage.getItem("token");
        if (token) {
            const user = jwt(token);
            commit({ user });
        }
    },
});
