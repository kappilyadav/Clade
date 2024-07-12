import React from 'react';
import UserAvatar from './UserAvatar';

function UserChat({ userName, userAvatar, messageCount, messageTime, isSelected }) {
  return (
    <div className={`${
      isSelected ? 'bg-selected border-l-2 border-primary' : 'bg-white'
    } hover:bg-hover hover:translate-x-2 animate sm:px-4 py-5 cursor-pointer`}>
      <div className="flex gap-3 items-start justify-start">
        <div className="flex items-center justify-center text-xl h-12 w-12 sm:h-10 sm:w-16 bg-light text-white rounded-full max-sm:mx-auto">
          {userAvatar ? userAvatar : <UserAvatar height={60} width={60} />}
        </div>

        <div className='hidden sm:flex flex-col'>
          <div className='flex items-center gap-3'>
            <h3 className="text-xs font-bold">{userName}</h3>
            <div className={`h-1.5 w-1.5 rounded-full bg-gray-300 ${isSelected && 'bg-gray-400'}`}></div>
            <h6 className={`text-xs text-gray-400 font-medium ${isSelected && 'text-gray-600'}`}>{messageTime}</h6>
          </div>

          <div className="flex items-center">
            <p className={`${
              !isSelected ? 'text-gray-500 font-light dark:text-light' : 'text-left'
            } text-xs font-semibold line-clamp-2`}>
              Hello, I want to know more about product design position at atlassian...
            </p>
            {messageCount > 0 && (
              <div className="flex items-center justify-center text-[10px] ml-auto text-white bg-primary w-6 rounded-full cursor-default">
                {messageCount}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserChat;