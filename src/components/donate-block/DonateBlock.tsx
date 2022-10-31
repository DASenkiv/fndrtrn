import {FC} from "react";

type TDonate = {
    showInfoDevelopers?: boolean
}

export const DonateBlock: FC<TDonate> = ({showInfoDevelopers}) => {
    return ( <div>Если вы желаете помочь проекту в развитии, то можете перевести средства:{' '}
                <a target={'_blank'} href={'https://yoomoney.ru/to/4100116991933110'}>через ЮMoney (карты МИР, Visa, Mastercard, ЮMoney, UnionPay, только российские карты),</a> коммиссия будет у владельца сайта.
        <div>Средства пойдут на оплату серверов, разработки, администрирования. Спасибо!</div>
        {showInfoDevelopers && <div>Также, если вы обладаете экспертизой в области разработки (frontend - ReactJS, backend - NodeJS), QA, AT, аналитики или администрирования серверов и готовы помочь, то напишите мне на почту <a href={'mailto:fndrtrn@mail.ru'}>fndrtrn@mail.ru</a></div>}
    </div>)
}