import {FC} from "react";

import './styles.css'

export const Search: FC = () => {
    return (<div className={'search_block'}><input className={'search_input'} type={'search'} disabled
                                                   placeholder={'Введите текст для поиска (от 3 символов) - В РАЗРАБОТКЕ'}/></div>)
}