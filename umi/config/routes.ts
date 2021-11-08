export default [
    {
        component: '@/layout/mgmt',
        exact: true,
        flatMenu: true,
        routes: [
            {
                path: '/',
                name: '欢迎',
                component: 'index',
            },
            {
                name: '用户管理',
                path: '/user',
                routes: [
                    {
                        path: '/user/login',
                        name: '登录',
                        component: 'user/login',
                    },
                    {
                        path: '/user/add',
                        name: '添加用户',
                        component: '@/pages/user/add',
                    },
                    {
                        path: '/user/list',
                        name: '用户列表',
                        component: '@/pages/user/list',
                    },
                ]
            },
            {
                name: '权限管理',
                path: '/auth',
                routes: [
                    {
                        path: '/auth/list',
                        name: '权限列表',
                        component: '@/pages/auth/list',
                    },
                    {
                        path: '/auth/role',
                        name: '角色管理',
                        component: '@/pages/auth/role',
                    },
                ]
            },
        ]
    },
    {
        // flatMenu: true,
        component: '@/layout/base',
        routes: [
            {
                path: '/login',
                name: '欢迎',
                component: '@/pages/user/login',
            }
        ]
    }
];
// export default [
//     {
//         name: '用户管理',
//         path: '/user',
//         component: '@/layout/mgmt',
//         routes: [
//             // {
//             //     path: '/user/login',
//             //     name: '登录',
//             //     component: 'user/login',
//             // },
//             {
//                 path: '/user/add',
//                 name: '添加用户',
//                 component: '@/pages/user/add',
//             },
//             {
//                 path: '/user/list',
//                 name: '用户列表',
//                 component: '@/pages/user/list',
//             },
//             {
//                 path: '/user/:method',
//                 name: '登录',
//                 component: 'user/$method',
//             },
//         ]
//     },
//     {
//         name: '权限管理',
//         path: '/auth',
//         routes: [
//             {
//                 path: '/auth/list',
//                 name: '权限列表',
//                 component: '@/pages/auth/list',
//             },
//             {
//                 path: '/auth/role',
//                 name: '角色管理',
//                 component: '@/pages/auth/role',
//             },
//         ]
//     },
//     {
//         path: '/login',
//         component: '@/pages/user/$method'
//     },
//     {
//         component: './404',
//     },
// ];