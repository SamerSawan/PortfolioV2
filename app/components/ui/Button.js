'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

const Button = ({text, href, icon, onClick}) => {
    

    return (
        <button onClick={onClick} className="bg-jade rounded-lg px-4 py-3 mt-8">
            <FontAwesomeIcon className='mr-2' icon={icon} size='lg' />
            {text}    
        </button>
    )
}

export default Button;