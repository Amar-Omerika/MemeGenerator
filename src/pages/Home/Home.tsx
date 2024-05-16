import React from 'react'

import {
  CatBackground,
  DownloadIcon,
  GenerateIcon,
  ResetIcon
} from '../../assets'
import MainSlider from '../../components/MainSlider'
import GenericButton from '../../components/buttons/GenericButton'

const Home: React.FC = () => {
  function handleButtonClick() {
    console.log('Reset Michi')
  }

  return (
    <div className="flex ">
      <div className="h-screen">
        <div className="w-[32rem] rounded-2xl border-8 border-darkBrown">
          <img src={CatBackground} alt="CatBackground" className="rounded-lg" />
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
          customStyle={{
            backgroundColor: '#764824',
            color: '#fdf6e7',
            width: '98%',
            padding: '13px',
            margin: '1rem auto'
          }}
        />
      </div>
      <div className="h-screen w-full overflow-hidden">
        <div className="ml-16 h-full border-l-2 border-darkBrown px-16 py-12">
          <h1 className="text-2xl font-extrabold text-darkBrown">
            CREATE YOUR MICHI
          </h1>
          <MainSlider />
        </div>
      </div>
    </div>
  )
}

export default Home
