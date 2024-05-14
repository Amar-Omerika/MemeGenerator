import React, { useRef } from 'react'

import {
  CatBackground,
  DownloadIcon,
  GenerateIcon,
  ResetIcon,
  Cat1
} from '../../assets'

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
        <div className="mt-12">
          <span className="text-xl font-bold text-darkBrown">Cat</span>
          <div className="flex w-full items-center">
            <button
              onClick={scrollLeft}
              className="h-28 rounded-md border-2 border-darkBrown p-4 font-bold text-darkBrown"
            >
              &lt;
            </button>
            <div
              className="flex w-full overflow-x-hidden"
              ref={scrollContainer}
            >
              {images.slice(0, 8).map((image, index) => (
                <div
                  key={index}
                  className="mx-2 rounded-md border-4 border-darkBrown bg-white p-2"
                >
                  <img src={image} alt={`Cat ${index + 1}`} width={98} />
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="h-28 rounded-md border-2 border-darkBrown bg-white p-4 font-bold text-darkBrown"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
