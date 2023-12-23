import React from 'react'

const PrimaryButton = ({ onClick, disabled, children}) => {
    return (
        <button  className='py-2 px-6 text-sm font-medium  text-darkYellow hover:text-black cursor-pointer border-2 border-darkYellow  hover:bg-darkYellow transition-all duration-500' onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

const SecondaryButton = ({ onClick, disabled, children}) => {
    return (

    <button className='py-2 px-6 text-md font-medium cursor-pointer font-serif border-2 border-darkYellow bg-darkYellow hover:text-white hover:bg-transparent transition-all duration-500' onClick={onClick} disabled={disabled}>
        {children}
    </button>
    )
}

const NoirButton = ({type, ...props}) => {
    switch(type) {
        case "primary":
            return <PrimaryButton {...props} />
        case "secondary":
            return <SecondaryButton {...props} />
        default:
            return null;
    }
}

export default NoirButton