import { useContext, useState, useEffect } from 'react'

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
  const { selectedImages, addImage } = useContext(SelectedImagesContext)
  const [selectedIndices, setSelectedIndices] = useState<{
    [key: string]: number
  }>({})

  useEffect(() => {
    const indices: { [key: string]: number } = {}
    Object.keys(selectedImages).forEach((category) => {
      const images = getCategoryImages(category)
      indices[category] = images.indexOf(selectedImages[category])
    })
    setSelectedIndices(indices)
  }, [selectedImages])

  const getCategoryImages = (category: string) => {
    switch (category) {
      case 'background':
        return backgroundImages
      case 'cat':
        return catImages
      case 'face':
        return faceImages
      case 'hat':
        return hatImages
      case 'outfit':
        return outfitImages
      case 'pant':
        return pantImages
      case 'frontAccessory':
        return frontAccessories
      case 'backAccessory':
        return backAccessories
      default:
        return []
    }
  }

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
          selectedItemIndex={selectedIndices['cat'] || null}
        />
        <MainSlider
          sliderName="HAT"
          items={hatImages}
          onSelectImage={addImage}
          category="hat"
          selectedItemIndex={selectedIndices['hat'] || null}
        />
        <MainSlider
          sliderName="FACE"
          items={faceImages}
          onSelectImage={addImage}
          category="face"
          selectedItemIndex={selectedIndices['face'] || null}
        />
        <MainSlider
          sliderName="FRONT ACCESSORY"
          items={frontAccessories}
          onSelectImage={addImage}
          category="frontAccessory"
          selectedItemIndex={selectedIndices['frontAccessory'] || null}
        />
        <MainSlider
          sliderName="BACK ACCESSORY"
          items={backAccessories}
          onSelectImage={addImage}
          category="backAccessory"
          selectedItemIndex={selectedIndices['backAccessory'] || null}
        />
        <MainSlider
          sliderName="PANT"
          items={pantImages}
          onSelectImage={addImage}
          category="pant"
          selectedItemIndex={selectedIndices['pant'] || null}
        />
        <MainSlider
          sliderName="OUTFIT"
          items={outfitImages}
          onSelectImage={addImage}
          category="outfit"
          selectedItemIndex={selectedIndices['outfit'] || null}
        />
        <MainSlider
          sliderName="BACKGROUND"
          items={backgroundImages}
          onSelectImage={addImage}
          category="background"
          selectedItemIndex={selectedIndices['background'] || null}
        />
      </div>
    </div>
  )
}

export default MainContentArea
