import {Layout} from 'antd'

import './style.css'

import {CustomHeader} from "../header";
import {Aside} from "../aside";
import {Main} from "../main";
import {Footer} from "../footer";

export const Root = () => {
    return (<Layout>
            <CustomHeader/>
            <div className={'main'}>
                <Aside/>
               <Main/>
            </div>
            <Footer/>
        </Layout>
    )
}