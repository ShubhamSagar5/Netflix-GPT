import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilis/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utilis/UserSlice";
import { NETFLIX_LOGO, USER_AVTAR, multiLangauges } from "../Utilis/Constant";
import { toggleGPTSearchView } from "../Utilis/GPTSlice";
import { chooseLanguage } from "../Utilis/LanguageSlice";

const Header = () => {
  
const navigate = useNavigate()
const dispatch = useDispatch()
const user = useSelector((store)=>store.User)
const GPTView = useSelector((store)=>store.GPT.gptView)


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  
  useEffect(()=>{
    const unscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          // ...
          navigate('/browse')
        } else {
          // User is signed out
          // ...

          dispatch(removeUser())
          navigate('/')
        }
      });

      return () => {
        unscribe()
      }
},[])


const handleGPTView = () => {
  dispatch(toggleGPTSearchView())
}

const handleLanguage = (e) => {
  dispatch(chooseLanguage(e.target.value))
}


  return (
    <div className="absolute bg-gradient-to-b from-black w-[99%] z-30 flex justify-between no-scrollbar ">
      <div>
        <img
          className=" w-[180px] p-3 m-3"
          src={NETFLIX_LOGO}
          alt="Nelflix Logo"
        />
      </div>
      {
        user && <div className="flex m-4 ">
        <button className="bg-gray-700 px-4 py-2 mx-2 my-4 rounded-lg text-white" onClick={handleGPTView}> {GPTView ? 'Home' : 'GPT Search'}</button>
        
        <select className="px-4 py-2 my-4 mx-2 rounded-lg bg-gray-700 text-white" onChange={handleLanguage}>
         {
          multiLangauges.map((lan)=><option value={lan.optionValue}>{lan.optionText}</option>)
         } 
        </select>

        <img
          className=" rounded-lg w-12 h-12 m-2 "
          src={USER_AVTAR}
          alt="UserIcon"
        />
        <button className="font-bold text-white cursor-pointer h-7 mt-6" onClick={handleSignOut}>
          (SignOut)
        </button>
      </div>
      }
      
    </div>
  );
};

export default Header;
