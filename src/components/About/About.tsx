import { Nunito } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font'
import './About.css'

const NunitoA: NextFont = Nunito({
    subsets: ['latin'],
    weight: '500'
})

const AboutMision: React.FC = () => {
    return (
        <div>
            <div className="abount-component">
                <div className="content-about">
                    <p className={NunitoA.className}>
                        Our mission
                    </p>
                    <div className="content-p-min">
                        <p className={NunitoA.className}>
                            At Wokka, we're forging the future of event tech through
                            dynamic relationships all over the world. We believe in hiring
                            creative go-getters - then getting out of their way. We're
                            committed to top of market pay for top talent, building our
                            team with partners who are passionate about solving tough
                            problems in new ways.
                            We are a team of smart, fun, hard-working individuals. Find
                            us working remotely across Canada and the United States,
                            or digitally nomading across the globe, with the shared goal
                            of seeing creators thrive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMision