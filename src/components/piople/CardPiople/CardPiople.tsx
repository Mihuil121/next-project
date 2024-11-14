"use client"
import { NextFont } from 'next/dist/compiled/@next/font';
import { Idata, data } from '../../HomeBorder/Liner/dataMan';
import './CardPiople.css'
import { Nunito } from 'next/font/google';
import { useRef, useState } from 'react';
import Link from 'next/link';

const NunitoFont: NextFont = Nunito({
    subsets: ['latin'],
    weight: '600'
});

const NunitoFontTwo: NextFont = Nunito({
    subsets: ['latin'],
    weight: '600'
});

const CardPiople: React.FC = () => {
    const [itemUse, setItem] = useState<string[]>([]);
    const [ageUse, setAge] = useState<number[]>([]);

    const unique: string[] = data
        .map(item => item.position)
        .filter((position, index, self) => self.indexOf(position) === index);
    const uniqueAge: number[] = data
        .map(item => item.age)
        .filter((age, index, self) => self.indexOf(age) === index);

    const handelChek = (position: string) => {
        if (position === '') {
            setItem([]);
        } else {
            setItem([position]);
        }
    };

    const handleAge = (age: string) => {
        const ageNumber = Number(age);
        if (ageNumber === 0) {
            setAge([]);
        } else {
            setAge([ageNumber]);
        }
    };


    const filteredData = data.filter(card =>
        (itemUse.length === 0 || itemUse.includes(card.position)) &&
        (ageUse.length === 0 || ageUse.includes(card.age))
    );

    return (
        <div className='CardFilter'>
            <div className="filter">
                <div className="FontN">
                    <p className={NunitoFontTwo.className}>
                        Profession:
                    </p>
                </div>
                <div className={NunitoFont.className}>
                    <select className='select' value={itemUse[0] || ''} onChange={(e) => handelChek(e.target.value)}>
                        <option value="">Profession all</option>
                        {unique.map((position: string, index) => (
                            <option key={index} value={position}>
                                {position}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="FontN">
                    <p className={NunitoFontTwo.className}>
                        Age:
                    </p>
                </div>
                <div className={NunitoFont.className}>
                    <select className='select' value={ageUse[0] || ''} onChange={(e) => handleAge(e.target.value)}>
                        <option value="">All age</option>
                        {uniqueAge.map((age: number, index: number) => (
                            <option key={index} value={age}>
                                {age}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="cardC">
                <div className="cardP">
                    {filteredData.map((card: Idata, index: number) => {
                        const imageUrl: string = card.image?.src;
                        return (

                            <div className="cardBack" key={index}>
                                <Link href={`/Serch/${index}`}>
                                    <div
                                        className="cardui"
                                        style={{
                                            backgroundImage: `url(${imageUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="inform">
                                            <div className="informClass">
                                                <p className={NunitoFont.className}>
                                                    {card.lastName} {card.firstName}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p className={NunitoFont.className}>
                                            {card.age} лет
                                        </p>
                                        <p className={NunitoFont.className}>
                                            {card.position}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CardPiople;
