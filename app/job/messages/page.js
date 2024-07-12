'use client'

import Image from "next/image";
import Avatar from "@/assets/avatar/kapil-yadav.jpg";
import Image1 from "@/assets/image1.jpg";
import Image2 from "@/assets/image2.webp";
import Image3 from "@/assets/image3.jpg";
import Image4 from "@/assets/image4.jpg";
import ChatArea from "@/app/_components/ChatArea";
import LeftSidebar from "@/app/_components/LeftSidebar";
import RightSidebar from "@/app/_components/RightSidebar";
import UserAvatar from "@/app/_components/UserAvatar";
import UserChat from "@/app/_components/UserChat";
import TextMessageSent from "@/app/_components/TextMessageSent";
import TextMessageReceived from "@/app/_components/TextMessageReceived";
import AudioMessage from "@/app/_components/AudioMessage";
import ImageMessage from "@/app/_components/ImageMessage";
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCallOutline, IoChevronDown, IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";


export default function Messages() {

  return (
    <div className="pt-36 flex h-screen text-gray-800">
      <div className="grid grid-cols-5 h-full overflow-hidden mt-14 sm:mt-12 md:mt-3">

        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Message Area */}
        <ChatArea />

        {/* Right Sidebar */}
        <RightSidebar />

      </div>
    </div>
  );
}