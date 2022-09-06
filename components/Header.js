import React from 'react'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();
    return (

        <div className="h-12 shadow-md px-4 flex">
            <h1 className="text-xl font-semibold flex items-center h-full  ">Blogger</h1>

            <div className='absolute right-0'>
                <button onClick={() => router.push('/create')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 mx-2 rounded">
                    Create Blog
                </button>

            </div>
        </div>
    )
}

export default Header