import React from 'react'

import {
  CatBackground,
  DownloadIcon,
  GenerateIcon,
  ResetIcon
} from '../../assets'

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="border-darkBrown col-span-2 h-screen border border-r-2 pr-6">
        <div className="border-darkBrown rounded border-8">
          <img src={CatBackground} alt="CatBackground" />
        </div>
        <div className="text-darkBrown border-darkBrown mt-4 flex w-full flex-row justify-center rounded-full border-4 bg-white py-4 font-bold">
          <img src={ResetIcon} alt="ResetIcon" className="mr-4" />
          <button className="">RESET MICHI</button>
        </div>
        <div className="text-darkBrown border-darkBrown mt-4 flex w-full flex-row justify-center rounded-full border-4 bg-white py-4 font-bold">
          <img src={GenerateIcon} alt="GenerateIcon" className="mr-4" />
          <button className=""> GENERATE RANDOM</button>
        </div>
        <div className="border-darkBrown bg-darkBrown mt-4 flex w-full flex-row justify-center rounded-full border-4 py-4 font-bold text-white">
          <img src={DownloadIcon} alt="DownloadIcon" className="mr-4" />
          <button className="">DOWNLOAD</button>
        </div>
      </div>
      <div className="col-span-4 h-full">
        <h1 className="text-black">This is a test component</h1>
      </div>
    </div>
  )
}

export default Home
