import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

function ImageLightbox() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    const openLightbox = (event) => setImage(event.detail)
    window.addEventListener('open-image-lightbox', openLightbox)
    return () => window.removeEventListener('open-image-lightbox', openLightbox)
  }, [])

  useEffect(() => {
    if (!image) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-darkGrey/90 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded project image"
      onClick={() => setImage(null)}
    >
      <button
        type="button"
        className="absolute right-5 top-5 rounded-2xl bg-white p-3 text-darkGrey shadow-2xl transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4 focus:ring-offset-darkGrey"
        aria-label="Close expanded image"
        onClick={() => setImage(null)}
      >
        <FiX size={26} aria-hidden="true" />
      </button>

      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[86vh] w-auto max-w-full rounded-[32px] object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}

export default ImageLightbox
