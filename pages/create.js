import React from 'react'
import Input from '../components/input'

function Create() {
    return (
        <div className='flex justify-center h-screen'>

            <div className='w-[500px] shadow-md p-8 h-full'>
                <h1 className='text-4xl pb-6 font-semibold text-indigo-900'>Create Blog</h1>
                <Input label="Title" type="text" />
                <Input label="Author" type="text" />
                <Input label="Image" type="file" />

                <div>
                    <h1>Description</h1>
                    <textarea className=' w-full outline-none rounded-md border-indigo-400 border-2 '
                        name="description" id="description" cols="30" rows="10"></textarea>

                </div>


            </div >
        </div>
    )
}

export default Create