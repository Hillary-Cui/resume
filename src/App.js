import React from 'react'
import{useRoutes,useInRouterContext} from 'react-router-dom'
import routes from './routes'
import './css/index.css'


export default function App(){
    const element = useRoutes(routes);
    console.log(useInRouterContext()); // true 当没有被路由包裹（在<BrowserRoute> 外的组件）就会为false
    return (
        <div>
            <div >
              <div >
                {element}
              </div>
            </div>
        
        </div>
      )
}