import { Nunito } from 'next/font/google';
import './Home.css';
import Swipers from '@/components/Swiper/Swiper';
import Liner from '@/components/HomeBorder/Liner/Liner';
import { data, Idata } from '@/components/HomeBorder/Liner/dataMan';
import { InferGetStaticPropsType } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import Information from '@/app/serverComponents/Hader/Information/Information';

const outFont: NextFont = Nunito({
    subsets: ['latin'],
    weight: '500',
});

const outFontP: NextFont = Nunito({
    subsets: ['latin'],
    weight: '200',
});



const HomeOne: React.FC<Idata> = () => {

    return (
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
                    </div>
                </div>
            </div>
        </div>
    );
};



export default HomeOne;
