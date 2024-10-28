'use client'
import HomeBorder, { THomeBorder } from "../HomeBorder/HomeBorder"
import { img, text } from '../HomeBorder/Border'


const Swipers: React.FC= () => {
    return (
        <div>
            <HomeBorder images={img} texts={text} />
        </div>
    )
}

export default Swipers