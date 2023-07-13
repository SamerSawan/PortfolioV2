'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

const IconButton = ({ icon, onClick }) => {

    return (
        <button className="ml-5 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl" onClick={onClick}>
            <FontAwesomeIcon  icon={icon} size='lg' style={{color: "#01fcc0",}}/>   
        </button>
    )
}

export default IconButton;