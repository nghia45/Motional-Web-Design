import "./index.css";

type Props = {}

const MenuButton = ({ }: Props) => {
    const element = document.documentElement;

    const handleMenuButtonClick = () => {
        element.toggleAttribute('menu-open')
    }
    return (
        <button id='menu--button' onClick={handleMenuButtonClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default MenuButton