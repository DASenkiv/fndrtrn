import './style.css'

import {Header} from "../header";
import {Aside} from "../aside";
import {Main} from "../main";
import {Footer} from "../footer";

export const Root = () => {
    return (<>
            <Header/>
            <div className={'main'}>
                <Aside/>
               <Main/>
            </div>
            <Footer/>
        </>
    )
}