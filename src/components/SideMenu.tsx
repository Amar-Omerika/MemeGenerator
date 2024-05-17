import React, { useContext, useEffect, useState } from 'react'
import { Stage, Layer, Image as KonvaImage } from 'react-konva'
import useImage from 'use-image'

import { DownloadIcon, GenerateIcon, ResetIcon } from '../assets/assets'
import { SelectedImagesContext } from '../context/SelectedImagesContext'
import GenericButton from './buttons/GenericButton'

function SideMenu() {
  const { selectedImages, resetImages, generateRandomMichi } = useContext(
    SelectedImagesContext
  )
  const stageRef = React.useRef<any>(null)
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 })

  useEffect(() => {
    const handleResize = () => {
      const container = stageRef.current.container()
      setDimensions({
        width: container.offsetWidth,
        height: container.offsetWidth
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Set initial size
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleDownload = () => {
    const uri = stageRef.current.toDataURL()
    const link = document.createElement('a')
    link.download = 'michi.png'
    link.href = uri
    link.click()
  }

  return (
    <div>
      <div className="mx-auto w-full rounded-2xl border-8 border-darkBrown sm:w-[32rem] md:w-[300px] lg:w-[500px]">
        <Stage
          width={dimensions.width}
          height={dimensions.height}
          ref={stageRef}
        >
          <Layer>
            {Object.values(selectedImages).map((src, index) => (
              <ImageLayer key={index} src={src} dimensions={dimensions} />
            ))}
          </Layer>
        </Stage>
      </div>
      <GenericButton
        customOnClick={resetImages}
        buttonText={'RESET MICHI'}
        buttonIcon={ResetIcon}
      />
      <GenericButton
        customOnClick={generateRandomMichi}
        buttonText={'GENERATE RANDOM'}
        buttonIcon={GenerateIcon}
      />
      <GenericButton
        customOnClick={handleDownload}
        buttonText={'DOWNLOAD'}
        buttonIcon={DownloadIcon}
        customStyle={{
          backgroundColor: '#764824',
          color: '#fdf6e7',
          width: '98%',
          padding: '13px',
          margin: '1rem auto'
        }}
      />
    </div>
  )
}

const ImageLayer = ({
  src,
  dimensions
}: {
  src: string
  dimensions: { width: number; height: number }
}) => {
  const [image] = useImage(src)
  const imageSize = dimensions.width // Adjust this size based on your requirements

  const x = (dimensions.width - imageSize) / 2
  const y = (dimensions.height - imageSize) / 2

  return (
    <KonvaImage
      image={image}
      x={x}
      y={y}
      width={imageSize}
      height={imageSize}
    />
  )
}

export default SideMenu
