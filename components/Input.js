import React from 'react'

function Input({ label, type }) {
    return (
        <div className='flex-col space-y-1 w-full'>
            <h1 className='text-sm '>{label}</h1>
            <input type={type} className=' w-full outline-none rounded-md border-indigo-400 border-2 ' />
        </div>
    )
}

export default Input