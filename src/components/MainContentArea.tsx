import { catImages } from '../assets/assets'
import MainSlider from './MainSlider'

function MainContentArea() {
  return (
    <div className="h-screen w-full max-w-[85rem] overflow-hidden">
      <div className="h-full border-l-2 border-darkBrown px-2 py-12 sm:px-8 md:ml-10 md:px-16 lg:ml-10 xl:ml-16">
        <h1 className="text-2xl font-extrabold text-darkBrown">
          CREATE YOUR MICHI
        </h1>
        <MainSlider sliderName="CAT" items={catImages} />
        <MainSlider sliderName="HAT" items={catImages} />
      </div>
    </div>
  )
}

export default MainContentArea
