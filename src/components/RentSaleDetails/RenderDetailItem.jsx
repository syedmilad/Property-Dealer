import React from 'react'

const RenderDetailItem = ({item}) => {
    const {label,value} = item
  return (
        <div className="flex justify-start items-center py-2 border-b border-[#EFF5F8]">
            <span className="flex flex-1 text-sm font-medium text-[#272729]">{label}</span>
            <span className="flex flex-1 text-sm font-medium text-[#272729]">{value}</span>
        </div>
  )
}

export default RenderDetailItem