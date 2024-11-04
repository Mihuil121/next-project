'use client'
import { Iimg, Itext } from './Border';
import './BorderH.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Lato } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';


export type THomeBorder = {
    images: Iimg[];
    texts: Itext[];
};

const LatoF: NextFont = Lato({
    subsets: ['latin'],
    weight: '300'
})

const HomeBorder: React.FC<THomeBorder> = ({ images, texts }) => {
    const [useClick, stateClick] = useState<boolean>(false)
    const [indexUse, useIndex] = useState<number>(0)
    const swipRef = useRef<null | SwiperType>(null)

    const useClickNext = () => {
        if (useClick) return;
        !swipRef.current ? console.log('err') : (swipRef.current.slideNext(), useIndex((prevIndex) => (prevIndex + 1)), stateClick(true))
        return;
    };
    const useClickPrev = () => {
        if (!useClick) return;
        !swipRef.current ? console.log('err') : (swipRef.current?.slidePrev(), useIndex((prevIndex) => (prevIndex - 1)), stateClick(false))
        return;
    };

    return (
        <div>
            <div className="HomeBorder">
                <Swiper
                    onSwiper={(swiper:SwiperType) => {
                        swipRef.current = swiper;
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {images.map((image: Iimg, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="bord">
                                <div className='bord1' style={{ backgroundImage: ` url(${image.img.src}) ` }}>
                                    <div className="border">
                                        <div style={{ marginTop: '0rem' }}>
                                            <div className="buttonColor">
                                                <button className={index === 0 ? 'next2' : 'next'} onClick={() => useClickPrev()} >⇠ prev</button>
                                                <button className={index === 0 ? 'next' : 'next2'} onClick={() => useClickNext()}>next  ⇢</button>
                                            </div>
                                        </div>
                                        <div className="borderText">
                                            <div className={LatoF.className}>
                                                <div className={`${index === 0 ? "divFlexDowen" : "divFlexDowen1"}`} >
                                                    <div className="top">
                                                        <p className='fontPBorder'>
                                                            {texts[indexUse]?.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default HomeBorder; 