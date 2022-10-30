import {FC} from "react";
import {Link} from "react-router-dom";

import './style.css'

export const Nav: FC = () => {
    return (<nav className={'nav'}>
        {/*<Link to={''}>Главная</Link>*/}
        <Link to={'/posts?type=lost'}>Потерянные вещи</Link>
        <Link to={'/posts?type=found'}>Найденные вещи</Link>
        {/*<a href={''} >Мой профиль</a>*/}
        <Link to={'/about'}>О проекте</Link>
    </nav>)
}