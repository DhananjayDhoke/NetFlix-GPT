import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Redux/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";


const useNowPlaying = ()=>{

    const dispatch = useDispatch();
    const getNowPlaying = async  ()=>{
         
      try {
        const responce = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTION);
        const data = await responce.json();
  
        dispatch(addNowPlayingMovies(data.results))
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(()=>{
        getNowPlaying();
      },[])
}

export default useNowPlaying;