import dynamic from "next/dynamic"
import Loding from "../loding/Loding"
import './AboutStyle.css'

const AboutComponent = dynamic(() => import('./AboutComponent'), {
    ssr: false,
    loading: () => <div className="Loding">
        <Loding />
    </div>
})

const About: React.FC = () => {
    return (
        <AboutComponent />
    )
}

export default About