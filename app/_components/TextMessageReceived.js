import React from 'react'

function TextMessageReceived({ isSent, messagesArray, userName, time }) {
  return (
    <div className="mb-4">
      {messagesArray.map((message, index) => (
        <div key={index} className="text-sm bg-slate-100 w-fit rounded-t-2xl rounded-r-2xl py-4 px-6 mb-3 hover:bg-slate-200 animate">
            <p className='font-medium text-gray-600'>{message}</p>
        </div>
      ))}
      <div className="flex gap-4">
          <p className="font-bold text-sm mb-3">{userName}</p>
          <p className="text-sm mb-3 text-gray-400">{time}</p>
      </div>
    </div>
  )
}

export default TextMessageReceived