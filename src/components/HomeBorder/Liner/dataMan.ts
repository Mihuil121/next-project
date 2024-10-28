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
    description: "Портфолио UI/UX-дизайнера с проектами мобильных и веб-приложений",
    firstName: "Анна",
    lastName: "Сидорова",
    position: "UI/UX Designer",
    age: 27,
    image:photo1
  },
  {
    fileName: "project_proposal_ivan_ivanov.docx",
    description: "Предложение нового проекта, включающее план развития и стратегии",
    firstName: "Иван",
    lastName: "Иванов",
    position: "Project Manager",
    age: 40,
    image:photo1
  },
  {
    fileName: "code_samples_maria_kuznetsova.zip",
    description: "Архив с примерами кода на Node.js и Python для бэкенд-разработки",
    firstName: "Мария",
    lastName: "Кузнецова",
    position: "Backend Developer",
    age: 29,
    image:photo11
  },
  {
    fileName: "resume_alexey_petrov.docx",
    description: "Резюме на должность старшего фронтенд-разработчика с 7-летним опытом",
    firstName: "Алексей",
    lastName: "Петров",
    position: "Senior Frontend Developer",
    age: 32,
    image:photo1
  },
  {
    fileName: "data_analysis_darya_fedorova.xlsx",
    description: "Отчёт по анализу данных для компании",
    firstName: "Дарья",
    lastName: "Федорова",
    position: "Data Analyst",
    age: 26,
    image:photo1
  },
  {
    fileName: "devops_plan_sergey_smirnov.pdf",
    description: "План развития инфраструктуры DevOps",
    firstName: "Сергей",
    lastName: "Смирнов",
    position: "DevOps Engineer",
    age: 34,
    image:photo2
  },
  {
    fileName: "qa_checklist_victoria_lebedeva.docx",
    description: "Чек-лист для тестирования веб-приложения",
    firstName: "Виктория",
    lastName: "Лебедева",
    position: "QA Specialist",
    age: 28,
    image:photo2
  },
  {
    fileName: "product_overview_nikolay_morozov.pptx",
    description: "Обзор продукта и стратегия маркетинга",
    firstName: "Николай",
    lastName: "Морозов",
    position: "Product Manager",
    age: 35,
    image:photo2
  },
  {
    fileName: "scrum_guide_oleg_popov.pdf",
    description: "Руководство по Scrum для команды разработки",
    firstName: "Олег",
    lastName: "Попов",
    position: "Scrum Master",
    age: 33,
    image:photo2
  },
  {
    fileName: "hr_guide_ekaterina_vasileva.docx",
    description: "Руководство по найму и адаптации персонала",
    firstName: "Екатерина",
    lastName: "Васильева",
    position: "HR Specialist",
    age: 30,
    image:photo3
  },
  {
    fileName: "marketing_plan_andrey_kuzmin.pdf",
    description: "План по продвижению продукта на рынке",
    firstName: "Андрей",
    lastName: "Кузьмин",
    position: "Marketing Specialist",
    age: 31,
    image:photo3
  },
  {
    fileName: "customer_analysis_mikhail_romanov.xlsx",
    description: "Анализ поведения клиентов и их предпочтений",
    firstName: "Михаил",
    lastName: "Романов",
    position: "Business Analyst",
    age: 36,
    image:photo3
  },
  {
    fileName: "project_schedule_valeria_grigorieva.xlsx",
    description: "График выполнения задач для проекта",
    firstName: "Валерия",
    lastName: "Григорьева",
    position: "Project Coordinator",
    age: 29,
    image:photo10
  },
  {
    fileName: "test_cases_artem_golubev.docx",
    description: "Описание тест-кейсов для новой версии продукта",
    firstName: "Артем",
    lastName: "Голубев",
    position: "QA Engineer",
    age: 27,
    image:photo4
  },
  {
    fileName: "design_mockups_olga_petrova.pdf",
    description: "Макеты страниц для веб-приложения",
    firstName: "Ольга",
    lastName: "Петрова",
    position: "Web Designer",
    age: 25,
    image:photo9
  },
  {
    fileName: "backend_docs_alexey_zhukov.pdf",
    description: "Документация для API бэкенда",
    firstName: "Алексей",
    lastName: "Жуков",
    position: "Backend Developer",
    age: 30,
    image:photo4
  },
  {
    fileName: "client_feedback_maria_ermakova.docx",
    description: "Обратная связь от клиентов о продукте",
    firstName: "Мария",
    lastName: "Ермакова",
    position: "Customer Success Manager",
    age: 28,
    image:photo4
  },
  {
    fileName: "social_media_content_irina_sokolova.pdf",
    description: "План публикаций для социальных сетей",
    firstName: "Ирина",
    lastName: "Соколова",
    position: "Social Media Manager",
    age: 26,
    image:photo4
  },
  {
    fileName: "financial_report_dmitry_ivanov.xlsx",
    description: "Финансовый отчёт за квартал",
    firstName: "Дмитрий",
    lastName: "Иванов",
    position: "Financial Analyst",
    age: 35,
    image:photo5
  },
  {
    fileName: "training_materials_anna_orlova.pdf",
    description: "Учебные материалы для новой команды",
    firstName: "Анна",
    lastName: "Орлова",
    position: "Training Specialist",
    age: 32, 
    image:photo5
  },
  {
    fileName: "design_system_roman_frolov.pptx",
    description: "Презентация новой дизайн-системы компании",
    firstName: "Роман",
    lastName: "Фролов",
    position: "Lead Designer",
    age: 34,
    image:photo8
  },
  {
    fileName: "user_survey_kirill_novikov.docx",
    description: "Опрос пользователей о качестве сервиса",
    firstName: "Кирилл",
    lastName: "Новиков",
    position: "User Researcher",
    age: 29,
    image:photo5
  },
  {
    fileName: "app_prototype_veronika_tikhonova.pdf",
    description: "Прототип мобильного приложения",
    firstName: "Вероника",
    lastName: "Тихонова",
    position: "Product Designer",
    age: 27,
    image:photo5
  },
  {
    fileName: "legal_docs_alexandra_tarasova.pdf",
    description: "Юридическая документация проекта",
    firstName: "Александра",
    lastName: "Тарасова",
    position: "Legal Advisor",
    age: 39,
    image:photo5

  },
  {
    fileName: "product_specs_yuri_soloviev.docx",
    description: "Технические спецификации для продукта",
    firstName: "Юрий",
    lastName: "Соловьев",
    position: "Technical Writer",
    age: 31,
    image:photo10
  },
  {
    fileName: "competitor_analysis_diana_pavlova.xlsx",
    description: "Анализ конкурентов на рынке",
    firstName: "Диана",
    lastName: "Павлова",
    position: "Market Analyst",
    age: 28,
    image:photo6
  },
  {
    fileName: "security_audit_vitaly_ermolov.pdf",
    description: "Аудит безопасности приложения",
    firstName: "Виталий",
    lastName: "Ермолов",
    position: "Security Specialist",
    age: 35,
    image:photo6
  },
  {
    fileName: "client_pitch_evgeniya_ivanova.pptx",
    description: "Презентация для клиентов о возможностях продукта",
    firstName: "Евгения",
    lastName: "Иванова",
    position: "Sales Manager",
    age: 33,
    image:photo6
  },
  {
    fileName: "design_guidelines_vasiliy_smirnov.pdf",
    description: "Руководство по визуальному стилю компании",
    firstName: "Василий",
    lastName: "Смирнов",
    position: "Art Director",
    age: 37,
    image:photo6
  },
  {
    fileName: "customer_profile_nataliya_belova.docx",
    description: "Описание целевого клиента",
    firstName: "Наталия",
    lastName: "Белова",
    position: "Customer Analyst",
    age: 29,
    image:photo7
  },
]