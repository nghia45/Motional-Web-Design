import './index.css';
import gsap, {Power4, Elastic} from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

type Props = {
    text: string;
}

gsap.registerPlugin(useGSAP);

const MagneticButton = ({text}: Props) => {

    const container = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(() => {
    }, { scope: container })

    const activateMagnetic = contextSafe((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const magnetic = document.querySelector('.magnetic') as HTMLElement;
        const text = document.querySelector('.text');

        let boundBox = magnetic!.getBoundingClientRect();
        const magnetoStrength = 40;
        const magnetoTextStrength = 80;
        const newX = ((event.clientX - boundBox.left) / magnetic!.offsetWidth) - 0.5;
        const newY = ((event.clientY - boundBox.top) / magnetic!.offsetHeight) - 0.5;

        gsap.to(magnetic, {
            x: newX * magnetoStrength,
            y: newY * magnetoStrength,
            duration: 1,
            ease: Power4.easeOut
        });

        gsap.to(text, {
            x: newX * magnetoTextStrength,
            y: newY * magnetoTextStrength,
            duration: 1,
            ease: Power4.easeOut
        });
    });

    const resetMagnetic = () => {
        const magnetic = document.querySelector('.magnetic') as HTMLElement;
        const text = document.querySelector('.text');

        gsap.to(magnetic, {
            x: 0,
            y: 0,
            duration: 1,
            ease: Elastic.easeOut
        });

        gsap.to(text, {
            x: 0,
            y: 0,
            duration: 1,
            ease: Elastic.easeOut
        });
    }

    return (
        <div ref={container}>
            <button onMouseMove={(e) => activateMagnetic(e)} onMouseLeave={resetMagnetic} className="magnetic flex items-center justify-center">
                <span className="text">{text}</span>
            </button>
        </div>
    )
}

export default MagneticButton