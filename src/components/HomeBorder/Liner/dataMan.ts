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
    fileName: "portfolio_anna_sidorova.pdf",
    description: "Портфолио UI/UX-дизайнера с проектами мобильных и веб-приложений. Имею опыт работы с различными клиентами, создавая интуитивно понятные интерфейсы и улучшая пользовательский опыт. Участвовала в разработке нескольких успешных приложений, которые получили положительные отзывы пользователей.",
    firstName: "Анна",
    lastName: "Сидорова",
    position: "UI/UX Designer",
    age: 27,
    image: photo1
  },
  {
    fileName: "portfolio_ivan_petrov.pdf",
    description: "Опытный веб-разработчик с более чем 5-летним стажем в создании адаптивных сайтов. Работал над проектами различной сложности, включая интернет-магазины и корпоративные сайты. Уверенно владею современными технологиями и инструментами, что позволяет мне создавать высококачественные и производительные веб-приложения.",
    firstName: "Иван",
    lastName: "Петров",
    position: "Web Developer",
    age: 30,
    image: photo3
  },
  {
    fileName: "portfolio_elena_ivanova.pdf",
    description: "Специалист по графическому дизайну с опытом работы в крупных рекламных агентствах. Создавала визуальные концепции для различных брендов, разрабатывала рекламные материалы и участвовала в создании уникальных логотипов. Мой опыт позволяет мне находить креативные решения для любых задач.",
    firstName: "Елена",
    lastName: "Иванова",
    position: "Graphic Designer",
    age: 25,
    image: photo2
  },
  {
    fileName: "portfolio_dmitry_smirnov.pdf",
    description: "Frontend-разработчик с глубокими знаниями JavaScript и React, участвовал в нескольких крупных проектах. Мой опыт включает создание отзывчивых интерфейсов и оптимизацию производительности приложений. Я стремлюсь к постоянному обучению и использованию новых технологий для улучшения качества кода.",
    firstName: "Дмитрий",
    lastName: "Смирнов",
    position: "Frontend Developer",
    age: 28,
    image: photo6
  },
  {
    fileName: "portfolio_olga_kuznetsova.pdf",
    description: "Специалист по цифровому маркетингу с успешным опытом работы в SEO и SMM. Разрабатывала стратегии продвижения для различных компаний, что позволило значительно увеличить их видимость в интернете. Мой опыт включает анализ данных и оптимизацию рекламных кампаний для достижения максимальных результатов.",
    firstName: "Ольга",
    lastName: "Кузнецова",
    position: "Digital Marketing Specialist",
    age: 29,
    image: photo10
  },
  {
    fileName: "portfolio_alexey_novikov.pdf",
    description: "Backend-разработчик с опытом работы с Node.js и Python, создавал высоконагруженные системы. Мой опыт включает проектирование архитектуры приложений и работу с базами данных. Я стремлюсь к созданию надежных и масштабируемых решений, которые отвечают требованиям бизнеса.",
    firstName: "Алексей",
    lastName: "Новиков",
    position: "Backend Developer",
    age: 32,
    image: photo7
  },
  {
    fileName: "portfolio_maria_sokolova.pdf",
    description: "UI-дизайнер с акцентом на создание интуитивно понятных интерфейсов для мобильных приложений. Мой опыт включает работу с различными платформами и создание дизайнов, которые улучшают взаимодействие пользователей с продуктом. Я всегда стремлюсь к тому, чтобы мои работы были не только красивыми, но и функциональными.",
    firstName: "Мария",
    lastName: "Соколова",
    position: "UI Designer",
    age: 26,
    image: photo9
  }, {
    fileName: "portfolio_nikita_belov.pdf",
    description: "Молодой и амбициозный графический дизайнер, который стремится создавать уникальные визуальные решения. Имею опыт работы с различными проектами, включая брендинг и рекламные кампании. Моя цель — создавать дизайн, который будет не только красивым, но и эффективным.",
    firstName: "Никита",
    lastName: "Белов",
    position: "Graphic Designer",
    age: 26,
    image: photo7
  },
  {
    fileName: "portfolio_katerina_smirnova.pdf",
    description: "Специалист по веб-дизайну с акцентом на создание удобных и привлекательных интерфейсов. Работала над проектами для стартапов и крупных компаний, что позволило мне развить навыки в области UX/UI. Я всегда стремлюсь к тому, чтобы мои работы соответствовали современным трендам.",
    firstName: "Катерина",
    lastName: "Смирнова",
    position: "Web Designer",
    age: 29,
    image: photo2
  },
  {
    fileName: "portfolio_maxim_ivanov.pdf",
    description: "Опытный разработчик программного обеспечения с более чем 6-летним стажем. Мой опыт включает работу с различными языками программирования и фреймворками. Я увлечен созданием эффективных и надежных приложений, которые решают реальные проблемы пользователей.",
    firstName: "Максим",
    lastName: "Иванов",
    position: "Software Developer",
    age: 31,
    image: photo3
  },
  {
    fileName: "portfolio_olga_kovaleva.pdf",
    description: "Специалист по контент-маркетингу с опытом работы в создании и продвижении контента для различных платформ. Моя работа включает написание статей, создание видеоконтента и управление социальными сетями. Я стремлюсь к тому, чтобы каждый проект был успешным и приносил результаты.",
    firstName: "Ольга",
    lastName: "Ковалёва",
    position: "Content Marketing Specialist",
    age: 28,
    image: photo10
  },
  {
    fileName: "portfolio_andrey_sokolov.pdf",
    description: "Backend-разработчик с опытом работы в создании высоконагруженных систем. Я специализируюсь на разработке API и интеграции с различными сервисами. Мой опыт позволяет мне создавать надежные и масштабируемые решения для бизнеса.",
    firstName: "Андрей",
    lastName: "Соколов",
    position: "Backend Developer",
    age: 34,
    image: photo6
  },
  {
    fileName: "portfolio_tatyana_moroz.pdf",
    description: "UI/UX-дизайнер с опытом работы в стартапах и крупных компаниях. Я создаю интуитивно понятные интерфейсы и провожу исследования пользователей для улучшения их опыта. Мой подход основан на анализе данных и креативном мышлении.",
    firstName: "Татьяна",
    lastName: "Мороз",
    position: "UI/UX Designer",
    age: 27,
    image: photo9
  },
  {
    fileName: "portfolio_vladimir_fedorov.pdf",
    description: "Специалист по цифровому маркетингу с акцентом на SEO и контекстную рекламу. Я разрабатываю стратегии, которые помогают компаниям увеличивать свою видимость в интернете и привлекать новых клиентов. Мой опыт включает анализ данных и оптимизацию рекламных кампаний.",
    firstName: "Владимир",
    lastName: "Фёдоров",
    position: "Digital Marketing Specialist",
    age: 33,
    image: photo8
  },
  {
    fileName: "portfolio_anna_kuznetsova.pdf",
    description: "Специалист по проектному управлению с опытом работы в IT. Я успешно управляю командами и проектами, обеспечивая их выполнение в срок и в рамках бюджета. Мой опыт включает работу с различными методологиями, такими как Agile и Scrum.",
    firstName: "Анна",
    lastName: "Кузнецова",
    position: "Project Manager",
    age: 30,
    image: photo11
  }, {
    fileName: "portfolio_roman_ivanov.pdf",
    description: "Молодой и креативный веб-разработчик, который увлечен созданием современных и функциональных сайтов. Имею опыт работы с различными фреймворками и языками программирования. Моя цель — создавать веб-приложения, которые будут удобны и полезны для пользователей.",
    firstName: "Роман",
    lastName: "Иванов",
    position: "Web Developer",
    age: 26,
    image: photo3
  },
  {
    fileName: "portfolio_daria_smirnova.pdf",
    description: "Специалист по графическому дизайну с опытом работы в создании рекламных материалов и брендинга. Я стремлюсь к тому, чтобы каждый проект был уникальным и отражал индивидуальность клиента. Мой опыт включает работу с различными инструментами дизайна.",
    firstName: "Дарья",
    lastName: "Смирнова",
    position: "Graphic Designer",
    age: 28,
    image: photo2
  },
  {
    fileName: "portfolio_alexey_belov.pdf",
    description: "Опытный разработчик программного обеспечения с акцентом на создание высоконагруженных систем. Я работал над проектами, которые требуют высокой производительности и надежности. Мой опыт включает работу с различными языками программирования и архитектурными подходами.",
    firstName: "Алексей",
    lastName: "Белов",
    position: "Software Developer",
    age: 32,
    image: photo7
  }, {
    fileName: "portfolio_ekaterina_nikolaeva.pdf",
    description: "Креативный веб-дизайнер с опытом работы в создании уникальных интерфейсов для мобильных и веб-приложений. Я стремлюсь к тому, чтобы каждый проект был не только красивым, но и функциональным, обеспечивая отличный пользовательский опыт.",
    firstName: "Екатерина",
    lastName: "Николаева",
    position: "Web Designer",
    age: 29,
    image: photo2
  },
  {
    fileName: "portfolio_viktor_sokolov.pdf",
    description: "Специалист по цифровому маркетингу с более чем 5-летним опытом работы в SEO и контент-маркетинге. Я разрабатываю стратегии, которые помогают компаниям увеличивать свою видимость в интернете и привлекать новых клиентов.",
    firstName: "Виктор",
    lastName: "Соколов",
    position: "Digital Marketing Specialist",
    age: 31,
    image: photo6
  },
  {
    fileName: "portfolio_lyudmila_kovaleva.pdf",
    description: "Опытный проектный менеджер с успешным опытом управления командами и проектами в сфере IT. Я обладаю навыками планирования, организации и контроля выполнения проектов, что позволяет мне достигать поставленных целей в срок.",
    firstName: "Людмила",
    lastName: "Ковалёва",
    position: "Project Manager",
    age: 34,
    image: photo11
  },
  {
    fileName: "portfolio_anton_morozov.pdf",
    description: "Frontend-разработчик с глубокими знаниями JavaScript и React. Я участвовал в разработке нескольких крупных проектов, создавая отзывчивые интерфейсы и оптимизируя производительность приложений.",
    firstName: "Антон",
    lastName: "Морозов",
    position: "Frontend Developer",
    age: 28,
    image: photo8
  },
  {
    fileName: "portfolio_nina_fedorova.pdf",
    description: "Специалист по графическому дизайну с опытом работы в создании рекламных материалов и брендинга. Я стремлюсь к тому, чтобы каждый проект был уникальным и отражал индивидуальность клиента.",
    firstName: "Нина",
    lastName: "Фёдорова",
    position: "Graphic Designer",
    age: 27,
    image: photo9
  },
  {
    fileName: "portfolio_ivan_kuznetsov.pdf",
    description: "Backend-разработчик с опытом работы в создании высоконагруженных систем. Я специализируюсь на разработке API и интеграции с различными сервисами, создавая надежные и масштабируемые решения для бизнеса.",
    firstName: "Иван",
    lastName: "Кузнецов",
    position: "Backend Developer",
    age: 30,
    image: photo3
  }
]