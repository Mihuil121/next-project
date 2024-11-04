import { NextFont } from 'next/dist/compiled/@next/font'
import './Force.css'
import { Nunito } from 'next/font/google'

const forceNunito:NextFont = Nunito({
    subsets: ['latin'],
    weight: '500'
})

const hireNunito:NextFont = Nunito({
    subsets: ['latin'],
    weight: '400'
})

const Force: React.FC = () => {
    return (
        <div>
            <div className="force">
                <div className="force-data">
                    <div className="force-blok">
                        <p className={forceNunito.className}>
                            Force
                        </p>
                    </div>
                    <div className="Contraction">
                        <p className={hireNunito.className}>
                            Hire a Contraction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Force