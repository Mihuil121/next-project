import { Nunito } from 'next/font/google';
import './Home.css';
import Liner from '@/components/HomeBorder/Liner/Liner';
import { data, Idata } from '@/components/HomeBorder/Liner/dataMan';
import { InferGetStaticPropsType } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import dynamic from 'next/dynamic';
import { Component, ComponentType } from 'react';
import { Suspense } from 'react';
import Swipers from '@/components/Swiper/Swiper';
import Information from '@/app/serverComponents/Information/Information'
import Bordar from '../serverComponents/ServiseBordar/Bordar'

const outFont: NextFont = Nunito({
    subsets: ['latin'],
    weight: '500',
});

const outFontP: NextFont = Nunito({
    subsets: ['latin'],
    weight: '200',
});


const HomeOne: React.FC = () => {

    return (
        <section>
            <div>
                <div className="home">
                    <div className="home-title">
                        <div className="home-text">
                            <p className={outFont.className}>Finding the best employees is very simple</p>
                        </div>
                        <div className="home-title-outFontP">
                            <p className={outFontP.className}>We help you find employees for your company</p>
                        </div>
                    </div>
                    <Swipers />
                    <div className="dataOne">
                        <Liner dataOne={data} />
                        <div className="Information">
                            <Information />
                            <Bordar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default HomeOne;
