import {
  CatBackground,
  DownloadIcon,
  GenerateIcon,
  ResetIcon
} from '../assets/assets'
import GenericButton from './buttons/GenericButton'

function SideMenu() {
  return (
    <div>
      <div className="mx-auto w-full rounded-2xl border-8 border-darkBrown sm:w-[32rem] md:w-[300px] lg:w-[500px]">
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
  )

  function handleButtonClick() {
    console.log('Reset Michi')
  }
}

export default SideMenu
