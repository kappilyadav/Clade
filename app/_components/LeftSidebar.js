import React from 'react'
import UserChat from './UserChat'

function LeftSidebar() {
  return (
    <div id="left-sidebar" className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col h-full bg-white flex-shrink-0 overflow-y-auto border-r border-gray-300">
        <div className="hidden sm:block font-bold text-2xl py-4 px-10 border-b border-gray-300">
            <input className="w-full hover:border-orange-600 animate p-3 border-2 border-gray-300 rounded-md text-sm focus:outline-orange-600" name="search" placeholder="Search" />
        </div>
        <div>
            <div className="hidden sm:flex gap-2 px-10 mt-4 mb-2">
                <p className="border border-orange-600 bg-orange-600 rounded-full text-xs text-white px-2 cursor-pointer">All</p>
                <p className="border border-orange-600 bg-orange-200 rounded-full text-xs text-black px-2 cursor-pointer">Unread</p>
                <p className="border border-orange-600 bg-orange-200 rounded-full text-xs text-black px-2 cursor-pointer">Archived</p>
            </div>
            <UserChat userName="Harsh Agrawal" userAvatar="H" messageCount={0} messageTime="01:31" isSelected={false} />
            <UserChat userName="Kapil Yadav" messageCount={2} messageTime="12:11" isSelected={true} />
            <UserChat userName="Parik S" userAvatar="P" messageCount={0} messageTime="10:01" isSelected={false} />
            <UserChat userName="Matthew Lesiuk" userAvatar="M" messageCount={0} messageTime="09:31" isSelected={false} />
        </div>
    </div>
  )
}

export default LeftSidebar