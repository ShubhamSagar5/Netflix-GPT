import { useRef, useState } from "react";
import Header from ".//Header";
import { CheckValidData } from "../Utilis/ValidateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilis/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utilis/UserSlice";
import { BG_POSTER_URL, USER_AVTAR } from "../Utilis/Constant";

const Login = () => {
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMess, setErrorMess] = useState();

  const handleSignInSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleValidation = () => {
    const message = CheckValidData(email.current.value, password.current.value);

    setErrorMess(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          email.current.value = "";
          password.current.value = "";

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const {uid,email,displayName,photoURL} = auth.currentUser
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          name.current.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMess(errorCode + "-" + errorMess);
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          email.current.value = "";
          password.current.value = "";

      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMess(errorCode + "-" + errorMess);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_POSTER_URL}
          alt="BG_POSTER"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-10 bg-black my-36 mx-[530px] text-white bg-opacity-80 rounded-lg"
      >
        <h2 className=" font-bold text-2xl p-1 my-3">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Full Name"
            className="w-full bg-gray-800 p-3 my-4 rounded-lg "
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Addresss"
          className="w-full bg-gray-800 p-3 my-4 rounded-lg "
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="w-full  bg-gray-800 p-3 my-4 rounded-lg"
        />

        <button
          className="bg-red-700 w-full p-3 my-6 rounded-lg"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-700">{errorMess}</p>
        <p className="p-1 my-3 cursor-pointer" onClick={handleSignInSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registred? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
