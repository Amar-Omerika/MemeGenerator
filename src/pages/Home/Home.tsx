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
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-screen border border-r-2 border-darkBrown pr-6">
        <div className="rounded border-8 border-darkBrown">
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
      <div className="col-span-9 h-full w-full p-14">
        <h1 className="text-2xl font-extrabold text-darkBrown">
          CREATE YOUR MICHI
        </h1>
        <MainSlider />
      </div>
    </div>
  )
}

export default Home
