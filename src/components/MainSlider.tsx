import { useRef, useState, useEffect } from 'react'

import { Cat1 } from '../assets'

function MainSlider() {
  const scrollContainer = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [scrollDistance, setScrollDistance] = useState(0)

  const images = new Array(20).fill(Cat1)

  useEffect(() => {
    const container = scrollContainer.current
    if (container) {
      const handleMouseDown = (e: MouseEvent) => {
        isDragging.current = true
        startX.current = e.pageX - container.offsetLeft
        scrollLeft.current = container.scrollLeft
      }

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return
        e.preventDefault()
        const x = e.pageX - container.offsetLeft
        const walk = x - startX.current
        container.scrollLeft = scrollLeft.current - walk
      }

      const handleMouseUp = () => {
        isDragging.current = false
      }

      const handleTouchStart = (e: TouchEvent) => {
        isDragging.current = true
        startX.current = e.touches[0].pageX - container.offsetLeft
        scrollLeft.current = container.scrollLeft
      }

      const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging.current) return
        const x = e.touches[0].pageX - container.offsetLeft
        const walk = x - startX.current
        container.scrollLeft = scrollLeft.current - walk
      }

      const handleTouchEnd = () => {
        isDragging.current = false
      }

      container.addEventListener('mousedown', handleMouseDown)
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseup', handleMouseUp)
      container.addEventListener('mouseleave', handleMouseUp)
      container.addEventListener('touchstart', handleTouchStart)
      container.addEventListener('touchmove', handleTouchMove)
      container.addEventListener('touchend', handleTouchEnd)

      return () => {
        container.removeEventListener('mousedown', handleMouseDown)
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseup', handleMouseUp)
        container.removeEventListener('mouseleave', handleMouseUp)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  return (
    <div className="mt-12">
      <span className="text-xl font-bold text-darkBrown">Cat</span>
      <div className="flex w-full items-center">
        <button
          onMouseDown={() => handleScrollButton(true)}
          onMouseUp={() => stopScrollButton()}
          onMouseLeave={() => stopScrollButton()}
          onTouchStart={() => handleScrollButton(true)}
          onTouchEnd={() => stopScrollButton()}
          className="h-28 rounded-md border-2 border-darkBrown p-4 font-bold text-darkBrown"
        >
          &lt;
        </button>
        <div className="flex w-full overflow-x-scroll" ref={scrollContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-1/10 mx-2 flex-shrink-0 rounded-md border-4 border-darkBrown bg-white p-2"
            >
              <img src={image} alt={`Cat ${index + 1}`} width={98} />
            </div>
          ))}
        </div>
        <button
          onMouseDown={() => handleScrollButton(false)}
          onMouseUp={() => stopScrollButton()}
          onMouseLeave={() => stopScrollButton()}
          onTouchStart={() => handleScrollButton(false)}
          onTouchEnd={() => stopScrollButton()}
          className="h-28 rounded-md border-2 border-darkBrown bg-white p-4 font-bold text-darkBrown"
        >
          &gt;
        </button>
      </div>
    </div>
  )

  function handleScrollButton(isLeft: boolean) {
    const container = scrollContainer.current
    if (container) {
      const scrollSpeed = 10 // Adjust this value as needed
      const step = isLeft ? -scrollSpeed : scrollSpeed
      const scroll = () => {
        container.scrollLeft += step
        setScrollDistance(container.scrollLeft)
        if (scrollDistance !== container.scrollLeft) {
          requestAnimationFrame(scroll)
        }
      }
      requestAnimationFrame(scroll)
    }
  }

  function stopScrollButton() {
    setScrollDistance(0)
  }
}

export default MainSlider
