import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineCamera } from "react-icons/hi2";
import gallery from "../../data/gallery.png";
import search from "../../data/search.png";
import profile from "../../data/profile.png";

export const Footer = () => {
  return (
    <div className='bg-white w-[343px]'>
        <div className=' flex flex-row justify-evenly bg-white gap-7 mx-auto items-center w-[330px] h-[76px]'>
            <div className='text-[30px] text-greyShade'>
                <RiHome2Line/>
            </div>
            <div>
                <img src={gallery} alt="gallery" 
                width={"30px"}
                />
            </div>
            <div className='drop-shadow-md md:drop-shadow-xl'>
                <img src={search} alt="search" 
                width={"86px"}
                height={"86px"}
                className='-translate-y-7'/>
            </div>
            <div className="text-[30px] text-greyShade">
                <HiOutlineCamera/>
            </div>
            <div>
                <img src={profile} alt='profile'
                width={"30px"}/>
            </div>
        </div>
    </div>
  )
}
