interface ImageProps {
  src: string
  alt: string
  width: string
  height: string
}

const Image = ({ src, alt, width, height }: ImageProps) => {
  return (
    <div className="self-center">
      <img
      src={src}
      alt={alt}
      style={{ width: `${width}px`, height: `${height}px`, borderRadius: '10px'}}
      className="object-cover"
      />
    </div>
  )
}

export default Image