import Marquee from "react-fast-marquee";
import { sponsor, ISponsor } from "./SponsorData";
import Image from "next/image";
import './sponsorStyle.css'
import { NextFont } from "next/dist/compiled/@next/font";
import { Nunito } from "next/font/google";

const NunitoA: NextFont = Nunito({
    subsets: ['latin'],
    weight: '600'
})

const Sponsor: React.FC = () => {
    return (
        <div>
            <div className="sponsor">
                <div className="spon-content">
                    <p className={NunitoA.className}>
                        Here is a list of our sponsors :
                    </p>
                    <Marquee>
                        {sponsor.map((sponsorAdd: ISponsor, index: number) => (
                            <div className="sponsorData" key={index}>
                                <div className="sponsorData-content">
                                    <Image
                                        src={sponsorAdd.img}
                                        alt={`${sponsorAdd.img}`}
                                    />
                                    <p className={NunitoA.className}>
                                        {sponsorAdd.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Sponsor