import Image from "next/image"
import Link from "next/link"
import { RiHome3Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import './Hader.css'
import { Roboto } from 'next/font/google'
import { SiAboutdotme } from "react-icons/si";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500'
})

const Hader: React.FC = () => {
    return (
        <div className="fixed">
            <div className="lent">
                <div className="button-Head">
                    <div className="text">
                        <div className="but">
                            <div className="Img-had">
                                <RiHome3Line style={{ color: 'wheat' }} />
                                <button className={roboto.className}>
                                    Главная
                                </button>
                            </div>
                        </div>
                        <div className="but" >
                            <div className="">
                                <LuSearch style={{ color: 'wheat' }} className="Img-had" />
                                <button className={roboto.className}>
                                    Поиск
                                </button>
                            </div>
                        </div>
                        <div className="but" >
                            <div className="">
                                <SiAboutdotme style={{ color: 'wheat' }} className="Img-had" />
                                <button className={roboto.className}>
                                    О нас
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hader