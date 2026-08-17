function ZoomableImage({ src, alt, className = '', imageClassName = '' }) {
  const openImage = () => {
    window.dispatchEvent(
      new CustomEvent('open-image-lightbox', {
        detail: { src, alt },
      }),
    )
  }

  return (
    <button
      type="button"
      className={`block ${className} cursor-zoom-in overflow-hidden focus:outline-none focus:ring-4 focus:ring-accentOrange/70 focus:ring-offset-4`}
      aria-label={`View larger image: ${alt}`}
      onClick={openImage}
    >
      <img src={src} alt={alt} className={imageClassName} />
    </button>
  )
}

export default ZoomableImage
