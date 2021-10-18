import axios from 'axios';
import { notification } from 'antd';
import { actions } from '../../../stores';
import { userApi } from '../../../setting'

const mapStore = actions.maps;

const mapSave = (data) => {
    mapStore.onSaveRequest();
    axios.post(`${userApi}/map/save`, data).then((res)=>{
        const { success, maps } = res.data;
        if (success) {
            notification["success"]({
                message: 'Saved successfully...',
            });
            mapStore.onMapSave(maps);
        }
    });
}

const mapRemove = (data) => {
    axios.post(`${userApi}/map/remove`, data).then((res)=>{
        const { success, maps } = res.data;
        if (success) {
            notification["success"]({
                message: 'Removed successfully...',
            });
            mapStore.onMapSave(maps);
        }
    });
}

const mapEdit = (data) => {
    mapStore.onSaveRequest();
    axios.post(`${userApi}/map/edit`, data).then((res)=>{
        const { success, maps } = res.data;
        if (success) {
            notification["success"]({
                message: 'Edited successfully...',
            });
            mapStore.onMapSave(maps);
        }
    });
}

export { mapSave, mapRemove, mapEdit }
