import clsx from 'clsx'

import { left, right } from '../../assets/assets'

interface SliderButtonProps {
  scrollDirection: 'left' | 'right'
  scrollContainer: React.RefObject<HTMLDivElement>
  disabled: boolean
}

function SliderButton({
  scrollDirection,
  scrollContainer,
  disabled
}: SliderButtonProps) {
  return (
    <button
      onClick={() => handleScroll(scrollDirection)}
      className={clsx(
        'flex h-20 w-12 items-center justify-center rounded-xl border-2 border-darkBrown bg-[#fdf6e7] text-darkBrown hover:bg-white',
        {
          'mr-2': scrollDirection === 'left',
          'ml-2': scrollDirection === 'right',
          'cursor-not-allowed opacity-15': disabled
        }
      )}
      disabled={disabled}
    >
      <img
        src={scrollDirection === 'left' ? left : right}
        alt={scrollDirection}
      />
    </button>
  )

  function handleScroll(direction: 'left' | 'right') {
    if (disabled) return

    const container = scrollContainer.current
    if (container) {
      const containerWidth = container.clientWidth
      const scrollAmount =
        direction === 'left' ? -containerWidth / 2 : containerWidth / 2
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
}

export default SliderButton
