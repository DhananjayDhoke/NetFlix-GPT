import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {


  return (
    <div className='p-4'>
        <h1 className='text-1xl font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex gap-3'>
            {movies && movies.length>0 && movies.map(movie=><MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
            
        </div>
       </div>
    </div>
  )
}

export default MovieList