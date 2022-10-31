import {FC} from "react";
import {Item} from "../item";
import {useLocation} from "react-router-dom";

import {ITEMS_MOCK} from "./mocks";


export const Items: FC = () => {
    const location = useLocation()
    const type = location.search ? location.search.split('=')[1] : null
    return <>
        {ITEMS_MOCK
            .reverse()
            .filter(item => type ? item.type === type : true)
            .map(item => (<Item key={item.id} {...item}/>))}</>
}