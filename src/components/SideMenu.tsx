import React, { useContext } from 'react'
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
        <Stage width={500} height={500} ref={stageRef}>
          <Layer>
            {Object.values(selectedImages).map((src, index) => (
              <ImageLayer key={index} src={src} />
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

const ImageLayer = ({ src }: { src: string }) => {
  const [image] = useImage(src)
  const imageSize = 500 // Adjust this size based on your requirements
  const borderRadius = 20 // Adjust this value to change the border radius

  return <KonvaImage image={image} x={0} y={0} width={imageSize} height={500} />
}

export default SideMenu
