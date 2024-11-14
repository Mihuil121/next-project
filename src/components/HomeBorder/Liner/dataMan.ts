import photo1 from '../../../Img/piople/Designer.jpeg'
import photo2 from '../../../Img/piople/Designer2.jpeg'
import photo3 from '../../../Img/piople/Designer3.jpeg'
import photo4 from '../../../Img/piople/Designer4.jpeg'
import photo5 from '../../../Img/piople/Designer5.jpeg'
import photo6 from '../../../Img/piople/Designer6.jpeg'
import photo7 from '../../../Img/piople/Designer7.jpeg'
import photo8 from '../../../Img/piople/Designer8.jpeg'
import photo9 from '../../../Img/piople/Designer9.jpeg'
import photo10 from '../../../Img/piople/Designer10.jpeg'
import photo11 from '../../../Img/piople/Designer11.jpeg'
import { StaticImageData } from 'next/image'

export interface Idata{
  fileName:string,
  description:string,
  firstName:string,
  lastName:string,
  position:string,
  age:number,
  image:StaticImageData
}


export const data: Idata[] = [
  {
  fileName: "portfolio_ekaterina_nikolaeva.pdf",
    description: "Креативный веб-дизайнер с опытом работы в создании уникальных интерфейсов для мобильных и веб-приложений. Я стремлюсь к тому, чтобы каждый проект был не только красивым, но и функциональным, обеспечивая отличный пользовательский опыт.",
    firstName: "Екатерина",
    lastName: "Николаева",
    position: "Веб Дизайнер",
    age: 29,
    image: photo2
  },
  {
    fileName: "portfolio_viktor_sokolov.pdf",
    description: "Специалист по цифровому маркетингу с более чем 5-летним опытом работы в SEO и контент-маркетинге. Я разрабатываю стратегии, которые помогают компаниям увеличивать свою видимость в интернете и привлекать новых клиентов.",
    firstName: "Виктор",
    lastName: "Соколов",
    position: "Маркетинг Специалист",
    age: 31,
    image: photo6
  },
  {
    fileName: "portfolio_lyudmila_kovaleva.pdf",
    description: "Опытный проектный менеджер с успешным опытом управления командами и проектами в сфере IT. Я обладаю навыками планирования, организации и контроля выполнения проектов, что позволяет мне достигать поставленных целей в срок.",
    firstName: "Людмила",
    lastName: "Ковалёва",
    position: "Проект Менеджер",
    age: 34,
    image: photo11
  },
  {
    fileName: "portfolio_anton_morozov.pdf",
    description: "Frontend-разработчик с глубокими знаниями JavaScript и React. Я участвовал в разработке нескольких крупных проектов, создавая отзывчивые интерфейсы и оптимизируя производительность приложений.",
    firstName: "Антон",
    lastName: "Морозов",
    position: "Frontend Разработчик",
    age: 28,
    image: photo8
  },
  {
    fileName: "portfolio_nina_fedorova.pdf",
    description: "Специалист по графическому дизайну с опытом работы в создании рекламных материалов и брендинга. Я стремлюсь к тому, чтобы каждый проект был уникальным и отражал индивидуальность клиента.",
    firstName: "Нина",
    lastName: "Фёдорова",
    position: "Графический Дизайнер",
    age: 27,
    image: photo9
  },
  {
    fileName: "portfolio_ivan_kuznetsov.pdf",
    description: "Backend-разработчик с опытом работы в создании высоконагруженных систем. Я специализируюсь на разработке API и интеграции с различными сервисами, создавая надежные и масштабируемые решения для бизнеса.",
    firstName: "Иван",
    lastName: "Кузнецов",
    position: "Backend Разработчик",
    age: 30,
    image: photo3
  }, {
    fileName: "portfolio_olga_smirnova.pdf",
    description: "Специалист по контент-менеджменту с опытом работы в создании и продвижении контента для различных платформ. Я разрабатываю стратегии, которые помогают компаниям привлекать и удерживать клиентов через качественный контент.",
    firstName: "Ольга",
    lastName: "Смирнова",
    position: "Контент Менеджер",
    age: 28,
    image: photo10
  },
  {
    fileName: "portfolio_dmitry_kovalev.pdf",
    description: "Опытный системный администратор с более чем 7-летним стажем работы в IT. Я занимаюсь настройкой и поддержкой серверов, обеспечивая их безопасность и стабильную работу.",
    firstName: "Дмитрий",
    lastName: "Ковалев",
    position: "Системный Администратор",
    age: 35,
    image: photo6
  },
  {
    fileName: "portfolio_tatiana_belova.pdf",
    description: "Креативный арт-директор с опытом работы в рекламных агентствах. Я управляю командой дизайнеров и разрабатываю концепции для рекламных кампаний, которые привлекают внимание и вызывают интерес.",
    firstName: "Татьяна",
    lastName: "Белова",
    position: "Арт Директор",
    age: 32,
    image: photo2
  },
  {
    fileName: "portfolio_alexander_morozov.pdf",
    description: "Специалист по тестированию программного обеспечения с опытом работы в различных проектах. Я провожу тестирование приложений, выявляя и документируя ошибки для их последующего исправления.",
    firstName: "Александр",
    lastName: "Морозов",
    position: "Тестировщик ПО",
    age: 29,
    image: photo8
  },
  {
    fileName: "portfolio_irina_sokolova.pdf",
    description: "Специалист по пользовательскому опыту с опытом работы в UX-дизайне. Я провожу исследования пользователей и тестирования, чтобы улучшить взаимодействие с продуктом и повысить его удобство.",
    firstName: "Ирина",
    lastName: "Соколова",
    position: "UX Дизайнер",
    age: 30,
    image: photo9
  },
  {
    fileName: "portfolio_vladimir_petrov.pdf",
    description: "Опытный бизнес-аналитик с навыками работы в различных отраслях. Я анализирую бизнес-процессы и предлагаю решения для их оптимизации, что позволяет компаниям повышать эффективность.",
    firstName: "Владимир",
    lastName: "Петров",
    position: "Бизнес Аналитик",
    age: 33,
    image: photo3
  }, {
    fileName: "portfolio_anna_ivanova.pdf",
    description: "Специалист по социальным медиа с опытом работы в управлении контентом и взаимодействии с аудиторией. Я разрабатываю стратегии для увеличения вовлеченности и роста подписчиков на различных платформах.",
    firstName: "Анна",
    lastName: "Иванова",
    position: "Социальный Медиа",
    age: 26,
    image: photo2
  },
  {
    fileName: "portfolio_maxim_smirnov.pdf",
    description: "Опытный инженер-программист с глубокими знаниями в области разработки программного обеспечения. Я работал над различными проектами, включая мобильные приложения и веб-сервисы.",
    firstName: "Максим",
    lastName: "Смирнов",
    position: "Инженер Программист",
    age: 30,
    image: photo6
  },
  {
    fileName: "portfolio_darya_kuznetsova.pdf",
    description: "Креативный дизайнер интерьеров с опытом работы в создании уникальных пространств. Я разрабатываю концепции и реализую проекты, которые отражают индивидуальность клиентов.",
    firstName: "Дарья",
    lastName: "Кузнецова",
    position: "Дизайнер Интерьеров",
    age: 28,
    image: photo10
  },
  {
    fileName: "portfolio_andrey_fedorov.pdf",
    description: "Специалист по кибербезопасности с опытом работы в защите информационных систем. Я анализирую уязвимости и разрабатываю стратегии для защиты данных от угроз.",
    firstName: "Андрей",
    lastName: "Фёдоров",
    position: "Кибербезопасность",
    age: 34,
    image: photo8
  },
  {
    fileName: "portfolio_ekaterina_morozova.pdf",
    description: "Специалист по управлению проектами с опытом работы в различных отраслях. Я координирую команды и обеспечиваю выполнение проектов в срок и в рамках бюджета.",
    firstName: "Екатерина",
    lastName: "Морозова",
    position: "Управление Проектами",
    age: 29,
    image: photo9
  },
  {
    fileName: "portfolio_viktor_nikolaev.pdf",
    description: "Опытный аналитик данных с навыками работы с большими объемами информации. Я анализирую данные и предоставляю рекомендации для улучшения бизнес-процессов.",
    firstName: "Виктор",
    lastName: "Николаев",
    position: "Аналитик Данных",
    age: 31,
    image: photo3
  },
]