import jwt from 'jwt-decode';
import axios from 'axios';
import { notification } from 'antd';
import { userApi } from '../../setting';

export default ({ commit, getState }) => ({
    initState: {
        loginUsers: [],
        users: [],
        messages: [],
        activeUser: null,
        unreadUser: {},
    },

    onLogin(data) {
        const { loginUsers, users, user } = data;
        let userlist = [];
        for (const ele of users) {
            if (ele._id !== user.userId) {
                let active = false;
                for (const loginUser of loginUsers) {
                    if (loginUser!==null) {
                        if (loginUser.userId===ele._id) {
                            active = true;
                            break;
                        }
                    }
                }
                userlist.push({
                    email: ele.email,
                    username: ele.username,
                    userId: ele._id,
                    active,
                });
            }
        }
        commit({ users: userlist, loginUsers });
    },
    onUnreadMsg(userId) {
        let { unreadUser } = getState();
        unreadUser[userId] = true;
        window.localStorage.setItem("unreadUser", JSON.stringify(unreadUser));
        commit({ unreadUser });
    },
    onActiveUser(activeUser) {
        let { unreadUser } = getState();
        if ( unreadUser[activeUser.userId]!==undefined || unreadUser[activeUser.userId] ) {
            unreadUser[activeUser.userId] = "";
            window.localStorage.setItem("unreadUser", JSON.stringify(unreadUser));
            commit({ unreadUser });
        }
        commit({ activeUser });
    },
    onGetMessage(messages, user) {
        let msgData = messages.reverse();
        let messagelist = [];
        let type = "income";
        for (const message of msgData) {
            if (message.sender._id === user.userId) {
                type = "outcome";
            } else type = "income";
            messagelist.push({
                type,
                id: message._id,
                message: message.message,
                sender: message.sender,
                receiver: message.receiver,
                created: message.createdAt,
            });
        }
        commit({ messages: messagelist });
    },

    initActive() {
        let unreadUser = window.localStorage.getItem("unreadUser");
        if (unreadUser) {
            unreadUser = JSON.parse(unreadUser);
            commit({ unreadUser });
        }
    },
});
