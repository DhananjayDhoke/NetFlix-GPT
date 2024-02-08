import React from 'react'
import { langConstant } from '../utils/languageConstant'

const GptSearchBar = () => {
  return (
    <div className='pt-28 p-4 flex justify-center'>
      <form action="" className='m-2 p-4 bg-black w-3/6'>
      <input type="text"  className='m-1 p-2 w-9/12' placeholder={langConstant.hindi.plcText} />
      <button className='m-1 p-2 w-2/12 bg-red-500'>{langConstant.hindi.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar