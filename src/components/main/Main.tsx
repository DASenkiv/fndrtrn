import {FC} from "react";

import {Search} from "../search";
import {AboutProject} from "../about-project";
import {Items} from "../items";

import {Layout} from 'antd'


type TMainPage = {
    isRootLocation?: boolean
}
export const Main: FC<TMainPage> = ({isRootLocation}) => {
    return (<div>
        {isRootLocation && <AboutProject/>}
        <Search/>
        <Items/>
    </div>)
}
