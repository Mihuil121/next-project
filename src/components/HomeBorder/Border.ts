import photo from '../../Img/Designer1.jpeg'
import photo1 from '../../Img/Designer.jpeg'
import { StaticImageData } from 'next/image'

export interface Iimg {
    img: StaticImageData,
    text: string
}

export interface Itext {
    text:string
}

export const img: Iimg[] = [
    {
        img: photo,
        text: 'Designer(1)'
    }, {
        img: photo1,
        text: 'Designer'
    },
]

export const text:Itext[] = [
    {
        text: 'find the best employees'
    }, {
        text: `Our recruitment platform, which perfectly automates
            interview scheduling so that you can focus on finding talent.`
    }
]

