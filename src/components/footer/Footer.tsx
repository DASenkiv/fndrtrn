import {FC} from "react";

export const Footer: FC = () => {
    return (<footer><div><strong>fndrtrn.com</strong> - сервис для поиска потерянных и найденных вещей. Здесь вы можете разместить информацию о потерянных или найденных вещах бесплатно.</div>
        <div>Проект существует и разрабатывается на некоммерческой основе в свободное время, поэтому <strong>нестабилен в выходные и вечернее время.</strong></div>
    <div>Если вы желаете помочь проекту в развитии, то можете перевести средства:
    <ul>
        <li>Без комиссии (тут будет номер карты) (Альфа-Банк)</li>
        <li>
            <a target={'_blank'}>Через ЮMoney (карты МИР, Visa, ЮMoney и т. д., иностранные карты под вопросом), коммиссия будет у владельца сайта</a></li>
        <li>Через другой сервис (иностранные карты под вопросом, но вероятность успеха больше)</li>
    </ul>
        Также если вы обладаете экспертизой в области разработки (frontend - ReactJS, backend - NodeJS), QA, AT, аналитики или администрирования серверов и готовы помочь, то напишите мне на почту <a href={'mailto:fndrtrn@mail.ru'}>fndrtrn@mail.ru</a>
    </div>
        <div>fndrtrn © {new Date().getFullYear()}</div>
    </footer>)
}