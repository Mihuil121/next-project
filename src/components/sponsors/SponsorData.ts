import photo from '../../Img/sponsor/1.jpeg'
import photo2 from '../../Img/sponsor/2.jpeg'
import phot3 from '../../Img/sponsor/3.jpeg'
import phot4 from '../../Img/sponsor/4.jpeg'
import phot5 from '../../Img/sponsor/5.jpeg'
import phot6 from '../../Img/sponsor/6.jpeg'
import phot7 from '../../Img/sponsor/7.jpeg'
import phot8 from '../../Img/sponsor/8.jpeg'
import phot9 from '../../Img/sponsor/9.jpeg'
import phot10 from '../../Img/sponsor/10.jpeg'
import { StaticImageData } from 'next/image'

export interface ISponsor {
    text:string,
    img:StaticImageData
}

export const sponsor: ISponsor[] = [
    {
        text:'NovaSphere',
        img:photo
    },    {
        text:'EcoVenture',
        img:photo2
    },    {
        text:'Skyline Dynamics',
        img:phot3
    },    {
        text:'Lumina Labs',
        img:phot4
    },    {
        text:'PixelBloom',
        img:phot5
    },    {
        text:'CoreCraft',
        img:phot6
    },    {
        text:'AquaVibe',
        img:phot7
    },    {
        text:'ZenithAI',
        img:phot8
    },    {
        text:'UrbanLeaf',
        img:phot9
    },    {
        text:'IronByte',
        img:phot10
    },
    
]