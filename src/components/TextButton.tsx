import { Link } from 'react-router-dom'

const TextButton = (props: any) => {
  return (
    <Link to={props.to} className='text-sm text-green-600 hover:text-green-700 font-semibold'>
        {props.content}
    </Link>
  )
}

export default TextButton