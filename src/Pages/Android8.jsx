import React from 'react'

import { Link } from 'react-router-dom';
import { Footer } from '../components/common components/Footer';
import { ToggleBtn } from '../components/common components/ToggleBtn';

import graph from "../data/graph.png";
import workout1 from "../data/workout1.png";
import workout2 from "../data/workout2.png";
import workout3 from "../data/workout3.png";

import { RiArrowLeftSLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";

const Android8 = () => {
  return (

    <div className='mt-5 mx-auto w-[343px] '>

        <div className='mx-auto flex items-center justify-center'>
            <div className='bg-boxColor rounded-[3px] w-[20px] h-[20px]'>
                <Link to="/tracker" className='size-[20px] flex items-center justify-center'>
                    <RiArrowLeftSLine/>
                </Link>
            </div>
            <div className='mx-auto w-[192px] h-[24px]'>
                <p className='font-semibold text-[20px] leading-[24.38px] text-black'>
                    Workout Tracker
                </p>
            </div>
        </div>

        <div className='flex flex-col translate-x-[152.5px] translate-y-16'>
            <p className='font-normal text-[11.2px] justify-center -translate-x-5 leading-[14px]'>
                Good job
            </p>
            <div className='flex flex-col justify-center gap-[3px]'>
                <div className='rounded-full bg-greyBlack w-[3px] h-[3px]'></div>
                <div className='rounded-full bg-greyBlack w-[3px] h-[7px]'></div>
            </div>
        </div>
        <div className='flex flex-col translate-x-[266px] translate-y-[37px]'>
            <p className='font-normal text-[11.2px] justify-center -translate-x-9 leading-[14px]'>
                less then 320cal
            </p>
            <div className='flex flex-col justify-center gap-[3px]'>
                <div className='rounded-full bg-greyBlack w-[3px] h-[3px]'></div>
                <div className='rounded-full bg-greyBlack w-[3px] h-[7px]'></div>
            </div>
        </div>

        {/* Graph */}
        <div className='mt-10'>
            <Link to="/schedule">
                <img src={graph} alt='graph' className=""/>
            </Link>
        </div>

        {/* Motivation Box */}
        <div className='mt-[30px] w-[328.75px] flex justify-center items-center gap-2 h-[50px] rounded-[10px] bg-gradient-to-r from-fromAlert from-fromAlert/[0.28] to-toAlert to-toAlert/[0.00]'>
            <FiAlertTriangle className='text-triangleColor text-[20px]'/>
            <p className='w-[281px] h-[30px] font-montserrat font-medium text-[12.57px] leading-[15.32px]'>
                You've burned fewer calories than
                <br></br>
                yesterday. Time to get moving!
            </p>
        </div>

        {/* Upcoming Workouts */}
        <div className='pt-[50px] flex justify-between items-center pb-5'>
            <p className='w-[164px] h-[20px] font-montserrat font-medium text-[16px] leading-[19.5px]'>Upcoming Workout</p>
            <p className='w-[58px] h-[15px] font-montserrat font-medium text-[12px] leading-[14.63px] text-greyShade'>See more</p>
        </div>

        <div>

            <div className='w-[343px] h-[75px] rounded-[12px] bg-white flex justify-between items-center mb-4
            drop-shadow-md md:drop-shadow-xl'>
                <img src={workout1} alt='workout1' className='w-[50px] h-[50px] ml-4'/>
                <div className='flex flex-col'>
                    <p className="w-[114px] h-[15px] font-montserrat font-medium text-[12px] leading-[14.63px]">Full Body Workout</p>
                    <p className='w-[56px] h-[12px] font-montserrat font-medium text-[10px] leading-[12.19px] text-greyShade'>Today 3pm</p>
                </div>
                <ToggleBtn/>
            </div>

            <div className='w-[343px] h-[75px] rounded-[12px] bg-white flex justify-between items-center mb-4
            drop-shadow-md md:drop-shadow-xl'>
                <img src={workout2} alt='workout2' className='w-[50px] h-[50px] ml-4'/>
                <div className='flex flex-col'>
                    <p className="w-[114px] h-[15px] font-montserrat font-medium text-[12px] leading-[14.63px] whitespace-nowrap">Upper Body Workout</p>
                    <p className='w-[56px] h-[12px] font-montserrat font-medium text-[10px] leading-[12.19px] text-greyShade whitespace-nowrap'>4 Feb,3:30 pm</p>
                </div>
                <ToggleBtn/>
            </div>

            <div>
                <p className='w-[225px] h-[20px] mt-5 mb-5 font-montserrat font-semibold text-[16px] leading-[19.5px]'>What Do You Want to Train</p>
            </div>

            <div className=' w-[343px] h-[124px] rounded-[12px] p-4 bg-workoutBox bg-opacity-60 flex justify-between '>
                <div className='flex flex-col gap-2'>
                    <p className='w-[150px] h-[13px] font-montserrat font-medium text-[13px] leading-[14.63px] whitespace-nowrap'>Full Body Workout</p>
                    <p className=' w-[27px] h-[12px] font-montserrat font-medium text-[11px] leading-[12.19px]'>Arms</p>
                    <p className=' w-[30px] h-[12px] font-montserrat font-medium text-[11px] leading-[12.19px]'>Chest</p>
                </div>
                <img src={workout3} alt='workout3' className='relative rounded-full bg-backgroundWhite bg-opacity-40 w-[100px] h-[100px] '/>
            </div>

        </div>

        <div className='-translate-y-12'>
            <Footer/>
        </div>
        
    </div>
  )
}

export default Android8;
