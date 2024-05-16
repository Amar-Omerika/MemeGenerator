import { left, right } from '../../assets'

interface SliderButtonProps {
  scrollDirection: 'left' | 'right'
  scrollContainer: React.RefObject<HTMLDivElement>
}

function SliderButton({ scrollDirection, scrollContainer }: SliderButtonProps) {
  return (
    <button
      onClick={() => handleScroll(scrollDirection)}
      className="ml-2 flex h-20 w-12 items-center justify-center rounded-lg border-2 border-darkBrown bg-[#fdf6e7] text-darkBrown hover:bg-white"
    >
      {/* {buttonText} */}
      <img src={scrollDirection === 'left' ? left : right} alt="ResetIcon" />
    </button>
  )

  function handleScroll(direction: 'left' | 'right') {
    const container = scrollContainer.current
    if (container) {
      const scrollAmount = direction === 'left' ? -500 : 500
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
}

export default SliderButton
