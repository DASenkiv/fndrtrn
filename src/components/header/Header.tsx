import {FC} from "react";

import {Nav} from "../nav";
import './style.css'
import logo from './favicon_256_256.png'

export const Header: FC = () => {
    return (
        <header className={'header'}>
            <div className={'main_header'}>
                <div className={'header_wrapper'}>
                    <img width={100} height={100} src={logo} alt="Логотип сайта"/>
                    <h2>fndrtrn.com - сервис для поиска потерянных и найденных вещей</h2>
                </div>
            </div>
            <Nav/>
        </header>
    )
}