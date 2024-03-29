interface ImageProps {
  src: string
  alt: string
  width: string
  height: string
}

const Image = ({ src, alt, width, height }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}

export default Image