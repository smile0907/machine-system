
export default () => ({
    initState: {
        link: [{
            text: 'homepage',
            path: '/',
        }, {
            text: 'feedback',
            path: '/',
        }, {
            text: 'help',
            path: '/',
        }],
        oper: [{
            text: 'User',
            color: '#9ab',
            icon: 'home',
            to: 'user',
        }, {
            text: 'Logout',
            color: '#9ab',
            icon: 'exit_to_app',
            to: 'logout'
        }],
        userName: 'admin',
    },

});