import {FC} from "react";
import {DonateBlock} from "../donate-block";
import {Layout} from 'antd'
import {AboutCommon} from "../about";


export const Footer: FC = () => {
    return (<Layout.Footer>
        <hr/><div><strong>fndrtrn.com</strong> - сервис для поиска потерянных и найденных вещей. Здесь вы можете разместить информацию о потерянных или найденных вещах бесплатно.</div>
        <AboutCommon/>
        <DonateBlock/>
        <div>fndrtrn © 2019 - {new Date().getFullYear()}</div>
    </Layout.Footer>)
}