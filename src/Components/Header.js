import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilis/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utilis/UserSlice";

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
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          // ...
          navigate('/browse')
        } else {
          // User is signed out
          // ...

          dispatch(removeUser())
          navigate('/')
        }
      });
},[])

  return (
    <div className="absolute bg-gradient-to-b from-black w-[100vw] z-30 flex justify-between">
      <div>
        <img
          className=" w-[200px] p-5 m-5"
          src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
          alt="Nelflix Logo"
        />
      </div>
      {
        user && <div className="p-2 flex mt-2">
        <img
          className="w-12 h-12 rounded-lg m-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU"
          alt="UserIcon"
        />
        <span className="font-bold text-white pl-2 ml-2 mr-2 cursor-pointer " onClick={handleSignOut}>
          (SignOut)
        </span>
      </div>
      }
      
    </div>
  );
};

export default Header;
