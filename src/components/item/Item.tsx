import {FC} from "react";
import './styles.css'



export type TItem = {
    id: number,
    title: string,
    img: string,
    city: string,
    date: string,
    desc: string,
}

export const Item: FC<TItem> = ({id, title, img, city,date, desc}) => {
    return (<div className={'item'}>
        <a href={''}>#{id}</a>
        <h2>{title}</h2>
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div>{city}</div>
            <div>{date}</div>
        </div>
        <img src={img} alt={title} width={300} height={300}/>
        <div>{desc}
        </div>
        <button>Это моя</button>
    </div>)
}