import React from 'react'

export default function CallToAction({ header, text, buttonText }) {
  return (
    <div className='flex justify-center h-80 bg-indigo-900 bg-blend-lighten md:bg-blend-darken'>
        <div className='m-5'>
          <h1 className='text-center font-bold text-3xl pt-10 text-[#e5e7eb]'>{ header } </h1>
          <p className=' text-center text-[#e5e7eb] pt-5 pb-10 text-lg'>
              { text }
          </p>
            <button
                className="ml-10 transition delay-150 duration-300 ease-in-out outline-3 outline-offset-2 rounded-full border-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-4/5">
                    { buttonText }
            </button>
        </div>
    </div>
  )
}
