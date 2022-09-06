import React from 'react'
import Input from '../components/input'

function Update() {
    return (
        <div className='flex justify-center h-screen'>

            <div className='w-[500px] shadow-md p-8 h-full'>
                <h1 className='text-4xl pb-6 font-semibold text-indigo-900'>Update Blog</h1>
                <Input label="Title" type="text" />
                <Input label="Author" type="text" />
                <Input label="Image" type="file" />

                <div>
                    <h1>Description</h1>
                    <textarea className=' w-full outline-none rounded-md border-indigo-400 border-2 '
                        name="description" id="description" cols="30" rows="10"></textarea>

                </div>
                <div className='w-full bg-indigo-300 py-2 flex justify-center rounded-md cursor-pointer transition transform hover:scale-105 duration-150 active:scale-95'>
                    <h2>
                        Submit
                    </h2>

                </div>

            </div >
        </div>
    )
}

export default Update