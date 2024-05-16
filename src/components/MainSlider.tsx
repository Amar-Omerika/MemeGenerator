import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'

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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainer.current
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(
          container.scrollWidth > container.clientWidth + container.scrollLeft
        )
      }
    }

    const container = scrollContainer.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll) // Add resize event listener
      handleScroll() // Initialize scroll state
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll) // Clean up resize event listener
      }
    }
  }, [])

  return (
    <div className="mt-6">
      <span className="text-xl font-bold text-darkBrown">CAT</span>
      <div className="my-2 flex w-full items-center">
        <SliderButton
          scrollDirection="left"
          scrollContainer={scrollContainer}
          disabled={!canScrollLeft}
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
          disabled={!canScrollRight}
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
