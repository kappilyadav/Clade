
'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const {push} = useRouter();

  return (
    <main className="flex text-black bg-white min-h-screen flex-col items-center overflow-hidden">
      <div id="subheader" className="mt-24 flex items-center gap-x-12 px-20 w-full border-b border-gray-300 bg-white">
        <button className="text-orange-600 font-bold py-4 border-b-2 border-orange-600">Job preview</button>
        <button className="text-gray-700 py-4">Applicants</button>
        <button className="text-gray-700 py-4">Match</button>
        <button className="text-gray-700 py-4">Messages</button>
      </div>

      <div id="content" className="grid grid-cols-12 w-full">
        <div className="col-span-12 lg:col-span-9 w-full">
          <div className="w-full py-8 px-20 border-b border-gray-300">
            <div className="mb-6 flex flex-col lg:flex-row lg:items-center justify-start gap-4">
              <span className="text-black text-3xl font-bold">Senior Product Designer</span>
              <span className="flex items-center gap-x-2 text-gray-900 text-sm">
                <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                posted 2 days ago
              </span>
              <span className="flex w-fit items-center gap-1 text-green-950 text-sm font-medium px-3 py-1 rounded-full bg-green-100 border border-green-400">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Open
              </span>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <span className="flex gap-x-2 text-gray-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Delaware, USA
              </span>
              <div className="h-1 w-1 rounded-full bg-gray-400"></div>
              <span className="flex gap-x-2 text-gray-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                $300k-$400k
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-b border-gray-300 py-8 px-20 gap-y-8">
            <div className="flex flex-col gap-y-2">
              <span className="text-gray-700 text-sm">Skills Required</span>
              <span className="flex items-center text-gray-700 text-sm border border-gray-300 px-2 py-1 rounded-md w-fit gap-x-1">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"/>
                </svg>
                Figma
              </span>
              <span className="flex items-center text-gray-700 text-sm border border-gray-300 px-2 py-1 rounded-md w-fit gap-x-1">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
                  <path d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" fill="#330000"/>
                  <path d="M15.5686 19.5963H11.2297L10.3469 22.409C10.3224 22.5135 10.2262 22.5875 10.1215 22.5823H7.92384C7.79851 22.5823 7.75469 22.5117 7.79236 22.3704L11.549 11.2738C11.5866 11.1582 11.6242 11.0266 11.6617 10.8789C11.7109 10.6218 11.736 10.3606 11.7369 10.0987C11.7261 10.0213 11.7941 9.95294 11.8683 9.96378H14.8549C14.9424 9.96378 14.9924 9.9959 15.0051 10.0601L19.269 22.3897C19.3065 22.5182 19.269 22.5824 19.1563 22.5823H16.7144C16.6288 22.5921 16.547 22.5334 16.5266 22.4475L15.5686 19.5963ZM11.9059 17.1689H14.8737C14.3861 15.5027 13.8358 13.8584 13.3898 12.1793C12.9086 13.8613 12.3836 15.5365 11.9059 17.1689Z" fill="#FF9A00"/>
                  <path d="M21.8045 12.0058C21.6129 12.0137 21.4219 11.98 21.2438 11.907C21.0658 11.834 20.9048 11.7232 20.7714 11.582C20.6384 11.4346 20.535 11.2618 20.4673 11.0733C20.3996 10.8849 20.3689 10.6846 20.3769 10.4839C20.3701 10.2852 20.4042 10.0873 20.477 9.90305C20.5499 9.71881 20.6598 9.5524 20.7996 9.41468C20.938 9.27839 21.1014 9.17161 21.2804 9.10052C21.4593 9.02942 21.6502 8.99543 21.842 9.00049C22.2929 9.00049 22.6466 9.13856 22.9033 9.41468C23.0329 9.55818 23.1336 9.72648 23.1997 9.90995C23.2657 10.0934 23.2959 10.2885 23.2883 10.4839C23.2962 10.6853 23.2645 10.8864 23.1951 11.075C23.1258 11.2636 23.0201 11.436 22.8845 11.582C22.7428 11.7253 22.5736 11.8369 22.3878 11.9099C22.2019 11.9828 22.0033 12.0155 21.8045 12.0058ZM20.5084 22.3896V13.181C20.5084 13.0654 20.5583 13.0076 20.6587 13.0076H22.9691C23.0691 13.0076 23.1192 13.0654 23.1193 13.181V22.3896C23.1193 22.5182 23.0692 22.5824 22.9691 22.5823H20.6775C20.5648 22.5823 20.5084 22.5181 20.5084 22.3896Z" fill="#FF9A00"/>
                </svg>
                Adobe Illustrator
              </span>
              <span className="flex items-center text-gray-700 text-sm border border-gray-300 px-2 py-1 rounded-md w-fit gap-x-1">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
                  <path d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" fill="#470137"/>
                  <path d="M16.6465 10.2338L13.1528 16.1482L16.8906 22.4285C16.9683 22.5709 16.8906 22.6024 16.778 22.6024H14.1108C13.9229 22.6024 13.7914 22.5956 13.7163 22.4671C13.4656 21.9662 13.2152 21.4685 12.9649 20.974C12.7143 20.4797 12.4482 19.9756 12.1667 19.4617C11.8849 18.9482 11.6063 18.4281 11.3308 17.9013C11.0802 18.4151 10.8015 18.9288 10.5325 19.4425C10.2631 19.9563 9.997 20.4668 9.73421 20.974C9.47126 21.4815 9.20203 21.9856 8.92655 22.4863C8.87636 22.6019 8.78858 22.6138 8.66353 22.6138H6.09026C5.98915 22.6138 5.97695 22.5378 6.03392 22.4478L9.65907 16.3408L6.1278 10.2145C6.06366 10.1271 6.11886 10.034 6.22174 10.0411H8.87015C8.98483 10.0347 9.08618 10.0779 9.15191 10.176C9.37732 10.6898 9.62776 11.2036 9.90323 11.7172C10.1785 12.231 10.4572 12.7384 10.7391 13.2391C11.0209 13.74 11.2995 14.2473 11.5374 14.7611C11.7877 14.2346 12.0413 13.7209 12.2981 13.2199C12.5547 12.719 12.8176 12.2149 13.087 11.7076C13.3562 11.2004 13.616 10.6963 13.8665 10.1953C13.8998 10.0854 13.9794 10.0297 14.0919 10.0411H16.5525C16.6465 10.0411 16.6853 10.1694 16.6465 10.2338Z" fill="#FF61F6"/>
                  <path d="M22.0371 22.8525C20.3806 22.8784 18.6455 22.1963 17.7733 20.6852C17.3475 19.9597 17.1346 19.0511 17.1347 17.9592C17.1276 17.075 17.3479 16.2045 17.7733 15.4355C18.871 13.4733 21.0824 12.7381 23.1829 12.9311V9.13586C23.1829 9.04615 23.2205 9.00101 23.2956 9.00101H25.6623C25.727 8.99153 25.7842 9.05023 25.775 9.11658V20.5022C25.775 20.9719 25.8216 21.44 25.8502 21.9085C25.8548 21.9885 25.8085 22.0677 25.7374 22.1012C24.5681 22.6014 23.3028 22.8467 22.0371 22.8525ZM23.1829 20.4636V15.2043C21.4673 14.7277 19.8017 16.0344 19.8019 17.8436C19.7612 19.7141 21.3736 21.0064 23.1829 20.4636Z" fill="#FF61F6"/>
                </svg>
                Adobe XD
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-gray-700 text-sm">Preferred Language</span>
              <span className="text-black text-md font-bold">English</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-gray-700 text-sm">Type</span>
              <span className="text-black text-md font-bold">Full Time</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-gray-700 text-sm">Years of Experience</span>
              <span className="text-black text-md font-bold">3+ Years of Experience</span>
            </div>
          </div>

          <div className="w-full py-8 px-20 border-b border-gray-300">
            <span className="text-gray-700 text-sm mb-1">About the job</span>
            <div className="text-md leading-6">
                <p>
                1. Handle the UI/UX research design <br/>
                2. Work on researching on latest web applications designs & trends <br/>
                3. Work on conceptualizing and visualizing <br/>
                4. Work on creating graphics content and other graphic related works <br/>
                </p>
                
                <p>Benefits: <br/></p>
                <ul className="list-disc ml-6" aria-label="Benefits:">
                  <li>Health insurance</li>
                  <li>Provident Fund</li>
                </ul>

                <p>Schedule: <br/></p>
                <ul className="list-disc ml-6" aria-label="Schedule:">
                  <li>Day shift</li>
                </ul>

                <p>Supplemental pay types: <br/></p>
                <ul className="list-disc ml-6" aria-label="Schedule:">
                  <li>Performance bonus</li>
                  <li>Yearly bonus</li>
                </ul>

                <p>Work Location: In person<br/></p>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 px-20 py-8 w-full">
            <span className="flex items-center gap-x-3 text-md text-black">
              <svg viewBox="-51.2 -51.2 358.40 358.40" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" className="size-10">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-51.2" y="-51.2" width="358.40" height="358.40" rx="17.92" fill="#0052cc" /></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier"><defs>
                    <linearGradient x1="99.6865531%" y1="15.8007988%" x2="39.8359011%" y2="97.4378355%" id="linearGradient-1">
                      <stop stopColor="#0052CC" offset="0%" />
                      <stop stopColor="#ffffff" offset="92.3%" />
                    </linearGradient>
                  </defs><g>
                  <path d="M75.7929022,117.949352 C71.973435,113.86918 66.0220743,114.100451 63.4262382,119.292123 L0.791180865,244.565041 C-0.370000214,246.886207 -0.24632242,249.643151 1.11803323,251.85102 C2.48238888,254.058889 4.89280393,255.402741 7.48821365,255.402516 L94.716435,255.402516 C97.5716401,255.468706 100.19751,253.845601 101.414869,251.262074 C120.223468,212.37359 108.82814,153.245434 75.7929022,117.949352 Z" fill="url(#linearGradient-1)" /> 
                  <path d="M121.756071,4.0114918 C86.7234975,59.5164098 89.0348008,120.989508 112.109989,167.141287 L154.170383,251.262074 C155.438703,253.798733 158.031349,255.401095 160.867416,255.401115 L248.094235,255.401115 C250.689645,255.401339 253.10006,254.057487 254.464416,251.849618 C255.828771,249.64175 255.952449,246.884805 254.791268,244.563639 C254.791268,244.563639 137.44462,9.83670492 134.492768,3.96383607 C131.853481,-1.29371311 125.14944,-1.36519672 121.756071,4.0114918 Z" fill="#ffffff" /></g></g>
              </svg>
              Atlassian
            </span>

            <div className="grid grid-cols-3">
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-y-6 max-lg:mb-6">
                <span>
                  <p className="text-sm text-gray-700 mb-1">Company Size</p>
                  <p className="text-md text-black">1k - 2k Employees</p>
                </span>

                <span>
                  <p className="text-sm text-gray-700 mb-1">Sector</p>
                  <p className="text-md text-black">Information Technology, Infrastructure</p>
                </span>

                <span>
                  <p className="text-sm text-gray-700 mb-1">Founded In</p>
                  <p className="text-md text-black">2019</p>
                </span>
              </div>

              <div className="col-span-3 lg:col-span-1 flex flex-col gap-6">
                <span>
                  <p className="text-sm text-gray-700 mb-1">Type</p>
                  <p className="text-md text-black">Private</p>
                </span>

                <span>
                  <p className="text-sm text-gray-700 mb-1">Funding</p>
                  <p className="text-md text-black">Bootstrapped</p>
                </span>

                <span>
                  <p className="text-sm text-gray-700 mb-1">Founded By</p>
                  <p className="text-md text-black">Scott Farquhar, Mike Cannon-Brookes</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 bg-gray-100 bg-opacity-30 border-l border-gray-300 px-20 lg:px-8">
          <div className="flex items-center justify-center gap-x-2 py-8">
            <button className="flex w-1/2 items-center justify-center gap-x-1 bg-orange-100 text-orange-600 text-sm border border-orange-600 rounded-md px-6 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Delete job
            </button>
            <button className="flex w-1/2 items-center justify-center gap-x-1 bg-orange-600 text-white text-sm border border-orange-600 rounded-md px-6 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
              Edit job
            </button>
          </div>

          <div className="flex flex-col gap-y-6 py-4 px-2">
            <div className="flex items-center justify-between border-b pb-6 px-2">
              <span className="flex gap-x-2 text-gray-900 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Applicants
              </span>
              <p className="text-black font-bold">100</p>
            </div>
            <div className="flex items-center justify-between border-b pb-6 px-2">
              <span className="flex gap-x-2 text-gray-900 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                Matches
              </span>
              <p className="text-black font-bold">147</p>
            </div>
            <div className="flex items-center justify-between border-b pb-6 px-2">
              <span className="flex gap-x-2 text-gray-900 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                Messages
              </span>
              <p className="text-black font-bold">800</p>
            </div>
            <div className="flex items-center justify-between border-b pb-6 px-2">
              <span className="flex gap-x-2 text-gray-900 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Views
              </span>
              <p className="text-black font-bold">400</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
