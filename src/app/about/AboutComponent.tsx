import Image from "next/image"
import AboutMision from "@/components/About/About"
import './AboutStyle.css'
import { NextFont } from 'next/dist/compiled/@next/font'
import { Nunito } from 'next/font/google'
import photo from '../../Img/backgraund/people.jpeg'
import Sponsor from "@/components/sponsors/Sponsor"

const NunitoA: NextFont = Nunito({
    subsets: ['latin'],
    weight: '600'
})
const NunitoP: NextFont = Nunito({
    subsets: ['latin'],
    weight: '300'
})

const AboutComponent:React.FC = () => {
  return (
    <div>
         <div>
            <div className="About">
                <div className="About-Img-text">
                    <div className="about-we">
                        <div className="about-content">
                            <p className={NunitoA.className}>
                                We're making a difference
                                to people's lives
                            </p>
                            <div className="content-min">
                                <p className={NunitoP.className}>
                                    Creating a way to connect people ready to work, with people <br />
                                    who need work done
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Imgcontent-about">
                        <Image
                            src={photo}
                            alt={`${photo}`}
                        />
                    </div>
                </div>
                <div className="about-flex">
                    <AboutMision />
                </div>
                <div className="Sponsor">
                    <Sponsor />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent