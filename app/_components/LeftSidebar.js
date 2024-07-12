import React from 'react'
import UserChat from './UserChat'

function LeftSidebar() {
  return (
    <div id="left-sidebar" className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col h-full bg-white flex-shrink-0 overflow-y-auto border-r border-gray-300">
        <div className="hidden sm:block font-bold py-3 px-4 border-b border-gray-300">
            <input className="w-full hover:border-primary animate p-2 border-2 border-gray-300 bg-gray-50 rounded-md text-sm focus:outline-primary" name="search" placeholder="Search" />
        </div>
        <div>
            <div className="hidden sm:flex gap-3 px-4 mt-4 mb-2">
                <p className="border border-primary bg-primary rounded-full text-[9px] text-white px-1 cursor-pointer">All</p>
                <p className="border border-primary bg-orange-50 rounded-full text-[9px] text-primary font-semibold px-1 cursor-pointer">Unread</p>
                <p className="border border-primary bg-orange-50 rounded-full text-[9px] text-primary font-semibold px-1 cursor-pointer">Archived</p>
                <p className="border border-primary bg-orange-50 rounded-full text-[9px] text-primary font-semibold px-1 cursor-pointer">Blocked</p>
            </div>

            <div className="flex sm:hidden items-center justify-center h-16 bg-primary">
              <p className="text-center text-white font-semibold">Chats</p>
            </div>

            <UserChat userName="Harsh" userAvatar="H" messageCount={0} messageTime="01:31" isSelected={false} />
            <UserChat userName="Kapil" messageCount={2} messageTime="12:11" isSelected={true} />
            <UserChat userName="Parik" userAvatar="P" messageCount={0} messageTime="yesterday" isSelected={false} />
            <UserChat userName="Matthew" userAvatar="M" messageCount={0} messageTime="7 July" isSelected={false} />
            <UserChat userName="Karan" userAvatar="K" messageCount={0} messageTime="6 July" isSelected={false} />
            <UserChat userName="Rahul" userAvatar="R" messageCount={0} messageTime="6 July" isSelected={false} />
        </div>
    </div>
  )
}

export default LeftSidebar