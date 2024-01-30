import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constant';
import { addPopularMovies } from '../Redux/movieSlice';

const usePopular = () => {
    
    const dispatch = useDispatch();
    const getPopular = async  ()=>{
         
      try {
        const responce = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTION);
        const data = await responce.json();
  
        dispatch(addPopularMovies(data.results))
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(()=>{
        getPopular();
      },[])
}

export default usePopular