import {FC} from "react";
import {DonateBlock} from "../donate-block";
import {Layout} from 'antd'
import {AboutCommon} from "../about";
import {Link} from "react-router-dom";

import './styles.css'


export const Footer: FC = () => {
    return (<footer className={'app_container'}>
        <hr/>
        <div><Link to={'/'} className={'link_a'}>fndrtrn.com</Link> - сервис для поиска потерянных и найденных вещей.
            Здесь вы можете разместить информацию о потерянных или найденных вещах бесплатно.
        </div>
        <AboutCommon/>
        <DonateBlock/>
        <div className={'footer_copyright'}><Link to={'/'} className={'link_a'}>fndrtrn.com</Link> - сервис для поиска
            пропавших и найденных вещей, бюро находок © 2019 - {new Date().getFullYear()}</div>
    </footer>)
}