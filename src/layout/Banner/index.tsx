import BounceArrow from "../../components/BounceArrow"
import TypeWritting from "../../components/TypeWriting"

type Props = {}

const Banner = ({ }: Props) => {
  return (
    <div className='banner__container flex flex-col items-center'>
      <TypeWritting />
      <BounceArrow />
    </div>
  )
}

export default Banner