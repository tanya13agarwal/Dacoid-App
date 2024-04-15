import React, { useState } from 'react'

import LoginSignUpBottom from '../components/LoginSignUpBottom';

import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";

const Android5 = () => {

    // use state for eye icon to show or hide the password entered by user
    const [showPassword , setShowPassword] = useState(false);


  return (
    <div className='flex flex-col gap-11 mt-5'>

          <div className='w-[164px] h-[23px] '>
              <p className=' font-semibold text-[20px] text-center leading-[23.44px]'>
                  Welcome Back
              </p>
          </div>
          
          <form className='flex flex-col gap-6 items-center'>
              
              <input 
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-[343px] h-[50px] rounded-[12px] p-5 bg-boxColor placeholder:text-greyShade
                   placeholder:text-[13px]  placeholder:font-semibold placeholder:leading-[14.63px]'
              />
              <input 
                  type = {showPassword ? 'text' : "password" }
                  name='password'
                  placeholder='Password'
                  className='w-[343px] h-[50px] rounded-[12px] p-5 bg-boxColor placeholder:text-greyShade
                   placeholder:text-[13px] placeholder:font-semibold placeholder:leading-[14.63px]'
              />
                <span onClick={() => setShowPassword((prev) => !prev)}
                className='translate-x-[150px] -translate-y-[58px] text-grey text-[20px]'>
                    {
                        showPassword ? (<GoEyeClosed/>) : (<GoEye/>)
                    }
                </span>
        

            <div className='w-[140px] h-[15px] translate-y-[-55px] translate-x-[-98px]'>
                <p className='font-medium text-[12px] leading-[14.63px] underline text-greyShade'>Forgot your password?</p>
            </div>


            <div className='mt-28'>
                <LoginSignUpBottom
                    present = "/login"
                    checked={true}
                    text="Sign In"
                    askText="Don't have an account yet? "
                    linktowhere="/signup"
                    directTo="Create an account"
                />
            </div>
        </form>     
          
      </div>
  )
}

export default Android5