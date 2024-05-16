import { useRef } from 'react'

import { Cat1 } from '../assets'

function MainSlider() {
  const scrollContainer = useRef<HTMLDivElement | null>(null)

  const images = new Array(20).fill(Cat1)

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainer.current
    if (container) {
      const scrollAmount = direction === 'left' ? -500 : 500
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="mt-6">
      <span className="text-xl font-bold text-darkBrown">Cat Gallery</span>
      <div className="my-2 flex w-full items-center">
        <button
          onClick={() => handleScroll('left')}
          className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-800 text-gray-800"
        >
          &lt;
        </button>
        <div
          ref={scrollContainer}
          className="hide-scrollbar flex w-full overflow-x-scroll"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="mx-2 h-40 w-40 flex-shrink-0 rounded-md border-4 border-gray-800 bg-white p-2"
            >
              <img
                src={image}
                alt={`Cat ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll('right')}
          className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-800 text-gray-800"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default MainSlider
