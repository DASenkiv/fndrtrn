import {FC} from "react";
import {Layout} from 'antd'

import './styles.css'

type TAside = {
    isAuth?:boolean
}

export const Aside: FC<TAside> = ({isAuth}) => {
    return (<aside className={'aside'}>
        <div>
            <p>Статистика:</p>
            <p>Найдено: 1</p>
            <p>Потеряно: 2</p>
            <p>Всего: 3</p>
        </div>
        {isAuth &&
            <>
        <a href={''}>Мой профиль</a>
        <a href={''}>Я потерял</a>
        <a href={''}>Я нашел</a>
        <a href={''}>Сообщения</a>
        <hr/>
        <a href={''}>Написать в поддержку</a>
        </>}</aside>)
}