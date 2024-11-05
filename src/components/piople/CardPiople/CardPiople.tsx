"use client"

import { NextFont } from 'next/dist/compiled/@next/font';
import { Idata, data } from '../../HomeBorder/Liner/dataMan';
import './CardPiople.css'
import { Nunito } from 'next/font/google'
import { useState } from 'react';

const NunitoFont: NextFont = Nunito({
    subsets: ['latin'],
    weight: '600'
})

const CardPiople: React.FC = () => {

    const [itemUse, setItem] = useState<string[]>([])

    const unique: string[] = data
        .map(item => item.position)
        .filter((position, index, self) => self.indexOf(position) === index);

    const handelChek = (position: string) => {
        setItem(prev => prev.includes(position) ? prev.filter(p => p != position) : [...prev, position])
    }

    const fileData = itemUse.length > 0 ? data.filter(card => itemUse.includes(card.position)) : data

    return (
        <div className='CardFilter'>
            <div className="filter">
                {unique.map((position, index) => (
                    <div key={index} >
                        <div className={NunitoFont.className}>
                            <label>
                                <input type='checkbox'
                                    onChange={() => handelChek(position)}

                                />
                                {position}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cardC">
                <div className="cardP">
                    {fileData.map((card: Idata, index: number) => {
                        const imageUrl: string = card.image?.src;

                        return (
                            <div className="cardBack" key={index}>
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CardPiople;
