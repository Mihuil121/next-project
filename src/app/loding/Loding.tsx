'use client'
import ReactLoading from 'react-loading';
import './lodingStyle.css'
import { Nunito } from 'next/font/google';

const NunitoP = Nunito({
    subsets: ['latin'],
    weight: '600'
})

const Loding: React.FC = () => {
    return (
        <div>
            <div className="l">
                <div className="content-p">
                    <div className="loding">
                        <ReactLoading type="spin" color="#000" />
                    </div>
                    <div className="loding-text">
                        <p className={NunitoP.className}>
                            loding...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loding