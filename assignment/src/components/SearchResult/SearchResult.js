import React,{useState,useEffect}from 'react'
import { useRouter } from 'next/router'
import SearchIcon from '@mui/icons-material/Search';
import CardGrid from '../Card/CardGrid';
import {users} from '../Card/CardData';

export default function SearchResult () {
    const router= useRouter();
    // const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(users);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
          router.push(`/search-result/${(query)}`);
        }
      };

      useEffect(() => {
        const searchQuery = router.query.q || '';
        setQuery(searchQuery); 
        if (searchQuery) {
          setFilteredItems(
            users.filter((users) =>
              users.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        } else {
          setFilteredItems(users); 
        }
      }, [router.query.q]);


  return (
    <div div className='min-h-[100vh]'>

    <div className="border-b-2 shadow-2xl">
    <div className="flex justify-between items-center gap-3 p-4 mx-4 md:mx-8 lg:mx-16 xl:mx-36 ">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer " onClick={() => router.push('/')}>
        <img src="https://www.girmantech.com/Logo2.svg" alt="Girman Logo" className="w-30 md:w-32 lg:w-36" />
      </div>
      
      {/* Searchbar */}
      <form onSubmit={handleSearch}>
      <div className='flex justify-center items-center border bg-white rounded-lg p-2 w-full sm:w-80 md:w-96 '>
      <button type="submit">
        <SearchIcon aria-label='menu' type='button' className='cursor-pointer text-gray-400'/>
        </button>
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
    
    {/* Content */}
    
    <div className="bg-gradient-to-b from-white via-[#B1CBFF]/31 to-[#B1CBFF] py-20 min-h-screen">
     <CardGrid users={users}/>
    </div>
  
    </div>
  )
}


