import Image from 'next/image'
import React from 'react'

function ImageMessage({ isSent, imagesArray, userName, time }) {
    return (
      <div className="mb-5">
        <div className='flex gap-4 mb-3'>
            {imagesArray.map((image, index) => (
                <Image key={index} className="h-32 w-32 rounded-2xl overflow-hidden object-cover hover:scale-105 animate" height={100} width={100} src={image.url} />
            ))}
        </div>
        <div className="flex gap-4">
            <p className="font-bold text-sm mb-3">{userName}</p>
            <p className="text-sm mb-3 text-gray-400">{time}</p>
        </div>
      </div>
    )
  }
  

export default ImageMessage