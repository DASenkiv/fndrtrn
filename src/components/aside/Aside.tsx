import {FC} from "react";
import {Layout} from 'antd'

import './styles.css'

export const Aside: FC = () => {
    return (<aside className={'aside'}> <a href={''}>Мой профиль</a>
        <a href={''}>Я потерял</a>
        <a href={''}>Я нашел</a>
        <a href={''}>Сообщения</a>
        <hr/>
        <a href={''}>Написать в поддержку</a></aside>)
}