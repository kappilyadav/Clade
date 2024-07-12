import React from 'react'
import UserAvatar from './UserAvatar'
import Image1 from "@/assets/image1.jpg";
import Image3 from "@/assets/image3.jpg";
import TextMessageSent from "@/app/_components/TextMessageSent";
import TextMessageReceived from "@/app/_components/TextMessageReceived";
import AudioMessage from "@/app/_components/AudioMessage";
import ImageMessage from "@/app/_components/ImageMessage";
import DocumentMessage from "@/app/_components/DocumentMessage";
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { IoCallOutline, IoChevronDown, IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";


function ChatArea() {
  return (
    <div id="message-area" className="relative col-span-4 sm:col-span-3 flex flex-col h-full overflow-x-hidden overflow-y-auto border-r border-gray-300">
        <div id='message-topbar' className="bg-white fixed flex items-center justify-between py-3 px-10 border-b border-r border-gray-300 w-4/5 sm:w-3/5 z-10">
        <div className="flex gap-4 items-center justify-center">
            <div className="h-10 w-10">
                <UserAvatar height={48} width={48} />
            </div>
            <div>
            <h3 className="text-sm font-bold mb-1">Kapil Yadav</h3>
            <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <div className="leading-none ml-1 text-xs font-semibold text-gray-600">Online</div>
            </div>
            </div>
        </div>
        <div className="rounded-full  border-gray-300 hover:cursor-pointer hover:bg-gray-400 animate">
            <HiOutlineDotsVertical className="text-lg" />
        </div>
        {/* <div className="flex gap-6"> */}
            {/* <div className="rounded-full  border-gray-300 hover:cursor-pointer hover:bg-gray-400 animate">
            <LuMail className="text-xl" />
            </div> */}
        {/* </div> */}
        </div>

        <div className="flex flex-col flex-auto h-full px-10 py-28"> {/* Add pt-20 to account for the fixed topbar height */}
        <TextMessageReceived
            userName="Kapil Yadav"
            messagesArray={[
            "Hey, How are you today?"
            ]}
            time="10:01 AM"
        />
        <TextMessageSent
            userName="You"
            messagesArray={["I'm ok what about you?"]}
            time="10:03 AM"
        />
        <DocumentMessage
            userName="Kapil Yadav"
            time="10:04 AM"
        />
        <TextMessageReceived
            userName="Kapil Yadav"
            messagesArray={[
            "I'm a Full Stack Engineer looking for opportunities to work in a team and build world class product.",
            "Resume attached above"
            ]}
            time="10:03 AM"
        />
        <TextMessageSent
            userName="Kapil Yadav"
            messagesArray={[
            "Let's have a word with you over a meeting by 5:30 PM today.",
            "Prior to that I'm providing you a UI task to complete before the meeting.",
            "https://www.figma.com/design/1PsDL6m6lgnCK9Fs6x1fUX/Job-preview-dashboard?node-id=0-1&t=BJHbP5c7XvExFaPL-0"
            ]}
            time="10:16 AM"
        />
        <ImageMessage
            imagesArray={[{ url: Image1 }, { url: Image3 }]}
            userName="Kapil Yadav"
            time="10:04 AM"
        />
        <TextMessageReceived
            userName="Kapil Yadav"
            messagesArray={["Sure, how about using these vector images in the task."]}
            time="11:30 AM"
        />
        <AudioMessage
            userName="Kapil Yadav"
            time="11:58 AM"
        />

        {/* using for the bottom fixed button */}
        <div className="pb-36"></div>
        </div>

        {/* type message button */}
        <div id='type-message-area' className="fixed bottom-0 flex flex-row items-center h-20 rounded-t-xl bg-gray-200 px-4 w-4/5 sm:w-3/5 z-10 border-r">
        <button className="flex items-center justify-center text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
        </button>
        <div className="flex-grow ml-4">
            <div className="relative w-full">
            <input
                type="text"
                className="flex w-full border-2 rounded-xl focus:outline-none border-primary py-2 pl-4 h-12 hover:bg-gray-100 animate"
                placeholder="Type..."
            />
            <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            </div>
        </div>
        <button className="flex items-center justify-center bg-primary hover:bg-orange-700 animate rounded-xl text-white px-4 py-3 flex-shrink-0 ml-4">
            <span>Send</span>
            <span className="ml-2">
            <svg className="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            </span>
        </button>
        </div>
    </div>
  )
}

export default ChatArea