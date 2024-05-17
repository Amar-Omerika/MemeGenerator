import React, { useContext } from 'react'

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
  const { addImage } = useContext(SelectedImagesContext)

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
        />
        <MainSlider
          sliderName="HAT"
          items={hatImages}
          onSelectImage={addImage}
        />
        <MainSlider
          sliderName="FACE"
          items={faceImages}
          onSelectImage={addImage}
        />
        <MainSlider
          sliderName="FRONT ACCESSORY"
          items={frontAccessories}
          onSelectImage={addImage}
        />
        <MainSlider
          sliderName="BACK ACCESSORY"
          items={backAccessories}
          onSelectImage={addImage}
        />
        <MainSlider
          sliderName="PANT"
          items={pantImages}
          onSelectImage={addImage}
        />
        <MainSlider
          sliderName="OUTFIT"
          items={outfitImages}
          onSelectImage={addImage}
        />
        <MainSlider
          sliderName="BACKGROUND"
          items={backgroundImages}
          onSelectImage={addImage}
        />
      </div>
    </div>
  )
}

export default MainContentArea
