import { ReactNode } from 'react'

const Title = ({children}: { children: ReactNode }) => {
  return (
    <h3 className="group font-extrabold text-2xl my-5 bg-gradient-to-r from-green-default to-green-dark inline-block bg-clip-text text-transparent">
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-gradient-to-r from-green-default to-green-dark rounded"></span>
    </h3>
  )
}

export default Title