import React from 'react';

const Main = React.lazy(() => import('@components/pages/main/Main'));
const Login = React.lazy(() => import('@components/pages/login/Login'));
const Register = React.lazy(() => import('@components/pages/register/register'));


type TypeRoutes = {
    path:string
    component:React.FC
}

export const authRoutes:TypeRoutes[] = [
    
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
]

export const defaultRoutes:TypeRoutes[] = [
    
    {
        path:'/',
        component:Main
    },
]


