import { useContext } from 'react'

import { backAccessories } from '../assets/backaccessories'
import { backgroundImages } from '../assets/backgrounds'
import { catImages } from '../assets/cats'
import { faceImages } from '../assets/faces'
import { frontAccessories } from '../assets/frontaccessories'
import { hatImages } from '../assets/hats'
import { outfitImages } from '../assets/outfits'
import { pantImages } from '../assets/pants'
import { SelectedImagesContext } from '../context/SelectedImagesContext'
import MainSlider from './MainSlider'

function MainContentArea() {
  const { selectedIndices, addImage } = useContext(SelectedImagesContext)
  return (
    <div className="w-full max-w-[85rem] overflow-hidden">
      <div className="h-full border-l-2 border-darkBrown px-2 py-12 sm:px-8 md:ml-10 md:px-16 lg:ml-10 xl:ml-16">
        <h1 className="text-2xl font-extrabold text-darkBrown">
          CREATE YOUR MICHI
        </h1>
        <MainSlider
          sliderName="CAT"
          items={catImages}
          onSelectImage={addImage}
          category="cat"
          selectedItemIndex={selectedIndices['cat']}
        />
        <MainSlider
          sliderName="HAT"
          items={hatImages}
          onSelectImage={addImage}
          category="hat"
          selectedItemIndex={selectedIndices['hat']}
        />
        <MainSlider
          sliderName="FACE"
          items={faceImages}
          onSelectImage={addImage}
          category="face"
          selectedItemIndex={selectedIndices['face']}
        />
        <MainSlider
          sliderName="FRONT ACCESSORY"
          items={frontAccessories}
          onSelectImage={addImage}
          category="frontAccessory"
          selectedItemIndex={selectedIndices['frontAccessory']}
        />
        <MainSlider
          sliderName="BACK ACCESSORY"
          items={backAccessories}
          onSelectImage={addImage}
          category="backAccessory"
          selectedItemIndex={selectedIndices['backAccessory']}
        />
        <MainSlider
          sliderName="PANT"
          items={pantImages}
          onSelectImage={addImage}
          category="pant"
          selectedItemIndex={selectedIndices['pant']}
        />
        <MainSlider
          sliderName="OUTFIT"
          items={outfitImages}
          onSelectImage={addImage}
          category="outfit"
          selectedItemIndex={selectedIndices['outfit']}
        />
        <MainSlider
          sliderName="BACKGROUND"
          items={backgroundImages}
          onSelectImage={addImage}
          category="background"
          selectedItemIndex={selectedIndices['background']}
        />
      </div>
    </div>
  )
}

export default MainContentArea
