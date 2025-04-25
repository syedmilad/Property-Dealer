import React from 'react'

const GeneralInput = ({ type, name, placeholder, value, onChange, error, label, isIcon, isNotification, notificationText, imgSrc,onClickNotification }) => {
    return (
        <div className='flex flex-col w-full mt-4 mb-4'>
            <div className='flex flex-row justify-between items-center'>
                <label className='text-base mb-2 font-medium text-[#191D23]' htmlFor={name}>{label}</label>
                {isNotification && <span onClick={onClickNotification} className='text-primary cursor-pointer text-sm font-medium'>{notificationText}</span>}
            </div>
            <input className='rounded-[8px] border-[1px] border-[#4B5768] text-[16px] leading-[22px] font-normal text-[#4B5768] px-[1rem] py-[0.7rem]' name={name} id={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p>{error}</p>}
            {isIcon && <img src={imgSrc} alt={label} />}
        </div>
    )
}

export default GeneralInput