import { ReactNode } from "react"

interface ArticleProps {
  children: ReactNode
  id?: string
}

const Article = ({children, id}: ArticleProps) => {
  return (
    <article id={id} className='group hover:cursor-default'>
      {children}
    </article>
  )
}

export default Article