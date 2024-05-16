import React from 'react'

import {
  CatBackground,
  DownloadIcon,
  GenerateIcon,
  ResetIcon
} from '../../assets'
import GenericButton from '../../components/GenericButton'
import MainSlider from '../../components/MainSlider'

const Home: React.FC = () => {
  function handleButtonClick() {
    console.log('Reset Michi')
  }

  return (
    <div className="flex ">
      <div className="h-screen">
        <div className="w-[25rem] rounded border-8 border-darkBrown">
          <img src={CatBackground} alt="CatBackground" />
        </div>
        <GenericButton
          customOnClick={handleButtonClick}
          buttonText={'RESET MICHI'}
          buttonIcon={ResetIcon}
        />
        <GenericButton
          customOnClick={handleButtonClick}
          buttonText={'GENERATE RANDOM'}
          buttonIcon={GenerateIcon}
        />
        <GenericButton
          customOnClick={handleButtonClick}
          buttonText={'DOWNLOAD'}
          buttonIcon={DownloadIcon}
          customStyle={{ backgroundColor: '#764824', color: '#fdf6e7' }}
        />
      </div>
      <div className="h-screen w-full">
        <div className="ml-12 h-full border-l-2 border-darkBrown p-14">
          <h1 className="text-2xl font-extrabold text-darkBrown">
            CREATE YOUR MICHI
          </h1>
          {/* <MainSlider /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
