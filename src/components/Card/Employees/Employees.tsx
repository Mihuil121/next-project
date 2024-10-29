import Image from "next/image"
import { Idata, data } from "@/components/HomeBorder/Liner/dataMan"
import './EmpStyle.css'
import {Nunito} from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font"

const nunitoFont:NextFont = Nunito({
  subsets:['latin'],
  weight:'500'
})


const Employees: React.FC = () => {
  return (
    <div>
      <div className="Employees">
        <div className="Employees-board">
          <div className="content">
            <div className="Employees-text">
              <p className={nunitoFont.className}>
                Employees
              </p>
            </div>
            <div className="Employees-img">
              {data.slice(0,3).map((img: Idata, index: number) => (
                <div className="imgcard" key={index}>
                  <Image
                    src={img.image}
                    alt={`${img.image}`}
                    className="imgE"
                  />
                </div>
              ))}

            </div>
            <div className="Hire">
              <p className={nunitoFont.className} >
                Hire an Employees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees