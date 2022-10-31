import {Layout} from 'antd'
import {Routes, Route} from "react-router-dom";

import './style.css'
import '../../App.css'

import {Header} from "../header";
import {Aside} from "../aside";
import {Main} from "../main";
import {Footer} from "../footer";
import {PageInDevelopment} from "../page-in-development";
import {FC} from "react";
import {About} from "../about";




export const Root: FC = () => {
    return (<div className={'root'}>
            <Header/>
            <div className={'main app_container'}>
                {/*<Aside/>*/}
                <Routes>
                    <Route path={'/posts'} element={<Main/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'*'} element={<Main isRootLocation/>}/>
                </Routes>
                {/*<Main/>*/}
            </div>
            <Footer/>
        </div>
    )
}