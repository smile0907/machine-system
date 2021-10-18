import jwt from 'jwt-decode';
import axios from 'axios';
import { notification } from 'antd';
import { userApi } from '../../setting';

export default ({ commit, getState }) => ({
    initState: {
        maps: [],
        loading: false,
    },
    onSaveRequest() {
        commit({ loading: true });
    },
    onMapSave(maps) {
        commit({ maps, loading: false });
    },

    initActive() {
        axios.get(`${userApi}/map/get`).then((res)=>{
            const { success, maps } = res.data;
            if (success) commit({ maps });
        })
    },
});
