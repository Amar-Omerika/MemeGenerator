import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'

import SliderButton from './buttons/SliderButton'

function MainSlider({
  items,
  sliderName,
  onSelectImage,
  category,
  selectedItemIndex
}: {
  items: string[]
  sliderName: string
  onSelectImage: (category: string, image: string, index: number) => void
  category: string
  selectedItemIndex: number | null
}) {
  const scrollContainer = useRef<HTMLDivElement | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(
    selectedItemIndex
  )

  useEffect(() => {
    setSelectedItem(selectedItemIndex)
  }, [selectedItemIndex])

  const selectItem = (index: number, image: string) => {
    if (index === 0 && category !== 'background' && category !== 'cat') {
      onSelectImage(category, '', index)
      setSelectedItem(null)
    } else {
      setSelectedItem(index)
      onSelectImage(category, image, index)
    }
  }

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
      window.addEventListener('resize', handleScroll)
      handleScroll()
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [])

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  return (
    <div className="mt-6">
      <span className="text-xl font-bold text-darkBrown">{sliderName}</span>
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
          {items?.map((image, index) => (
            <div
              onClick={() => selectItem(index, image)}
              key={index}
              className={clsx(
                'mx-2 h-[80px] w-[80px] flex-shrink-0 cursor-pointer rounded-xl border-[0.7px] border-darkBrown',
                {
                  '!border-4 bg-white': selectedItem === index,
                  'bg-transparent': selectedItem !== index
                }
              )}
            >
              <img
                src={image}
                alt={`Item ${index + 1}`}
                className="h-full w-full rounded-md object-cover p-[1px]"
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
}

export default MainSlider
