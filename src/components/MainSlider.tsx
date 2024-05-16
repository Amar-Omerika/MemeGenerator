import clsx from 'clsx'
import { useRef, useState } from 'react'

import { Cat1 } from '../assets'
import SliderButton from './buttons/SliderButton'

function MainSlider() {
  const scrollContainer = useRef<HTMLDivElement | null>(null)
  const images = new Array(20).fill(Cat1)

  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <div className="mt-6">
      <span className="text-xl font-bold text-darkBrown">CAT</span>
      <div className="my-2 flex w-full items-center">
        <SliderButton
          scrollDirection="left"
          scrollContainer={scrollContainer}
        />
        <div
          ref={scrollContainer}
          className="hide-scrollbar flex w-full overflow-x-scroll"
        >
          {images.map((image, index) => (
            <div
              onClick={() => selectItem(index)}
              key={index}
              className={clsx(
                'mx-2 h-[80px] w-[80px] flex-shrink-0 rounded-md border-[0.7px] border-darkBrown',
                {
                  '!border-4 bg-white': selectedItem === index,
                  'bg-transparent': selectedItem !== index
                }
              )}
            >
              <img
                src={image}
                alt={`Cat ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <SliderButton
          scrollDirection="right"
          scrollContainer={scrollContainer}
        />
      </div>
    </div>
  )

  function selectItem(index: number) {
    setSelectedItem(index)
    console.log(`Selected item: ${index}`)
  }
}

export default MainSlider
