import classNames from 'classnames'
import React from 'react'

const Tag = ({
    text,
    color,
    className
}) => {
  return (
    <div className={classNames(`rounded-full px-2 py-2 flex gap-2 items-center w-fit pr-4 group overflow-hidden hover:shadow-2xl hover:shadow-red-200 max-sm:px-2 max-sm:py-0`,className)}>
        <i class={`fi fi-ss-check-circle flex items-center text-2xl group-hover:hidden max-sm:text-sm`}></i>
        <i class={`fi fi-ss-check-circle hidden items-center text-2xl group-hover:flex ${color} z-10`}></i>
        <p className='text-xl text-primary flex z-10 max-sm:text-[8px]'>{text}</p>
        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-1"></div>
    </div>
  )
}

export default Tag