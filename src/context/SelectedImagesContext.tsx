import React, { createContext, useState, ReactNode, useEffect } from 'react'

import { backgroundImages } from '../assets/backgrounds'
import { catImages } from '../assets/cats'

interface SelectedImagesContextProps {
  selectedImages: { [key: string]: string }
  addImage: (category: string, image: string) => void
  resetImages: () => void
}

export const SelectedImagesContext = createContext<SelectedImagesContextProps>({
  selectedImages: {},
  addImage: () => {},
  resetImages: () => {}
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

  return (
    <SelectedImagesContext.Provider
      value={{ selectedImages, addImage, resetImages }}
    >
      {children}
    </SelectedImagesContext.Provider>
  )
}
