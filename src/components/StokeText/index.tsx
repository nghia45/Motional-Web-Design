import './index.css'

type Props = {}

/* Inspired by: https://codepen.io/webstoryboy/pen/rrLdQX */
const StrokeText = ({ }: Props) => {
    return (
        <div className="loader__container">
            <svg viewBox="0 0 3000 1600">
                <text x="50%" y="50%" dy='0.32em' textAnchor="middle" className="text--body">Finn Nguyen</text>
                <text x="50%" y="50%" dy='0.32em' dx="3.1em" textAnchor="middle" className="text--body dot">.</text>
            </svg>
        </div>
    )
}

export default StrokeText