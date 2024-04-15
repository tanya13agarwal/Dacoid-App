import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import googleIcon from "../data/googleIcon.png";

const LoginSignUpBottom = ({text , askText , linktowhere , directTo , checked , present}) => {
  return (
    <div className='w-[343px] translate-y-[100px]'>
        
        <Link to={checked ? '/goals' : present}>
            <button className="w-full flex justify-center items-center h-[50px] rounded-[12px] bg-gradient-to-r from-fromCreateAccountBtn to-toCreateAccountBtn">
                <p className='font-montserrat font-semibold text-[17px] leading-[19.5px] text-white'>
                    {text}
                </p>
            </button>
        </Link>

        <div className='flex flex-row justify-center items-center gap-1 mt-5'>
            <div className='w-[155px] h-[0px] border-[0.5px]'></div>
            <p className=' w-[15px] h-[15px] font-montserrat font-medium text-[12px] leading-[14.63px]'>Or</p>
            <div className='w-[155px] h-[0px] border-[0.5px]'></div>
        </div>

        <div className='flex mt-5 items-center justify-center'>
            <div className='flex items-center justify-center w-[44px] h-[44px] border-[1px] rounded-[8px] text-greyShade'>
                <img src={googleIcon} alt='googleIcon' className='w-[18px] h-[18px]'/>
            </div>
            <div className='ml-3 flex items-center justify-center w-[44px] h-[44px] border-[1px] rounded-[8px] text-greyShade'>
                <FaFacebookF className='text-facebook'/>
            </div>
        </div>

        <div className='font-montserrat font-medium text-[12px] leading-[14.63px] flex items-center justify-center mt-5'>
            <p>{askText}</p>
            <Link to={linktowhere} className='pl-1 underline text-Btnblue'>
                {directTo}
            </Link>
        </div>

    </div>
  )
}

export default LoginSignUpBottom