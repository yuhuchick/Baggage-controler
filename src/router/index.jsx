import React, { lazy } from 'react'
import classes from './index.module.css'
import Home from '../pages/Home'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

const FirstPage = lazy(()=>import('../pages/FirstPage'))
const SecondPage = lazy(()=>import('../pages/SecondPage'))
const AlarmSet = lazy(()=>import('../pages/SecondPage/AlarmSet'))
const ThirdPage = lazy(()=>import('../pages/ThirdPage'))
const ForthPage = lazy(()=>import('../pages/ForthPage'))
const FifthPage = lazy(()=>import('../pages/FifthPage'))
const SixthPage = lazy(()=>import('../pages/SixthPage'))
const LoginPage = lazy(()=>import('../pages/LoginPage'))


const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
        size: 'large'
      }}
      spin
    />
  );

  //悬挂组件用于在异步加载数据时显示加载指示器
const withLoadingComponent = (comp) => (
  <React.Suspense fallback={<div className='classes.spinStyle'><Spin indicator={antIcon} /></div>}>{comp}</React.Suspense>
)


const routes = [
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '',
                element: withLoadingComponent(<FirstPage/>),
            },
            {
                path: 'second',
                element: withLoadingComponent(<SecondPage/>),
            },
            {
                path: 'second/set',
                element: withLoadingComponent(<AlarmSet/>)
            },
            {
                path: 'third',
                element: withLoadingComponent(<ThirdPage/>),
            },
            {
                path: 'forth',
                element: withLoadingComponent(<ForthPage/>),
            },
            {
                path: 'fifth',
                element: withLoadingComponent(<FifthPage/>),
            },
            {
                path: 'sixth',
                element: withLoadingComponent(<SixthPage/>),
            },
        ]
    },
    {
        path: '/login',
        element: withLoadingComponent(<LoginPage/>),
    },
]
export default routes