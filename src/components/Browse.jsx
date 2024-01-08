

import useNowPlaying from '../hooks/useNowPlaying'
import Header from './Header'
import MainContainer from './MainContainer';
import SeconderyContainer from './SeconderyContainer';


const Browse = () => {
   
   useNowPlaying();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  )
}

export default Browse