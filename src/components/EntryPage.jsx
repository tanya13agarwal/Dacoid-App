import React from 'react'

import { Link } from 'react-router-dom';


function EntryPage({image , text1 , text2 , Ellipse , classname , linkto , value}) {
  return (
    <div className='flex flex-col gap-y-10 mt-5 mx-auto w-[343px]'>

        <div className="flex justify-end items-center">
            <Link to = "/signup" className="w-[36px] h-[20px]">
                <button className='text-Btnblue underline font-medium text-[17px] leading-[19.5px] '>
                    Skip
                </button>
            </Link>
        </div>

        <div>

            <img src={image}
                alt='main'
                width="282px"
                height="282px"
                className={`mx-auto ${
                    value ? 
                    "w-[400px] mb-4" : 
                    "pb-[1px]"
                }`}
            />

            <div className='h-[84px]'></div>

            <div className='w-[160px] h-[24px]  gap-2'>
                <p className='font-semibold text-[20px] leading-[24.38px] text-black'>
                    {text1}
                </p>
            </div>

            <div className='w-[343px] h-[60px] mt-[9px]'>
                <p className='font-medium text-[17px] leading-[19.5px] text-grey'>
                    {text2}
                </p>
            </div>

        </div>

        <div className='flex justify-end items-center mt-6'>
                <Link to={linkto} className='w-[60px] h-[60px]'>
                    <img src={Ellipse}
                        alt='Ellipse1'
                        className= {classname}
                    />
                </Link>
        </div>
        
    </div>
  )
}

export default EntryPage