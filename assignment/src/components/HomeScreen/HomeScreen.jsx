import React,{useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch} from 'react-redux';

const HomeScreen = () => {
    const router= useRouter();
    const dispatch = useDispatch();


    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
          router.push(`/search-result/${(query)}`);
        }
      };
    
      const [results, setResults] = useState([]);
      
      useEffect(()=>{
        const fetchSearchResults = async () => {
          if (query) {
            const data = await getSearchResults(query);
            setResults(data);
          }
        };
    
        fetchSearchResults();
      },[query])
    
  return (
    <>
    <div className="border-b-2 shadow-2xl">
    <div className="flex justify-between items-center p-4 sm:mx-8 lg:mx-16 xl:mx-36">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
        <img src="https://www.girmantech.com/Logo2.svg" alt="Girman Logo" className="w-36" />
      </div>
      
      {/* Navigation */}
      <nav className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8">
        <a href="/search-result" className="text-gray-600 hover:text-blue-500 hover:underline hover:font-bold hidden sm:block">SEARCH</a>
        <a href="https://www.girmantech.com/" className="text-gray-600 hover:text-blue-500 hover:underline hover:font-bold hidden sm:block">WEBSITE</a>
        <a href="https://www.linkedin.com/company/girmantech/" className="text-gray-600 hover:text-blue-500 hover:underline hover:font-bold hidden sm:block">LINKEDIN</a>
        <a href="mailto:contact@girmantech.com" className="text-gray-600 hover:text-blue-500 hover:underline hover:font-bold hidden sm:block">CONTACT</a>
      </nav>
      </div>
    </div>
    
    {/* Girman & Search Bar */}
    
    <div className="bg-gradient-to-b from-white via-[#B1CBFF]/31 to-[#B1CBFF] py-20 min-h-[100vh]">
      <div className="max-w-xl mx-auto space-y-8 px-4 my-8 sm:px-8 ">
        {/* Girman */}
        <div className="flex items-center gap-5 justify-center">
        <img src="logo-1.png" alt="logo-2" className="w-20 sm:w-24 md:w-30 lg:w-32"></img>
        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold font-sans"> Girman</p>
        </div>
        {/* search bar */}
        <form onSubmit={handleSearch}>
        <div className='flex justify-center items-center border bg-white rounded-lg p-2'>
        <SearchIcon aria-label='menu' type='button' className='cursor-pointer text-gray-400'/>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search" 
          className="w-full pl-2 focus:outline-none" 
        />
        </div>
        </form>
      </div>
    </div>
  
  </>
  )
}

export default HomeScreen
