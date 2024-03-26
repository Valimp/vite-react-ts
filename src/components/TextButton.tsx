import { Link } from 'react-router-dom'

const TextButton = (props: any) => {
  return (
    <Link to={props.to} className='group text-sm text-green-default hover:text-green-dark font-semibold transition duration-300'>
        {props.content}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-green-default to-green-dark rounded"></span>
    </Link>
  )
}

export default TextButton