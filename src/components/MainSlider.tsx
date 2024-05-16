import clsx from 'clsx'
import { useRef, useState } from 'react'

import {
  Cat_a,
  brown,
  cat_black,
  cloud,
  cube,
  green,
  michiwhat,
  party,
  purp,
  scary2,
  white
} from '../assets'
import SliderButton from './buttons/SliderButton'

const cats = [
  Cat_a,
  brown,
  cat_black,
  cloud,
  cube,
  green,
  michiwhat,
  party,
  purp,
  scary2,
  white
]

function MainSlider() {
  const scrollContainer = useRef<HTMLDivElement | null>(null)

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
          {cats.map((image, index) => (
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
