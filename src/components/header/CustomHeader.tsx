import {FC} from "react";
import {PageHeader} from 'antd'
import {Layout} from 'antd'

import {Nav} from "../nav";
import './style.css'
import logo from './favicon_256_256.png'
import {Link} from "react-router-dom";

export const CustomHeader: FC = () => {
    return (
        <PageHeader>
            <div className={'header_wrapper'}>
            <Link to={'/'} className={'header_wrapper'} >
                <img width={100} height={100} src={logo} alt="Логотип сайта"/>
                <h2 style={{width: '50%'}}>fndrtrn.com - сервис для поиска потерянных и найденных вещей</h2>
            </Link>
            <Nav/>
            </div>

        </PageHeader>
    )
}