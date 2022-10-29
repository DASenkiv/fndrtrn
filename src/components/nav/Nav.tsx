import {FC} from "react";

import './style.css'

export const Nav: FC = () => {
    return (<nav className={'nav'}>
        <a href={''}>Главная</a>
        <a href={''}>Потерянные вещи</a>
        <a href={''}>Найденные вещи</a>
        <a href={''}>Мой профиль</a>
        <a href={''}>О проекте</a>
    </nav>)
}