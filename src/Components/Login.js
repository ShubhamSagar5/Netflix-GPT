import { useState } from 'react'
import Header from './/Header'


const Login = () => {



    const [isSignForm,setIsSignForm] = useState(true)

    const handleSignInSignUpForm = () => {
        setIsSignForm(!isSignForm)
    }



    return (

        <div className=" ">
           <Header />
           <div className="bgImg absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
           </div>


            <form action="" className="absolute w-3/12 p-10 bg-black my-36 mx-[530px]  text-white bg-opacity-80 rounded-lg">
                    
                    <h2 className=' font-bold text-2xl p-1 my-3'> {isSignForm ? 'Sign In' : 'Sign Up'}</h2>
                    {!isSignForm && <input type="text" placeholder="Enter Full Name" className='w-full bg-gray-800 p-3 my-4 rounded-lg '/>}
                    <input type="text" placeholder="Email Addresss" className='w-full bg-gray-800 p-3 my-4 rounded-lg '/>

                    <input type="password" placeholder="Password" className='w-full  bg-gray-800 p-3 my-4 rounded-lg'/>

                    <button className="bg-red-700 w-full p-3 my-6 rounded-lg" >{isSignForm ? 'Sign In' : 'Sign Up'}</button>
                
                    <p className='p-1 my-3 cursor-pointer' onClick={handleSignInSignUpForm}>{isSignForm ? 'New to Netflix? Sign Up Now' : 'Already Registred? Sign In Now'}</p>

                </form>
           
           
                

        </div>
    )
} 

export default Login