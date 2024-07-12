import React from 'react'

function TextMessageSent({ isSent, messagesArray, userName, time }) {
  return (
    <div className='ml-auto mb-4 w-3/5'>
      {messagesArray.map((message, index) => (
        <div key={index} className="ml-auto text-sm bg-primary w-fit rounded-t-2xl rounded-l-2xl py-2 px-4 mb-2 hover:bg-orange-700 animate">
            <p className='text-white'>{message}</p>
        </div>
      ))}
      <div className="flex gap-3 justify-start flex-row-reverse">
          <p className="font-semibold text-xs mb-3">{userName}</p>
          <p className="text-xs mb-3 text-gray-400">{time}</p>
      </div>
    </div>
  )
}

export default TextMessageSent