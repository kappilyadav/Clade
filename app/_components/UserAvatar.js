import Image from 'next/image'
import React from 'react'
import Avatar from "@/assets/avatar/kapil-yadav.jpg"


function UserAvatar({ height, width }) {
  return (
    <div className='flex items-center justify-center'>
        <Image
            src={Avatar}
            alt="Avatar"
            className="h-full w-full rounded-full overflow-hidden border-2 border-gray-300"
            height={height} width={width}
        />
    </div>
  )
}

export default UserAvatar