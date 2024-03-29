import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilis/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utilis/UserSlice";
import { NETFLIX_LOGO, USER_AVTAR, multiLangauges } from "../Utilis/Constant";
import { toggleGPTSearchView } from "../Utilis/GPTSlice";
import { chooseLanguage } from "../Utilis/LanguageSlice";
import { toggleTrailerView } from "../Utilis/DetailMovieTrailerSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.User);
  const GPTView = useSelector((store) => store.GPT.gptView);
  const TrailerView = useSelector((store)=>store.DetailTrailer?.trailerView)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unscribe();
    };
  }, []);

  const handleGPTView = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguage = (e) => {
    dispatch(chooseLanguage(e.target.value));
  };

  const handleTrailerView = () => {
    dispatch(toggleTrailerView())
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-[100%] z-30 flex flex-col md:flex-row justify-between ">
      <div>
        <img
          className="w-[195px] md:w-[170px] p-3  mx-auto md:mx-0"
          src={NETFLIX_LOGO}
          alt="Nelflix Logo"
        />
      </div>
      {user && (
        <div className="flex m-4 ">
          {
            TrailerView ? <div>
            <button
            className="bg-gray-700 px-4 py-2 ml-[32px] md:mx-2 my-4 rounded-lg text-white"
            onClick={handleTrailerView}
          >
            Home
          </button>
            </div> :<div><button
            className="bg-gray-700 px-4 py-2 mx-[65px] md:mx-2 my-4 rounded-lg text-white"
            onClick={handleGPTView}
          >
            {" "}
            {GPTView ? "Home" : "GPT Search"}
          </button>
          {GPTView && (
            <select
              className=" px-3 md:px-4 py-2 md:my-4 md:mx-2 ml-[150px] md:ml-0  -pt-[200px]  rounded-lg bg-gray-700 text-white"
              onChange={handleLanguage}
            >
              {multiLangauges.map((lan) => (
                <option value={lan.optionValue}>{lan.optionText}</option>
              ))}
            </select>
          )}</div> 

          }
          
          <img
            className=" rounded-lg w-12 h-12 m-2 "
            src={USER_AVTAR}
            alt="UserIcon"
          />
          <button
            className="font-bold text-white cursor-pointer h-7 mt-6"
            onClick={handleSignOut}
          >
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
