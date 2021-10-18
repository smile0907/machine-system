import loadable from 'react-loadable';
import Index from '../views/Index';
import LoadPageIcon from '../components/common/LoadPageIcon';

export default [
    {
        path: '/index',
        exact: true,
        component: Index,
    },
    {
        path: '/',
        exact: true,
        component: loadable({
            loader: () => import('../views/dashboard'),
            loading: LoadPageIcon,
        }),
    },
    {
        path: '/map',
        exact: true,
        component: loadable({
            loader: () => import('../views/map'),
            loading: LoadPageIcon,
        }),
    },
    {
        path: '/map_edit',
        exact: true,
        component: loadable({
            loader: () => import('../views/map/edit'),
            loading: LoadPageIcon,
        }),
    },
    {
        path: '/chart',
        exact: true,
        component: loadable({
            loader: () => import('../views/Chart'),
            loading: LoadPageIcon,
        }),
    },
];
