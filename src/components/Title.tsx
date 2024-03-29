import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

const Title = ({children}: TitleProps) => {
  return (
    <h3 className="font-extrabold text-2xl my-5 inline-block text-gray-dark">
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-gradient-to-r from-green-default to-green-dark rounded"></span>
    </h3>
  )
}

export default Title