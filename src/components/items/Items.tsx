import {FC} from "react";
import {Item} from "../item";
import {TItem} from "../item/Item";

import card from './card.png'
import bike from './2.jpg'
import cellPh from './3.png'

const ITEMS_MOCK: TItem[] = [
    {
    id: 1,
    title: 'Найдена банковская карта',
    img: card,
    city: 'г. Москва',
    date: new Date().toLocaleDateString('ru') ,
    desc: 'Найдена банковская карта с номером 4488 на имя ИМЯ ФАМИЛИЯ\n' +
        '            Отдам владельцу',
},
    {
    id: 2,
    title: 'Потерян велосипед',
    img: bike,
    city: 'г. Нижний Новгород',
    date: new Date().toLocaleDateString('ru') ,
    desc: 'Потерял велосипед, пока праздновал выпускной с друзьями, районы Сормовский и Канавино',
},
    {
    id: 3,
    title: 'Найден телефон',
    img: cellPh,
    city: 'г. Санкт-Петербург',
    date: new Date().toLocaleDateString('ru') ,
    desc: 'Нашел телефон, возможно, пенсионерки, разряжен, зарядить нечем',
}
]

export const Items: FC = () => {
    return <>
        {ITEMS_MOCK.map(item => (<Item key={item.id} {...item}/>))}</>
}