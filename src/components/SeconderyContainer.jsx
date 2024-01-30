import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SeconderyContainer = () => {

  const movies = useSelector(store=> store.movies);

  return (
    <div className='bg-black'>
       
       <div className='-mt-52 relative z-10'>
       <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
       <MovieList title="Trending" movies={movies.nowPlayingMovies}/>
       <MovieList title="Horror" movies={movies.nowPlayingMovies}/>
       <MovieList title="Popular" movies={movies.popularMovies}/>
       </div>

    </div>
  )
}

export default SeconderyContainer