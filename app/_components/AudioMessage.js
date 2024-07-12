import React from 'react'

function AudioMessage({ isSent, audio, userName, time }) {
  return (
    <div className="mb-5">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center text-sm bg-slate-100 w-fit rounded-t-2xl rounded-r-2xl py-2 px-4 mb-2">
                <button className="flex items-center justify-center bg-primary text-white hover:bg-orange-700 animate rounded-full h-8 w-10">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
                <div className="flex flex-row items-center space-x-px ml-4">
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                    <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
          <p className="font-semibold text-xs mb-3">{userName}</p>
          <p className="text-xs mb-3 text-gray-400">{time}</p>
      </div>
    </div>
  )
}

export default AudioMessage