const Image = (props: {src: string}) => {
  return (
    <div className="w-12 h-12 rounded-xl bg-gray-light flex justify-center items-center">
        <img src={props.src} className='w-10 h-10 rounded'/>
    </div>
  )
}

export default Image