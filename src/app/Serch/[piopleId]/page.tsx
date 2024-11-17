import { data, Idata } from "@/components/HomeBorder/Liner/dataMan";
import Image from "next/image";
import './piopleStyle.css';
import { Nunito } from "next/font/google";

const nuto = Nunito({
    subsets: ['latin'],
    weight: '600'
});

export default function Piople({ params }: { params: { piopleId: number } }) {
    const { piopleId } = params;
    const mane: Idata = data[Number(params.piopleId)];

    return (
        <div className={nuto.className}>
            <div className="content">
                <div className="imge">
                    <Image
                        src={mane.image}
                        alt={`Image of ${mane.firstName}`}
                    />
                </div>
                <div className="contentP">
                    <div className="content-text">
                        <p>Name: {mane.firstName} {mane.lastName}</p>
                        <p>Age: {mane.age}</p>
                        <p>Position: {mane.position}</p>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="description-p">
                    <div className="Description">
                        <p>
                            Description :
                            <br />
                            {mane.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
