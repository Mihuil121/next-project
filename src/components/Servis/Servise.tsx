'use client'
import { Icard, card } from "./Servis"
import { Swiper, SwiperSlide, } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import './Style.css'
import { Nunito } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font"
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const ServiseNunito: NextFont = Nunito({
    subsets: ['latin'],
    weight: '500'
})

const ServiseNunito2: NextFont = Nunito({
    subsets: ['latin'],
    weight: '300'
})

const Servise: React.FC = () => {

    const useSwipe = useRef<null | SwiperType>(null)

    const useNext = () => {
        useSwipe.current?.slideNext()
        return;
    }
    const usePrev = () => {
        useSwipe.current?.slidePrev()
    }


    return (
        <div className="widthServise">
            <div className="marginLeft">
                <Swiper
                    onSwiper={(swiper: SwiperType) => {
                        useSwipe.current = swiper;
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={-1050}
                    slidesPerView={1}
                >
                    {card.map((card: Icard, index: number) => (
                        <SwiperSlide key={index} >
                            <div className="cardDiv">
                                <div className="card-board" >
                                    <div className="lable">
                                        <p className={ServiseNunito.className}>
                                            {card.lable}
                                        </p>
                                    </div>
                                    <div className="description">
                                        <p className={ServiseNunito2.className}>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="buttonServise">
                <button onClick={usePrev}>
                    <HiArrowSmLeft className="HiArrowSmLeft" />
                </button>
                <button onClick={useNext}>
                    <HiArrowSmRight className="HiArrowSmRight" />
                </button>
            </div>
        </div>
    )
}

export default Servise