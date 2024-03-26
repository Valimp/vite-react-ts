import { Link } from 'react-router-dom'

const TextButton = (props: any) => {
  return (
    <Link to={props.to} className='text-sm text-green-default hover:text-green-dark font-semibold'>
        {props.content}
    </Link>
  )
}

export default TextButton