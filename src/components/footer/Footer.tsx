import {FC} from "react";
import {DonateBlock} from "../donate-block";
import {Layout} from 'antd'

export const Footer: FC = () => {
    return (<Layout.Footer>
        <hr/><div><strong>fndrtrn.com</strong> - сервис для поиска потерянных и найденных вещей. Здесь вы можете разместить информацию о потерянных или найденных вещах бесплатно.</div>
        <div>Проект существует и разрабатывается на некоммерческой основе в свободное время, поэтому <strong>нестабилен в выходные и вечернее время.</strong></div>
   <DonateBlock/>
        <div>fndrtrn © 2019 - {new Date().getFullYear()}</div>
    </Layout.Footer>)
}