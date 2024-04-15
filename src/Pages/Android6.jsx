import React, {useState} from 'react'

import { Link } from 'react-router-dom';

const Android6 = () => {

    // use state for defining status of checkbox fields
    const [checked , setChecked] = useState(false)

    const data = [
        "Weight Loss",
        "Muscle Gain",
        "Flexibility And Mobility",
        "General Fitness",
        "Event-Specific Training",
        "Mindfulness and Mental Health"
    ];


  return (

    <div className='mt-5 flex flex-col gap-5 justify-between items-center'>

        <div className='w-[219px] h-[24px]'>
            <p className='text-[20px] text-black font-semibold leading-[24.38px]'>
                What are your goals?
            </p>
        </div>

        {/* even if one checkbox is true, confirm button navigates to workout tracker page */}
        <div className=''>
            {
                data.map((card , index) => (
                    <div key={index} className='flex justify-between items-center w-[343px] h-[50px] rounded-[12px] bg-boxColor m-5 p-5'>
                        <div className=''>{card}</div>
                        <input
                        onClick={() => setChecked(true)}
                        type='checkbox' 
                        className='w-[22px] h-[22px] checked:accent-red '/>
                    </div>
                ))
            }
        </div>

        <Link to={checked ? '/tracker' : "/goals"} className="flex mt-[140px] items-center justify-center w-[343px] h-[50px] rounded-[12px] bg-gradient-to-r from-fromCreateAccountBtn to-toCreateAccountBtn">
            <button className='w-[67px] h-[20px] font-montserrat font-semibold text-[16px] text-center leading-[19.5px] text-white'>
                Confirm
            </button>
        </Link>

    </div>
  )
}

export default Android6;
