import { useState } from "react";
import ArrowUP from '../assets/Arrow_up.png';
import ArrowDOWN from '../assets/Arrow_down.png';
import '../styles/Dropdown.scss'

function Dropdown({title, description}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    return (
        <div className="DropDownContainer">
            <button className="DropBtn" onClick={handleOpen}>
                <p className="DropBtnText">{title}</p>
                {open ? (
                    <img src={ArrowUP} alt="Arrow up"/>
                ) : (
                    <img src={ArrowDOWN} alt="Arrow down"/>
                )}
            </button>
            <div className={`DropDownContainerTexte ${open ? 'visible' : ''}`}>
                {description}
            </div>
        </div>
    );
}
export default Dropdown;