import React, { createContext, useState, ReactNode } from 'react'

interface SelectedImagesContextProps {
  selectedImages: string[]
  addImage: (image: string) => void
  resetImages: () => void
}

export const SelectedImagesContext = createContext<SelectedImagesContextProps>({
  selectedImages: [],
  addImage: () => {},
  resetImages: () => {}
})

export const SelectedImagesProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const addImage = (image: string) => {
    setSelectedImages((prevImages) => [...prevImages, image])
  }

  const resetImages = () => {
    setSelectedImages([])
  }

  return (
    <SelectedImagesContext.Provider
      value={{ selectedImages, addImage, resetImages }}
    >
      {children}
    </SelectedImagesContext.Provider>
  )
}
