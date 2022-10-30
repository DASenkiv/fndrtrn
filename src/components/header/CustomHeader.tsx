import {FC} from "react";
import {PageHeader} from 'antd'
import {Layout} from 'antd'

import {Nav} from "../nav";
import './style.css'
import logo from './favicon_256_256.png'

export const CustomHeader: FC = () => {
    return (
        <PageHeader >

            <div className={'header_wrapper'}>
                <img width={100} height={100} src={logo} alt="Логотип сайта"/>
                <h2 style={{width: '35%'}}>fndrtrn.com - сервис для поиска потерянных и найденных вещей</h2>
                <Nav/>
            </div>

        </PageHeader>
    )
}