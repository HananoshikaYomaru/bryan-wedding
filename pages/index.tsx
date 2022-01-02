import type { NextPage } from 'next'
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-soapstone">
      <div className="w-screen  flex flex-col items-center">
        <div className="flex flex-row bg-pickled-bluewood p-8 space-x-12 w-full justify-center">
          <p className="bartext">Home</p>
          <p className="bartext">Our Location</p>
          <p className="bartext">Upcoming Events</p>
          <p className="bartext">Our Story</p>
          <p className="bartext">Our Friends</p>
          <p className="bartext">Our Gallery</p>
        </div>
        <div className="w-full">
          <div className="h-144 relative w-full ">
            <div className="absolute h-144 bg-blue-200 w-full"></div>
            <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img>
            {/* <div className="backdrop-grayscale h-10 w-10"></div> */}
            <div className="absolute flex items-center justify-center inset-0">
              <div className="flex flex-col items-center space-y-10 mt-32">
                <p className="text-soapstone drop-shadow font-wenyue text-2xl">Wedding Day</p>
                <p className="font-thankyou text-soapstone text-7xl drop-shadow">Bryan & Fanny</p>
                <button className="bg-soapstone px-5 py-2 text-pickled-bluewood font-copperplate drop-shadow rounded-xl text-xl"> Our story</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 mt-10 flex flex-col items-center">
          <p className="text-pickled-bluewood font-thankyou text-3xl m-10">About Us</p>
          <div className="relative font-thankyou h-240 w-full">
            <div className="absolute bg-blue-200 h-96 w-full">
              <div className="bg-red-200 h-96 w-2/5 drop-shadow-xl"></div>
            </div>

            <div className="absolute bg-blue-200 h-96 w-full bottom-0">
              <div className="relative w-full h-full ">
                <div className="absolute bg-red-200 h-96 w-2/5 right-0 drop-shadow-xl">
                </div>
              </div>
            </div>

            <div className="absolute inset-0 top-1/2 left-1/2 bg-red-200 h-96 w-2/5 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl"> 

            </div>

          </div>
        </div>
        <div className="mt-20 h-64 bg-pickled-bluewood w-full"></div>
      </div>
    </div>
  )
}

export default Home
