

import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular';
import Header from './Header'
import MainContainer from './MainContainer';
import SeconderyContainer from './SeconderyContainer';


const Browse = () => {
   
   useNowPlaying();
   usePopular();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  )
}

export default Browse