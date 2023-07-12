'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

const Button = ({text, icon, onClick}) => {
    

    return (
        <button onClick={onClick} className="bg-jade rounded-lg text-sm px-2 py-1 mt-2 mx-2 lg:text-base lg:px-4 lg:py-3 lg:mt-8">
            <FontAwesomeIcon className='mr-2' icon={icon} size='lg' />
            {text}    
        </button>
    )
}

export default Button;