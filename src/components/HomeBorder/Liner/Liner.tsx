'use client'
import Marquee from "react-fast-marquee";
import { Idata } from "./dataMan";
import Image from "next/image";
import './Liner.css'
import {Nunito} from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font";

interface ILiner {
  dataOne: Idata[]
}

const NunitoFont:NextFont = Nunito({
  subsets: ['latin'],
    weight: '300',
})

const Liner: React.FC<ILiner> = ({ dataOne }) => {
  return (
    <Marquee>
      {dataOne.map((item: Idata, index: number) => (
        <div className="liner">
          <div className="contentData">
            <Image
              src={item.image}
              alt={item.firstName}
              className="LinerImage"
            />
            <p className={NunitoFont.className}>{item.firstName}</p>
            <p className={NunitoFont.className}>{item.age}</p>
            <p className={NunitoFont.className}>{item.position}</p>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default Liner;
