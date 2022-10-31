import {ExternalType, ItemType, TItem} from "../item/Item";

export const ITEMS_MOCK: TItem[] = [
    {
        id: 4,
        title: 'Утерян телефон Samsung',
        city: 'г. Ликино-Дулёво',
        date: '31.10.2022',
        desc: 'Сегодня утром возле гимназии ребенком утерян телефон Samsung,нашедшему большая просьба вернуть за вознаграждение.',
        type: ItemType.Lost,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-61650430_704938'
    },
    {
        id: 5,
        title: 'Найден телефон Самсунг.',
        city: 'г. Ликино-Дулёво',
        date: '31.10.2022',
        desc: 'Найден телефон Самсунг. Не успела взять трубку, от звонившей мамы потерявшего.',
        type: ItemType.Found,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-61650430_704937'
    },
    {
        id: 6,
        title: 'Утеряно портмоне c правами',
        city: 'г. Ликино-Дулёво',
        date: '30.10.2022',
        desc: 'Утеряно такое портмоне ,с правами\n' +
            'На имя Соболев И.Н\n' +
            'Если кто-то нашёл ,ПРОСЬБА ОТКЛИКНУТЬСЯ',
        type: ItemType.Lost,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-61650430_704875',
        img: 'https://sun1-30.userapi.com/impg/C4iPREj71vV490NzNKA5JhEFCOA94TGJ818i3A/yJhoMCCFi4s.jpg?size=812x797&quality=95&sign=b4ea31c2ecb7fab399719f4c457c5208&type=album'
    },
    {
        id: 7,
        title: 'Утерян игрушечный кот Басик',
        city: 'п. Новосемейкино',
        date: '31.10.2022',
        desc: 'Здравствуйте! ПОМОГИТЕ, пожалуйста!\n' +
            '29 октября на улице Рудничная 16 А в районе 6 подъезда был утерян игрушечный кот Басик ( кот без усов). Ребёнок очень привязан к игрушке. Очень сильно переживает.\n' +
            'Нашедшим, большая просьба связаться с нами по тел.: 89022373082',
        type: ItemType.Lost,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-89560997_12205',
        img: 'https://sun9-20.userapi.com/impg/s3tSuLa4wfZDECA_VnvJ9kQV9Ij3jSpfJMeSeA/QNToi-JrQts.jpg?size=542x1080&quality=95&sign=b9c2c32e2af1d7f9c31354acb1ec57b5&type=album'
    },
    {
        id: 8,
        title: 'Утерян номерной знак 748',
        city: 'с. Булгаково',
        date: '31.10.2022',
        desc: '31.10 Утерян номерной знак 748 , может кто нашел или видел.\n' +
            'По дороге НБ - Школьная.',
        type: ItemType.Lost,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-172641979_68065',
    },
    {
        id: 9,
        title: 'Утеряна маленькая черная женская сумка',
        city: 'г. Северодвинск',
        date: '28.10.2022',
        desc: 'В привокзальном районе (начало у. Тимме) в ночь с 28 на 29 октября была утеряна маленькая черная женская сумка, с цепочкой. В сумке находились личные вещи, а так же паспорт. Нашедшего просьба вернуть за вознаграждение',
        type: ItemType.Lost,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-158472461_25001',
    },
    {
        id: 10,
        title: 'Найдено водительское удостоверение',
        city: 'г. Санкт-Петербург',
        date: '31.10.2022',
        desc: 'найдено водительское удостоверение\n' +
            'писать в лс за возвратом\n' +
            'Трегубов\n' +
            'Сергей\n' +
            'Викторович',
        type: ItemType.Found,
        isExternal: true,
        externalType: ExternalType.Vk,
        externalLink: 'https://vk.com/wall-63705296_403364',
        img: 'https://sun1-29.userapi.com/impg/owe6149QdGlTTcsGUOxitmgezgl_rYUj1HoqMw/iqe5s1CTrvo.jpg?size=1080x485&quality=96&sign=a70e8ac124edc35ca124482512f610ba&type=album'
    }
]