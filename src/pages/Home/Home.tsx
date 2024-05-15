import React, { useRef } from 'react'

import {
  CatBackground,
  DownloadIcon,
  GenerateIcon,
  ResetIcon,
  Cat1
} from '../../assets'
import MainSlider from '../../components/MainSlider'

const Home: React.FC = () => {
  const scrollContainer = useRef<any>(null)

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 150
    }
  }

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 150
    }
  }
  const images = [
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1,
    Cat1
  ]
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-screen border border-r-2 border-darkBrown pr-6">
        <div className="rounded border-8 border-darkBrown">
          <img src={CatBackground} alt="CatBackground" />
        </div>
        <div className="mt-4 flex w-full flex-row justify-center rounded-full border-4 border-darkBrown bg-white py-4 font-bold text-darkBrown">
          <img src={ResetIcon} alt="ResetIcon" className="mr-4" />
          <button className="">RESET MICHI</button>
        </div>
        <div className="mt-4 flex w-full flex-row justify-center rounded-full border-4 border-darkBrown bg-white py-4 font-bold text-darkBrown">
          <img src={GenerateIcon} alt="GenerateIcon" className="mr-4" />
          <button className=""> GENERATE RANDOM</button>
        </div>
        <div className="mt-4 flex w-full flex-row justify-center rounded-full border-4 border-darkBrown bg-darkBrown py-4 font-bold text-white">
          <img src={DownloadIcon} alt="DownloadIcon" className="mr-4" />
          <button className="">DOWNLOAD</button>
        </div>
      </div>
      <div className="col-span-9 h-full w-full p-10">
        <h1 className="text-2xl font-bold text-darkBrown">CREATE YOUR MICHI</h1>
        <MainSlider />
      </div>
    </div>
  )
}

export default Home
