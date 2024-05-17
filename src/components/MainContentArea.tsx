import { backAccessories } from '../assets/backaccessories'
import { backgroundImages } from '../assets/backgrounds'
import { catImages } from '../assets/cats'
import { faceImages } from '../assets/faces'
import { frontAccessories } from '../assets/frontaccessories'
import { hatImages } from '../assets/hats'
import { outfitImages } from '../assets/outfits'
import { pantImages } from '../assets/pants'
import MainSlider from './MainSlider'

function MainContentArea() {
  return (
    <div className="w-full max-w-[85rem] overflow-hidden">
      <div className="h-full border-l-2 border-darkBrown px-2 py-12 sm:px-8 md:ml-10 md:px-16 lg:ml-10 xl:ml-16">
        <h1 className="text-2xl font-extrabold text-darkBrown">
          CREATE YOUR MICHI
        </h1>
        <MainSlider sliderName="CAT" items={catImages} />
        <MainSlider sliderName="HAT" items={hatImages} />
        <MainSlider sliderName="FACE" items={faceImages} />
        <MainSlider sliderName="FRONT ACCESSORY" items={frontAccessories} />
        <MainSlider sliderName="BACK ACCESSORY" items={backAccessories} />
        <MainSlider sliderName="PANT" items={pantImages} />
        <MainSlider sliderName="OUTFIT" items={outfitImages} />
        <MainSlider sliderName="BACKGROUND" items={backgroundImages} />
      </div>
    </div>
  )
}

export default MainContentArea
