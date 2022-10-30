import {FC} from "react";

type TDonate = {
    showInfoDevelopers?: boolean
}

export const DonateBlock: FC<TDonate> = ({showInfoDevelopers}) => {
    return ( <div>Если вы желаете помочь проекту в развитии, то можете перевести средства:
        <ul>
            <li>Без комиссии (тут будет номер карты) (Альфа-Банк)</li>
            <li>
                <a target={'_blank'}>Через ЮMoney (карты МИР, Visa, ЮMoney и т. д., иностранные карты под вопросом), коммиссия будет у владельца сайта</a></li>
            <li>Через другой сервис (иностранные карты под вопросом, но вероятность успеха больше)</li>
        </ul>
        {showInfoDevelopers && <>Также, если вы обладаете экспертизой в области разработки (frontend - ReactJS, backend - NodeJS), QA, AT, аналитики или администрирования серверов и готовы помочь, то напишите мне на почту <a href={'mailto:fndrtrn@mail.ru'}>fndrtrn@mail.ru</a></>}
    </div>)
}