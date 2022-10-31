import {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import cn from 'classnames'

import './style.css'
import {ItemType} from "../item/Item";

const ROUTES = {
    root: '/',
    lost: `/posts?type=${ItemType.Lost}`,
    found: `/posts?type=${ItemType.Found}`,
    about: '/about'
}

export const Nav: FC = () => {
    const location = useLocation()
    const url = location.pathname + location.search;
    return (<nav className={'nav'}>
        <div className={cn('link_wrapper', {'link_active': url === ROUTES.root})}>
            <Link to={ROUTES.root} className={'link'}>Все</Link>
        </div>
        <div className={cn('link_wrapper', {'link_active': url === ROUTES.lost})}>
            <Link to={ROUTES.lost} className={'link'}>Потерянные</Link></div>
        <div className={cn('link_wrapper', {'link_active': url === ROUTES.found})}>
            <Link to={ROUTES.found}
                  className={'link'}>Найденные</Link>
        </div>
        <div style={{marginLeft: '50px'}} className={cn('link_wrapper', {'link_active': url === ROUTES.about})}>
            <Link
                to={ROUTES.about} className={'link'}
            >О проекте</Link></div>
    </nav>)
}