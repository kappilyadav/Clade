import React from 'react'

function TextMessageReceived({ isSent, messagesArray, userName, time }) {
  return (
    <div className="mb-4 w-2/3">
      {messagesArray.map((message, index) => (
        <div key={index} className="text-sm bg-slate-100 w-fit rounded-t-2xl rounded-r-2xl py-2 px-4 mb-2 hover:bg-slate-200 animate">
            <p className='text-sm text-gray-600 leading-relaxed'>{message}</p>
        </div>
      ))}
      <div className="flex items-center gap-3">
          <p className="font-semibold text-xs mb-3">{userName}</p>
          <p className="text-xs mb-3 text-gray-400">{time}</p>
      </div>
    </div>
  )
}

export default TextMessageReceived