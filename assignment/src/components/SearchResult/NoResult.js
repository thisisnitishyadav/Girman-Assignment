import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router'

const NoResult = () => {
    const router= useRouter();
  return (
    <div className='min-h-[100vh]'>
       <div className="border-b-2 shadow-2xl">
    <div className="flex justify-between items-center gap-3 p-4 mx-4 md:mx-8 lg:mx-16 xl:mx-36">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
        <img src="https://www.girmantech.com/Logo2.svg" alt="Girman Logo" className="w-36" />
      </div>
      
      {/* Searchbar */}
      <div className='flex justify-center items-center border bg-white rounded-lg p-2 w-full sm:w-80 md:w-96'>
        <SearchIcon aria-label='menu' type='button' className='cursor-pointer text-gray-400'/>
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-2 focus:outline-none" 
        />
        </div>
      </div>
    </div>
    
    {/* No result found */}
    
    <div className="flex justify-center items-center py-10 bg-gradient-to-b from-white via-[#B1CBFF]/31 to-[#B1CBFF] min-h-[90vh]">
     <img src='https://cdn-icons-png.freepik.com/256/11329/11329073.png?semt=ais_hybrid' 
     alt=''
     className='w-96'>

     </img>
    </div>
    </div>
  )
}

export default NoResult
