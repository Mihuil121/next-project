import React from 'react'
import { Nunito } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'

const NunitoFont: NextFont = Nunito({
    subsets: ['latin'],
    weight: '500',
})

const NunitoFontTake: NextFont = Nunito({
    subsets: ['latin'],
    weight: '200',
})

const Information = () => {
    return (
        <div>
            <div className="Quickly">
                <div className="textQ">
                    <p className={NunitoFont.className}>
                        Quickly Expand your Workforce.
                    </p>
                    <p className={NunitoFontTake.className}>
                        Take advantage of our global employment products to hire who
                        you want, wherever you want - starting in just minutes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Information