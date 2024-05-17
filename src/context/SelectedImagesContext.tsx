import React, { createContext, useState, ReactNode, useEffect } from 'react'

import { backAccessories } from '../assets/backaccessories'
import { backgroundImages } from '../assets/backgrounds'
import { catImages } from '../assets/cats'
import { faceImages } from '../assets/faces'
import { frontAccessories } from '../assets/frontaccessories'
import { hatImages } from '../assets/hats'
import { outfitImages } from '../assets/outfits'
import { pantImages } from '../assets/pants'

interface SelectedImagesContextProps {
  selectedImages: { [key: string]: string }
  addImage: (category: string, image: string) => void
  resetImages: () => void
  generateRandomMichi: () => void
}

export const SelectedImagesContext = createContext<SelectedImagesContextProps>({
  selectedImages: {},
  addImage: () => {},
  resetImages: () => {},
  generateRandomMichi: () => {}
})

export const SelectedImagesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [selectedImages, setSelectedImages] = useState<{
    [key: string]: string
  }>({})

  useEffect(() => {
    const initialImages: { [key: string]: string } = {}
    if (backgroundImages.length > 0) {
      initialImages['background'] = backgroundImages[0]
    }
    if (catImages.length > 0) {
      initialImages['cat'] = catImages[0]
    }
    setSelectedImages(initialImages)
  }, [])

  const addImage = (category: string, image: string) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [category]: image
    }))
  }

  const resetImages = () => {
    const resetImages: { [key: string]: string } = {}
    if (backgroundImages.length > 0) {
      resetImages['background'] = backgroundImages[0]
    }
    if (catImages.length > 0) {
      resetImages['cat'] = catImages[0]
    }
    setSelectedImages(resetImages)
  }

  const getRandomImage = (images: string[]) => {
    return images[Math.floor(Math.random() * images.length)]
  }

  const generateRandomMichi = () => {
    const randomImages: { [key: string]: string } = {}
    if (backgroundImages.length > 0) {
      randomImages['background'] = getRandomImage(backgroundImages)
    }
    if (catImages.length > 0) {
      randomImages['cat'] = getRandomImage(catImages)
    }
    if (faceImages.length > 0) {
      randomImages['face'] = getRandomImage(faceImages)
    }
    if (hatImages.length > 0) {
      randomImages['hat'] = getRandomImage(hatImages)
    }
    if (outfitImages.length > 0) {
      randomImages['outfit'] = getRandomImage(outfitImages)
    }
    if (pantImages.length > 0) {
      randomImages['pant'] = getRandomImage(pantImages)
    }
    if (frontAccessories.length > 0) {
      randomImages['frontAccessory'] = getRandomImage(frontAccessories)
    }
    if (backAccessories.length > 0) {
      randomImages['backAccessory'] = getRandomImage(backAccessories)
    }
    setSelectedImages(randomImages)
  }

  return (
    <SelectedImagesContext.Provider
      value={{ selectedImages, addImage, resetImages, generateRandomMichi }}
    >
      {children}
    </SelectedImagesContext.Provider>
  )
}
