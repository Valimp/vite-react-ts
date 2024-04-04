import { ReactNode } from 'react'

const Card = ({children, url}: {children: ReactNode, url: string}) => {

    return (
        <a target='_blank' href={url} className='bg-gray-light hover:bg-gray-light/60 shadow-lg rounded-lg p-5 duration-300 flex flex-col justify-center items-start'>
            {children}
        </a>
    )
}

export default Card