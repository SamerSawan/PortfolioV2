'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

const IconButton = ({ href, icon}) => {
    const handleClick = () => {
        window.open(href, "_blank", "noreferrer")
    };

    return (
        <button className="ml-5" onClick={handleClick}>
            <FontAwesomeIcon  icon={icon} size='lg' style={{color: "#01fcc0",}}/>   
        </button>
    )
}

export default IconButton;