import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function BlogCard({ title, author, body, img }) {


    const router = useRouter();
    return (
        <div className="p-8 shadow-lg rounded-lg md:flex md:space-x-4 h-full" >

            <div className="relative h-[300px] md:h-[400px] w-full">
                <Image className='rounded-md'
                    src={img}
                    layout="fill"
                    objectFit="cover"
                >

                </Image>
            </div>
            <div className='flex-col'>

                <div className='space-y-2 pt-4 '>
                    <div className='flex justify-between items-center'>

                        <h1
                            className='text-3xl font-semibold text-indigo-900'>{title}</h1>
                        <h3 className='text-xl text-gray-500'>{author}</h3>
                    </div>
                    <h2>{body}</h2>

                    <button onClick={() => router.push('/update')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 mx-2 rounded">
                        Update Blog
                    </button>
                </div>
                <div className='mt-20 mx-2'>
                    <h1 className=' text-xl font font-semibold '>Review this blog</h1>
                    <h3>Share your thoughts here</h3>

                    <button onClick={() => router.push('/review')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1  rounded">
                        Review
                    </button>
                </div>


            </div>
        </div>
    )
}

export default BlogCard