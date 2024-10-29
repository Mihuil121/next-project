import { Nunito } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import './InformStyle.css'
import Employees from '@/components/Card/Employees/Employees'

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
                <div className="text-Q">
                    <div className="textQ">
                        <p className={NunitoFont.className}>
                            Quickly Expand your Workforce.
                        </p>
                        <div className="Qukly">
                            <p className={NunitoFontTake.className}>
                                Take advantage of our global employment products to hire who
                                you want, wherever you want - starting in just minutes
                            </p>
                        </div>
                    </div>
                    <Employees/>
                </div>
            </div>
        </div>
    )
}

export default Information