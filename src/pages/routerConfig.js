

const Index = () => import('./container/index/index');
const Login = () => import('./container/login/login');
const Action = () => import('./container/action/action');
const User = () => import('./container/user/user');
const Info = () => import('./container/user/info');

const config = [
    {
        path: '/index',
        title: '首页',
        name: 'index',
        component: Index
    },
    {
        path: '/login',
        title: '登录',
        name: 'login',
        component: Login
    },
    {
        path: '/Action',
        title: '活动',
        name: 'action',
        component: Action
    },
    {
        path: '/user',
        title: '用户中心',
        name: 'user',
        component: User,
        children: [{
            path: '/user/info',
            title: '用户详情',
            name: 'info',
            component: Info
        }]
    },
    {
        path: '*',
        title: '首页',
        component: Index,
        name: 'index',
    }
]

export default config;