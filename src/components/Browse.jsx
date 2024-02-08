

import { useSelector } from 'react-redux';
import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SeconderyContainer from './SeconderyContainer';


const Browse = () => {
   
   useNowPlaying();
   usePopular();

   const searchView = useSelector((store)=>store.gpt.showGptSearch);

  return (
    <div>
      <Header/>
       {searchView ? <GptSearch/> : <> <MainContainer/>
      <SeconderyContainer/> </>}
      
    </div>
  )
}

export default Browse