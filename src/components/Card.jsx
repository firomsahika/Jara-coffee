import React from 'react'

const Card = ({title, content}) => {
  return (
    <div className='shadow-lg border-r-4 border-b-4 border-green-400 gap-3 flex flex-col justify-center p-8 md:p-3 lg:p-3 w-84 md:w-90 lg:w-90 h-50 bg-white rounded-md'>
      <h2 className='font-bold text-2xl primary'>{title}</h2>
      <p className='text-sm text-gray-500'>{content}</p>
    </div>
  )
}

export default Card
