import React from 'react';
import UserAvatar from './UserAvatar';

function UserChat({ userName, userAvatar, messageCount, messageTime, isSelected }) {
  return (
    <div className={`${
      isSelected ? 'bg-gray-200 border-l-2 border-orange-600' : 'bg-white dark:bg-gray-800'
    } hover:bg-gray-200 hover:translate-x-2 animate sm:px-10 py-6 cursor-pointer`}>
      <div className="flex items-center mb-2">
        <div className="flex items-center justify-center h-10 w-10 bg-orange-300 text-white rounded-full max-sm:mx-auto">
          {userAvatar ? userAvatar : <UserAvatar height={30} width={30} />}
        </div>
        <h3 className="hidden sm:block ml-3 text-sm font-bold">{userName}</h3>
        <h6 className="hidden sm:block ml-auto text-sm text-gray-600 font-medium">{messageTime}</h6>
      </div>

      <div className="hidden sm:flex items-center">
        <p className={`${
          !isSelected ? 'text-gray-500 font-light dark:text-gray-400' : 'text-left'
        } text-xs font-semibold line-clamp-1`}>
          Hello, I want to know more about product design...
        </p>
        {messageCount > 0 && (
          <div className="flex items-center justify-center text-xs ml-auto text-white bg-orange-600 h-4 w-6 rounded-full cursor-default">
            {messageCount}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChat;