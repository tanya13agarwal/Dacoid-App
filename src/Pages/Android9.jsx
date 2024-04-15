import React from 'react'
import { Link } from 'react-router-dom';

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import {RiArrowLeftSLine} from 'react-icons/ri';

import { Footer } from '../components/common components/Footer';

const Android9 = () => {

    const time = [
        "06:00 AM",
        "07:00 AM",
        "08:00 AM",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 AM",
        "01:00 AM",
        "02:00 AM",
        "03:00 AM",
        "04:00 AM",
        "05:00 AM",
    ]

  return (
    <div className='mt-5 w-[343px] mx-auto h-screen'>

        <div className='mx-auto flex flex-row items-center justify-center'>
            <div className='bg-boxColor rounded-[3px] w-[20px] h-[20px]'>
                <Link to="/tracker" className='size-[20px] flex items-center justify-center'>
                    <RiArrowLeftSLine/>
                </Link>
            </div>
            <div className='mx-auto w-[192px] h-[24px]'>
                <p className='font-semibold text-[20px] leading-[24.38px] text-black'>
                    Workout Schedule
                </p>
            </div>
        </div>

        {/* Calender */}
        <div className='flex justify-center items-center gap-2 mt-4 mx-auto text-[12px]'>
            <FaChevronLeft/>
            <p className='font-semibold leading-[14.63px] text-black'>Feb 2024</p>
            <FaChevronRight/>
        </div>

        <div className='h-[76.85px] flex justify-center items-center gap-1 mt-7 mx-auto'>

            <div className='w-[62.67px] h-[76.24px] rounded-[9.96px] bg-white flex justify-center items-center text-greyBlack'>
                <div>
                    <p className='font-semibold text-[11.39px] leading-[14.23px] mb-2'>
                        Sun
                    </p>
                    <span className='font-semibold text-[28.46px] leading-[17.08px]'>
                        5
                    </span>
                </div>
            </div>

            {/* highlighted box */}
            <div className='w-[63px] h-[74px] rounded-[9.96px] bg-white flex justify-center items-center text-greyBlack
            bg-gradient-to-r from-fromCal to-toCal'>
                <div>
                    <p className='font-semibold text-[11.39px] leading-[14.23px] mb-2 text-white'>
                        Mon
                    </p>
                    <span className='font-semibold text-[28.46px] leading-[17.08px] text-white'>
                        6
                    </span>
                </div>
            </div>

            <div className='w-[62.67px] h-[76.24px] rounded-[9.96px] bg-white flex justify-center items-center text-greyBlack'>
                <div>
                    <p className='font-semibold text-[11.39px] leading-[14.23px] mb-2'>
                        Tue
                    </p>
                    <span className='font-semibold text-[28.46px] leading-[17.08px]'>
                        7
                    </span>
                </div>
            </div>

            <div className='w-[62.67px] h-[76.24px] rounded-[9.96px] bg-white flex justify-center items-center text-greyBlack'>
                <div>
                    <p className='font-semibold text-[11.39px] leading-[14.23px] mb-2'>
                        Wed
                    </p>
                    <span className='font-semibold text-[28.46px] leading-[17.08px]'>
                        8
                    </span>
                </div>
            </div>

            <div className='w-[62.67px] h-[76.24px] rounded-[9.96px] bg-white flex justify-center items-center text-greyBlack'>
                <div>
                    <p className='font-semibold text-[11.39px] leading-[14.23px] mb-2'>
                        Thu
                    </p>
                    <span className='font-semibold text-[28.46px] leading-[17.08px]'>
                        9
                    </span>
                </div>
            </div>

        </div> 

        {/* Workout Hours */}
        <div className='w-[343px] mt-10 whitespace-nowrap'>
            {
                time.map((card , index) => (
                    <div key={index} className=''>
                        <p className='w-[61px] h-[15px] font-semibold text-[13px] leading-[14.63px] text-black mt-3 mb-3'>{card}</p>
                        <hr className='-translate-x-4 w-[375px]'/>
                    </div>

                ))
            }
        </div>

        {/* Highlighted Details */}
        <div className='w-[150px] rounded-full h-[30px] bg-gradient-to-r from-divgradfrom to-divgradto
        flex justify-center items-center translate-x-[195px] -translate-y-[415px]'>
            <p className='text-white font-semibold text-[12px] leading-[14.63px] flex justify-center items-center'>
                Ab Workout, 7:30am
            </p>
        </div>
        
        <div className='w-[160px] rounded-full h-[30px] bg-gradient-to-r from-divgradfrom to-divgradto
        flex justify-center items-center translate-x-28  -translate-y-[375px]'>
            <p className='text-white font-semibold text-[12px] leading-[14.63px]'>
                Upperbody Workout, 9am
            </p>
        </div>

        
        <div className='w-[6px] h-[6px] bg-ball rounded-full -translate-x-[11px] -translate-y-[382px]'></div>
        <div className='w-[307px] bg-white border-t-[2px] border-ball h-[5px]
        -translate-x-[5.5px]  -translate-y-[386px]'></div>
        
        <div className='w-[63px] rounded-full h-[63px] bg-gradient-to-r from-divgradfrom to-divgradto
        flex justify-center items-center translate-x-[280px] -translate-y-[184px]
        drop-shadow-md md:drop-shadow-xl'>
            <p className=' text-white text-[36px] leading-[43.88px] '>
                +
            </p>
        </div>

        <div className='w-[173px] rounded-[20px] h-[30px] bg-gradient-to-r bg-boxColor
        flex justify-center items-center translate-x-[80px] -translate-y-[291px]'>
            <p className='text-black font-semibold text-[12px] leading-[14.63px] flex justify-center items-center'>
                Lowerbody Workout, 3pm
            </p>
        </div>
        
        <div className='-translate-y-[150px]'>
            <Footer/>
        </div>

    </div>
  )
}

export default Android9