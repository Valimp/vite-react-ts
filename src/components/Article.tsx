import { ReactNode } from "react"

const Article = ({children, id}: {children: ReactNode, id?: string}) => {
  return (
    <article id={id} className='group hover:cursor-default'>
      {children}
    </article>
  )
}

export default Article