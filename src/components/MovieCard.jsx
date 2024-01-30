import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48'>
        <img src={IMG_CDN+posterpath} alt="Card Movie" />
    </div>
  )
}

export default MovieCard