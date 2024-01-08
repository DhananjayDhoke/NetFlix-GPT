import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constant";

const useTrailer = (movieId)=>{
   
    const [trailerId, setTrailerId] = useState("");
    const getMovieVideo = async () => {
        try {
          const responce = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTION
          );
          const data = await responce.json();
          const filterData = data.results.filter((e) => e.type === "Trailer");
          const trailer = filterData.length ? filterData[0] : data.results[0];
          setTrailerId(trailer.key)
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getMovieVideo();
      }, []);

      return trailerId;
}

export default useTrailer;