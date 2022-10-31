import {FC} from "react";
import './styles.css'
import {Link} from "react-router-dom";
import {ReactComponent as Location} from "./location.svg";
import {ReactComponent as Calendar} from "./calendar.svg";

export enum ItemType {
    Lost = 'LOST',
    Found = 'FOUND'
}

export enum ExternalType {
    Vk = 'VK'
}

export type TItem = {
    id: number,
    title: string,
    city: string,
    date: string,
    desc: string,
    type: ItemType
    img?: string,
    isExternal?: boolean
    externalType?: ExternalType
    externalLink?: string
}

export const Item: FC<TItem> = ({id, title, img, city, date, desc, type, isExternal, externalType, externalLink}) => {
    return (
        <article className={'item'} style={{borderColor: type === ItemType.Lost ? '#f5c1c1' : '#a6a6e1'}}>
            <Link to={''} className={'item_title'}>#{id} <h2>{title}</h2></Link>

            <div className={'item_content item_margin'}>
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <div><div className={'item_icon'}><Location width={30} height={30}/>{city}</div></div>
                    <div><div className={'item_icon'}><Calendar width={30} height={30}/>{date}</div></div>
                </div>
                {img && <img className={'item_margin item_image'} src={img} alt={title}/>}
                <div className={'item_margin'}>{desc}
                </div>
                {isExternal && <div className={'item_margin'}>Источник: <a href={externalLink} target={'_blank'}>{externalType}</a></div>}
                <button className={'item_button item_margin'}><a href={externalLink} target={'_blank'}>{type === ItemType.Found ? 'Я - потерял' : 'Я - нашел'}</a></button>
            </div>
        </article>)
}