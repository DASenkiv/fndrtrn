import {FC} from "react";

import {Search} from "../search";
import {AboutProject} from "../about-project";
import {Items} from "../items";

import {Layout} from 'antd'


export const Main:FC = () => {
    return ( <Layout.Content>
        <AboutProject/>
        <Search/>
        <Items/>
        <div>Main</div>
    </Layout.Content>)
}