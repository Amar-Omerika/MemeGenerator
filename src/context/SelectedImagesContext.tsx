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
  selectedIndices: { [key: string]: number }
  addImage: (category: string, image: string, index: number) => void
  resetImages: () => void
  generateRandomMichi: () => void
}

export const SelectedImagesContext = createContext<SelectedImagesContextProps>({
  selectedImages: {},
  selectedIndices: {},
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
  const [selectedIndices, setSelectedIndices] = useState<{
    [key: string]: number
  }>({})

  useEffect(() => {
    const initialImages: { [key: string]: string } = {
      background: backgroundImages[0] || '',
      cat: catImages[0] || '',
      face: '',
      hat: '',
      outfit: '',
      pant: '',
      frontAccessory: '',
      backAccessory: ''
    }
    const initialIndices: { [key: string]: number } = {
      background: 0,
      cat: 0,
      face: 0,
      hat: 0,
      outfit: 0,
      pant: 0,
      frontAccessory: 0,
      backAccessory: 0
    }
    setSelectedImages(initialImages)
    setSelectedIndices(initialIndices)
  }, [])

  const addImage = (category: string, image: string, index: number) => {
    setSelectedImages((prevImages) => {
      if (index === 0 && category !== 'background' && category !== 'cat') {
        const { [category]: _, ...newImages } = prevImages
        return newImages
      }
      return {
        ...prevImages,
        [category]: image
      }
    })

    setSelectedIndices((prevIndices) => ({
      ...prevIndices,
      [category]: index
    }))
  }

  const resetImages = () => {
    const resetImages: { [key: string]: string } = {
      background: backgroundImages[0] || '',
      cat: catImages[0] || '',
      face: '',
      hat: '',
      outfit: '',
      pant: '',
      frontAccessory: '',
      backAccessory: ''
    }
    const resetIndices: { [key: string]: number } = {
      background: 0,
      cat: 0,
      face: 0,
      hat: 0,
      outfit: 0,
      pant: 0,
      frontAccessory: 0,
      backAccessory: 0
    }
    setSelectedImages(resetImages)
    setSelectedIndices(resetIndices)
  }

  const getRandomImage = (images: string[], excludeFirst = false) => {
    const startIndex = excludeFirst ? 1 : 0
    const randomIndex =
      Math.floor(Math.random() * (images.length - startIndex)) + startIndex
    return images[randomIndex]
  }

  const generateRandomMichi = () => {
    const randomImages: { [key: string]: string } = {
      background: getRandomImage(backgroundImages, true), // Always use the 0 index for background
      cat: getRandomImage(catImages, true), // Always use the 0 index for cat
      face: getRandomImage(faceImages, true),
      hat: getRandomImage(hatImages, true),
      outfit: getRandomImage(outfitImages, true),
      pant: getRandomImage(pantImages, true),
      frontAccessory: getRandomImage(frontAccessories, true),
      backAccessory: getRandomImage(backAccessories, true)
    }
    const randomIndices: { [key: string]: number } = {
      background: backgroundImages.indexOf(randomImages['background']),
      cat: catImages.indexOf(randomImages['cat']),
      face: faceImages.indexOf(randomImages['face']),
      hat: hatImages.indexOf(randomImages['hat']),
      outfit: outfitImages.indexOf(randomImages['outfit']),
      pant: pantImages.indexOf(randomImages['pant']),
      frontAccessory: frontAccessories.indexOf(randomImages['frontAccessory'])
    }
    setSelectedImages(randomImages)
    setSelectedIndices(randomIndices)
  }

  return (
    <SelectedImagesContext.Provider
      value={{
        selectedImages,
        selectedIndices,
        addImage,
        resetImages,
        generateRandomMichi
      }}
    >
      {children}
    </SelectedImagesContext.Provider>
  )
}
