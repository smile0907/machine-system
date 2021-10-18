import Easy, { createModel } from 'redux-easy-action';

import IndexModel from './model/index';
import ThemeModel from './model/theme';
import MenuModel from './model/menu';
import NavigateModel from './model/navigate';
import Auth from './model/auth';
import Chat from './model/chat';
import Maps from './model/map';

const easy = new Easy({
    initState: {},
    devtool: true,
    model: {
        index: createModel('index', IndexModel),
        theme: createModel('theme', ThemeModel),
        menu: createModel('menu', MenuModel),
        navigate: createModel('navigate', NavigateModel),
        auth: createModel('auth', Auth),
        chat: createModel('chat', Chat),
        maps: createModel('maps', Maps),
    },
});

export default easy.store;
export const actions = easy.actions;
export const models = easy.models;


// 一些初始化工作
+ async function () {
    const menuAction = actions.menu;
    const authAction = actions.auth;
    const chatAction = actions.chat;
    const mapAction = actions.maps;
    menuAction.initActive();
    authAction.initActive();
    chatAction.initActive();
    mapAction.initActive();
}();
