import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilis/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utilis/UserSlice";
import { NETFLIX_LOGO, USER_AVTAR } from "../Utilis/Constant";

const Header = () => {
  
const navigate = useNavigate()
const dispatch = useDispatch()
const user = useSelector((store)=>store.User)



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

  return (
    <div className="absolute bg-gradient-to-b from-black w-[99%] z-30 flex justify-between no-scrollbar ">
      <div>
        <img
          className=" w-[200px] p-3 m-3"
          src={NETFLIX_LOGO}
          alt="Nelflix Logo"
        />
      </div>
      {
        user && <div className="flex m-4 ">
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
