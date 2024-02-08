import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Redux/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constant';
import { toggleGptSearchView } from '../Redux/gptSlice';
import { PreferedLanguage } from '../utils/languageConstant';

const Header = () => {

  const navigate = useNavigate();
  
  const user = useSelector((store)=> store.user)
   
  const handelLogOut = ()=>{
   
signOut(auth).then(() => {}).catch((error) => {
  console.log(error)
  navigate('/error')
});
  }

  const dispatch = useDispatch();

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;

        dispatch(addUser({uid,email,displayName}))
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });

    return ()=> unsubscribe();
  },[])

  const handelShowGptSearch = ()=>{
    dispatch(toggleGptSearchView())
  }
  return (
    
    <div className='absolute  p-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={LOGO}
        className='w-44'
        alt="logo" />
    {user && <div className='flex'>
      <select name="" id="">
        {PreferedLanguage.map((e)=> <option key={e.identifier} value={e.identifier}>{e.name}</option>)}
      </select>
     <button className='p-2 m-2 bg-purple-400 text-white'
     onClick={handelShowGptSearch}>Gpt Search</button>
      <img src={USER_AVATAR}
      className='w-16'
      alt="sign out logo" />
      <button className='text-white font-bold'  onClick={handelLogOut}>Sign Out</button>
    </div>}
  </div>
  
  )
}

export default Header