import { useRef } from 'react'

import { Cat1 } from '../assets'

function MainSlider() {
  const scrollContainer = useRef<any>(null)
  const images = [
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1
  ]

  return (
    <div className="mt-12">
      <span className="text-xl font-bold text-darkBrown">Cat</span>
      <div className="flex w-full items-center">
        <button
          onClick={scrollLeft}
          className="h-28 rounded-md border-2 border-darkBrown p-4 font-bold text-darkBrown"
        >
          &lt;
        </button>
        <div className="flex w-full overflow-x-hidden" ref={scrollContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className="mx-2 rounded-md border-4 border-darkBrown bg-white p-2"
            >
              <img src={image} alt={`Cat ${index + 1}`} width={98} />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="h-28 rounded-md border-2 border-darkBrown bg-white p-4 font-bold text-darkBrown"
        >
          &gt;
        </button>
      </div>
    </div>
  )

  function scrollLeft() {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 150
    }
  }

  function scrollRight() {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 150
    }
  }
}

export default MainSlider
