import {FC} from "react";
import {PageHeader} from 'antd'
import {Layout} from 'antd'

import {Nav} from "../nav";
import './style.css'
import '../../App.css'
import logo from './favicon_32_32.png'
import {Link} from "react-router-dom";

export const Header: FC = () => {
    return (
        <header className={'header_new '}>
            <div className={'header_wrapper app_container'}>
                    <Link to={'/'}  className={'header_logo'}>
                        <img width={32} height={32} src={logo} alt="поиск потерянных и найденных вещей"/>
                        <h2>fndrtrn</h2>
                    </Link>
                <Nav/>
            </div>

        </header>
    )
}