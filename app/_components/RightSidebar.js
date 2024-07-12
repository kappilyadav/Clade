import React from 'react'
import Image from 'next/image';
import Image1 from "@/assets/image1.jpg";
import Image2 from "@/assets/image2.webp";
import Image3 from "@/assets/image3.jpg";
import Image4 from "@/assets/image4.jpg";
import UserAvatar from './UserAvatar';
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCallOutline, IoChevronDown, IoCloseOutline, IoDocumentTextOutline, IoMail, IoMailOpenOutline, IoMailOutline, IoSparkles, IoSparklesOutline } from "react-icons/io5";
import { LuMail, LuSparkles } from "react-icons/lu";


function RightSidebar() {
  return (
    <div id="right-sidebar" className="col-span-1 hidden lg:flex flex-col px-6 bg-white flex-shrink-0 overflow-y-auto pb-10">
        <div className="ml-auto mt-4 hover:bg-gray-400 animate">
            <IoCloseOutline className="text-2xl cursor-pointer" />
        </div>
        <div className="flex flex-col items-center mt-4 w-full px-4 rounded-lg">
        <div className="flex items-center justify-center text-white text-3xl h-24 w-24 rounded-full border border-gray-400 overflow-hidden">
            <UserAvatar height={100} width={100} />
        </div>
        <div className="text-base font-bold mt-2">Kapil Yadav</div>
            <div className="flex items-center border bg-green-50 border-green-600 rounded-full py-1 px-2 mt-1 mb-3">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <div className="leading-none ml-1 text-[10px] font-semibold text-green-600">Open to part time</div>
            </div>
            <div className='hidden sm:flex items-center font-semibold gap-3'>
                <h3 className="text-xs text-gray-500">23 Years old</h3>
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                <h6 className="text-xs text-gray-500">Full Stack Engineer</h6>
            </div>
            <div className="flex items-center border bg-orange-50 border-primary rounded-full py-1 px-2 mt-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <div className="leading-none ml-1 text-[10px] font-semibold text-primary">100$/hour</div>
            </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
            {/* <div className="p-2 border rounded-md cursor-pointer hover:bg-gray-200 hover:-translate-y-2 animate">
                <HiOutlineDotsHorizontal />
            </div> */}
            <div className="p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 hover:-translate-y-2 animate">
                <IoCallOutline />
            </div>
            <div className="p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 hover:-translate-y-2 animate">
                <IoMailOutline />
            </div>
            <div className="p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 hover:-translate-y-2 animate">
                <IoDocumentTextOutline />
            </div>
            <div className="p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 hover:-translate-y-2 animate">
                <IoSparklesOutline />
            </div>
            <div className="p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 hover:-translate-y-2 animate">
                <IoChevronDown />
            </div>
        </div>
        
        <div className="flex flex-col mt-8 w-full ">
        <div className="flex items-center py-2 gap-2">
            <div>
            <h4 className="text-sm font-semibold">Skills</h4>
            <div className="flex gap-2 flex-wrap">
            <span className="flex items-center text-gray-700 text-xs border border-gray-300 px-1 py-1 rounded-md w-fit gap-x-1">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/>
                </svg>
                Figma
            </span>
            <span className="flex items-center text-gray-700 text-xs border border-gray-300 px-1 py-1 rounded-md w-fit gap-x-1">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                <path d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" fill="#470137"/>
                <path d="M16.6465 10.2338L13.1528 16.1482L16.8906 22.4285C16.9683 22.5709 16.8906 22.6024 16.778 22.6024H14.1108C13.9229 22.6024 13.7914 22.5956 13.7163 22.4671C13.4656 21.9662 13.2152 21.4685 12.9649 20.974C12.7143 20.4797 12.4482 19.9756 12.1667 19.4617C11.8849 18.9482 11.6063 18.4281 11.3308 17.9013C11.0802 18.4151 10.8015 18.9288 10.5325 19.4425C10.2631 19.9563 9.997 20.4668 9.73421 20.974C9.47126 21.4815 9.20203 21.9856 8.92655 22.4863C8.87636 22.6019 8.78858 22.6138 8.66353 22.6138H6.09026C5.98915 22.6138 5.97695 22.5378 6.03392 22.4478L9.65907 16.3408L6.1278 10.2145C6.06366 10.1271 6.11886 10.034 6.22174 10.0411H8.87015C8.98483 10.0347 9.08618 10.0779 9.15191 10.176C9.37732 10.6898 9.62776 11.2036 9.90323 11.7172C10.1785 12.231 10.4572 12.7384 10.7391 13.2391C11.0209 13.74 11.2995 14.2473 11.5374 14.7611C11.7877 14.2346 12.0413 13.7209 12.2981 13.2199C12.5547 12.719 12.8176 12.2149 13.087 11.7076C13.3562 11.2004 13.616 10.6963 13.8665 10.1953C13.8998 10.0854 13.9794 10.0297 14.0919 10.0411H16.5525C16.6465 10.0411 16.6853 10.1694 16.6465 10.2338Z" fill="#FF61F6"/>
                <path d="M22.0371 22.8525C20.3806 22.8784 18.6455 22.1963 17.7733 20.6852C17.3475 19.9597 17.1346 19.0511 17.1347 17.9592C17.1276 17.075 17.3479 16.2045 17.7733 15.4355C18.871 13.4733 21.0824 12.7381 23.1829 12.9311V9.13586C23.1829 9.04615 23.2205 9.00101 23.2956 9.00101H25.6623C25.727 8.99153 25.7842 9.05023 25.775 9.11658V20.5022C25.775 20.9719 25.8216 21.44 25.8502 21.9085C25.8548 21.9885 25.8085 22.0677 25.7374 22.1012C24.5681 22.6014 23.3028 22.8467 22.0371 22.8525ZM23.1829 20.4636V15.2043C21.4673 14.7277 19.8017 16.0344 19.8019 17.8436C19.7612 19.7141 21.3736 21.0064 23.1829 20.4636Z" fill="#FF61F6"/>
                </svg>
                Adobe XD
            </span>
            </div>
        </div>
        </div>
        <div className="flex items-center py-2 gap-2">
            <LuSparkles className="text-xl text-primary hover:scale-105 animate" />
            <div>
            <h4 className="text-sm font-semibold">AI match prediction</h4>
            <p className="text-xs">88%</p>
            </div>
        </div>
        <div className="flex items-center py-2 gap-2">
            <div>
            <h4 className="text-sm font-semibold">Description</h4>
            <p className="text-xs">I&apos;m a Full Stack Engineer looking for opportunities to work in a team and build world-class products.</p>
            </div>
        </div>
        </div>

        <div className="flex flex-col mt-8 w-full rounded-lg">
            <h4 className="font-semibold mb-3">Docs</h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="mb-5">
                    <div className="mb-3">
                        <svg className="size-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path style={{fill: "#E2E5E7"}} d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z" />
                        <path style={{fill: "#B0B7BD"}} d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z" />
                        <polygon style={{fill: "#CAD1D8"}} points="480,224 384,128 480,128" />
                        <path style={{fill: "#F15642"}} d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16V416z" />
                        <g>
                            <path style={{fill: "#FFFFFF"}} d="M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48 c0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z" />
                            <path style={{fill: "#FFFFFF"}} d="M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296 c58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z" />
                            <path style={{fill: "#FFFFFF"}} d="M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68 h-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912 c5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z" />
                        </g>
                        <path style={{fill: "#CAD1D8"}} d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z" />
                        </svg>
                    </div>
                    <p className="text-xs">Kapil-Yadav-Resume.pdf</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col mt-8 w-full rounded-lg">
            <h4 className="font-semibold mb-3">Media</h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="h-24 w-auto">
                <Image src={Image1} alt="Image 1" className="h-full w-full object-cover rounded-xl hover:scale-105 animate" />
                </div>
                <div className="h-24 w-auto">
                <Image src={Image2} alt="Image 2" className="h-full w-full object-cover rounded-xl hover:scale-105 animate" />
                </div>
                <div className="h-24 w-auto">
                <Image src={Image3} alt="Image 3" className="h-full w-full object-cover rounded-xl hover:scale-105 animate" />
                </div>
                <div className="h-24 w-auto">
                <Image src={Image4} alt="Image 4" className="h-full w-full object-cover rounded-xl hover:scale-105 animate" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar