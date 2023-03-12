import {Navigate} from 'react-router-dom'
import Start from '../pages/Start'
import Home from '../pages/Home'
import About from '../pages/About'
import Portofolio from '../pages/Portfolio'
import Message from '../pages/Message'
import Loading from '../pages/Loading'
import All from '../components/All'
import Html from '../components/Html'
import Blender from '../components/Blender'
import Unity from '../components/Unity'
import Model from '../pages/Model'
import Vr from '../pages/VR'
import Search from '../pages/Search'
import Calculator from '../pages/Calculator'
import Game from '../pages/Game'
import List from '../pages/List'


const route =[
    {
        // 默认页面
        path:'/',
        element:<Navigate to="/start" />
    },
    {
        // 默认页面
        path:'/portofolio',
        element:<Navigate to="all" />
    },
    {
        path:'/start',
        element:<Start />
    },
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/loading',
        element:<Loading />
    },
    {
        path:'/portofolio',
        element:<Portofolio />,
        children: [
            {
                path:'all',
                element:<All/>,
            },
            {
                path:'html',
                element:<Html />,
            },
            {
                path:'blender',
                element:<Blender />,
            },
            {
                path:'unity',
                element:<Unity />,
            }
        ]
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/message',
        element:<Message />
    },
    {
        path:'/model',
        element:<Model />
    },
    {
        path:'/vr',
        element:<Vr />
    },
    {
        path:'/list',
        element:<List />
    },
    {
        path:'/game',
        element: <Game />
    },
    {
        path:'/search',
        element: <Search />
    },
]
export default route;

