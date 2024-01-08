import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-20 py-48 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-4xl mb-2'>{title}</h1>
        <div className='w-1/3'>
            <p className='text-xl'>{overview}</p>
        </div>
        <div>
            <button className='px-5 py-2 bg-gray-400 rounded-md mt-3 text-black hover:bg-opacity-40'>Play</button>
            <button className='px-5 py-2 bg-gray-400  rounded-md mt-3 ml-2 bg-opacity-30'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle