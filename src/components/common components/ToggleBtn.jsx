import React, { useState } from 'react'

export const ToggleBtn = () => {

    const [on , setOn] = useState(false);

  return (
    <div onClick={() => setOn((prev) => !prev)}>
        <div className="rounded-full mr-4 p-[3px] bg-facebook w-[40px] h-[20px] flex items-center transition-all duration-200 bg-toggleColor">
            {
                on ? (
                    <div className='-ml-[1px] bg-white w-[15.71px] h-[15.71px] rounded-full translate-x-5 toggle-label-before' ></div>
                ) : (
                    <div className='bg-white w-[15.71px] h-[15.71px] rounded-full toggle-label-after' ></div>
                )
            }
            {/* <div className='bg-white w-[15.71px] h-[15.71px] rounded-full' ></div> */}
        </div>
    </div>
  )
}