import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
const Main = lazy(()=> import('../pages/Main/Main'));
const Server = lazy(() => import('../pages/server/Server'))
const Info = lazy(() => import('../pages/info/Info.jsx'))
const My = lazy(() => import('../pages/my/My.jsx'))

import Tabbuttom from '../components/tabbuttom/Tabbuttom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes:[
        {
            path:'/',
            exact: true,
            render: () => < Redirect to = { "/home" }/>,
        },
        {
            path:'/home',
            component: Tabbuttom,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main),
                },
                {
                    path: '/home/server',
                    component: SuspenseComponent(Server),
                },
                {
                    path: '/home/info',
                    component: SuspenseComponent(Info),
                },
                {
                    path: '/home/my',
                    component: SuspenseComponent(My),
                }
            ]
        }
    ]
}]

