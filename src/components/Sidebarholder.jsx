import React from 'react'

const Sidebarholder = ({name,children}) => {

    if (name==="Payouts"){
        return <div className='rounded-md 2xl:gap-4 mx-1.5 2xl:mx-3 py-2 px-4 flex gap-4 items-center text-gray-200 bg-[#343c53] '>
        <div  className='text-xl 2xl:text-2xl'>{children}</div>
        <div className='text-xs 2xl:text-lg text-white/80'>{name}</div>
    </div>
    }
    
  return (

    <div className='mx-2  py-2 px-4 flex 2xl:gap-4 gap-3 2xl:mx-3 items-center text-gray-200 hover:bg-[#343c53] '>
        <div  className='text-xl 2xl:text-2xl'>{children}</div>
        <div className='text-xs 2xl:text-lg text-white/80'>{name}</div>
    </div>
  )
}

export default Sidebarholder
