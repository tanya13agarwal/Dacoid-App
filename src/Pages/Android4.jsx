import React , { useState} from 'react'
import LoginSignUpBottom from '../components/LoginSignUpBottom';

import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";

export default function Android4() {

    const [showPassword , setShowPassword] = useState(false);
    const [checked , setChecked] = useState(false);

    return (
        
      <div className='flex flex-col gap-11 mt-5 mx-auto w-[343px]'>

          <div className='w-[164px] h-[23px] ml-4'>
              <p className=' font-semibold text-[20px] whitespace-nowrap leading-[23.44px]'>
                  Create an account
              </p>
          </div>

          <form className='flex flex-col gap-6 items-center'>
              <input 
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  className='w-[343px] h-[50px] rounded-[12px] bg-boxColor placeholder:text-greyShade
                   placeholder:text-[13px] placeholder:font-semibold placeholder:leading-[14.63px] p-5'
              />
              <input 
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  className='w-[343px] h-[50px] rounded-[12px] bg-boxColor placeholder:text-greyShade
                   placeholder:text-[13px] p-5 placeholder:font-semibold placeholder:leading-[14.63px]'
              />
              <input 
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-[343px] h-[50px] rounded-[12px] bg-boxColor placeholder:text-greyShade
                   placeholder:text-[13px] p-5 placeholder:font-semibold placeholder:leading-[14.63px]'
              />
              <input 
                  type = {showPassword ? 'text' : "password" }
                  name='password'
                  placeholder='Password'
                  className='w-[343px] h-[50px] rounded-[12px] bg-boxColor placeholder:text-greyShade
                   placeholder:text-[13px] placeholder:font-semibold p-5 placeholder:leading-[14.63px]'
              />
                <span onClick={() => setShowPassword((prev) => !prev)}
                className='translate-x-[150px] -translate-y-[58px] text-grey text-[20px]'>
                    {
                        showPassword ? (<GoEyeClosed/>) : (<GoEye/>)
                    }
                </span>

              <div className='flex flex-row gap-2'>
                <input
                    onClick={() => setChecked((prev) => !prev)}
                    type = 'checkbox'
                    name='check'
                    className='w-[22px] h-[22px] checked:accent-red'
                />
                <label htmlFor='check' className='w-[313px] h-[22px]'>
                    <p className='text-greyShade font-medium text-[13px] leading-[21.35px] whitespace-nowrap'>
                        By proceeding, I agree to all <a href='/' className='underline text-Btnblue'>T&C</a> and <a href='/' className='underline text-Btnblue'>Privacy Policy</a>
                    </p> 
                </label>
              </div>

              <LoginSignUpBottom
              present = "/signup"
              checked = {checked}
              text="Create an Account"
              askText="Already have an account? "
              linktowhere="/login"
              directTo="Login"/>
          </form>
      </div>
    )
  }
  