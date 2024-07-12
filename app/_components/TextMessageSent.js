import React from 'react'

function TextMessageSent({ isSent, messagesArray, userName, time }) {
  return (
    <div className='ml-auto mb-4'>
      {messagesArray.map((message, index) => (
        <div key={index} className="text-sm bg-orange-600 w-fit rounded-t-2xl rounded-l-2xl py-4 px-6 mb-3 hover:bg-orange-700 animate">
            <p className='font-medium text-white animate'>{message}</p>
        </div>
      ))}
      <div className="flex gap-4 justify-start flex-row-reverse">
          <p className="font-bold text-sm mb-3">{userName}</p>
          <p className="text-sm mb-3 text-gray-400">{time}</p>
      </div>
    </div>
  )
}

export default TextMessageSent