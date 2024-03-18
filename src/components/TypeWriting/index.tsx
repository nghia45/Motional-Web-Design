import './index.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'

type Props = {}

const WORDS = ['Web Development', 'Responsive', 'Interactive', 'Animation']

gsap.registerPlugin(useGSAP, TextPlugin)

const TypeWritting = ({ }: Props) => {

    useGSAP(() => {
        let mainTimeLine = gsap.timeline({ repeat: -1 });

        WORDS.forEach((word) => {
            let textTimeLine = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 4 });
            textTimeLine.to('#typewriter', {
                duration: 1, text: word,
                onUpdate: () => {
                    cursorTimeline.restart();
                    cursorTimeline.pause();
                },
                onComplete: () => {
                    cursorTimeline.play();
                }
            });
            mainTimeLine.add(textTimeLine);
        });

        let cursorTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

        cursorTimeline.to('#cursor', { duration: 0, opacity: 1 }).to('#cursor', { duration: 0, opacity: 0, delay: 0.8 });

    });

    return (
        <section id="hero">
            <h1>Starting a Frontend career with&nbsp;<br />
                <span id='typewriter'></span>
                <span id='cursor'> |</span>
            </h1>
        </section>
    )
}

export default TypeWritting