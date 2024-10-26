import React from 'react'
import Image from 'next/image'

export default function loading() {
  return (
    <div className='flex justify-center item-center py-11 '>
        <Image width={200} height={200} alt='...' src={"/l.svg"} />
    </div>
  )
}
