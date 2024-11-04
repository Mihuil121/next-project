import photo1 from '../../Img/backgraund/namber12.jpeg'
import photo2 from '../../Img/backgraund/namber13.jpeg'
import photo3 from '../../Img/backgraund/namber11.jpeg'
import { StaticImageData } from 'next/image'

export interface Icard{
    lable:string,
    photo?: StaticImageData,
    description:string
}

export const card:Icard[] = [
    {
        lable: ' Talent Search',
        photo: photo1,
        description: `
        We specialize in finding the right candidates for your business needs, ensuring a perfect match for your team.
        `
    }, {
        lable: 'Candidate Sorting',
        photo: photo2,
        description: `
        Our service streamlines the hiring process by sorting and filtering candidates based on your specific criteria.
        `
    }, {
        lable: 'Recruitment Consultation',
        photo: photo3,
        description: `
       We offer expert advice on recruitment strategies to help you attract and retain top talent in your industry.
        `
    },
]