import React from 'react'
import { useRouter } from 'next/router'
import SearchIcon from '@mui/icons-material/Search';
import CardGrid from '../Card/CardGrid';

export default function SearchResult () {
    const router= useRouter();

    const users = [
      { firstName:'Nitish',lastName:'Yadav', location: 'Bengaluru', phone: '9876543210', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Prashant',lastName:'Singh', location: 'Mumbai', phone: '9123456780', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Raushan',lastName:'Kumar', location: 'Delhi', phone: '1234567890', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Abhishek',lastName:'Mishra', location: 'Kolkata', phone: '9999955555', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Nitish',lastName:'Khan', location: 'Hyderabad', phone: '9867543219', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Anjali',lastName:'Sharma', location: 'Lucknow', phone: '9129848889', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Satyam',lastName:'Maurya', location: 'Patna', phone: '9087654321', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Vineet',lastName:'Yadav', location: 'Varanasi', phone: '9129842706', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
      { firstName:'Ankit',lastName:'Raj', location: 'Pune', phone: '91324567890', imageUrl: 'https://yt3.ggpht.com/CTJ0ANiQ1iQ0icOUhEmdEa-oyudceeX9RMcfHJxBaxRip8RJsUxtJqY4jE4VpOl__pPVV_qHekA=s88-c-k-c0x00ffffff-no-rj' },
     
    ];


  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (query.trim() !== '') {
  //     router.push(`/search-result/${(query)}`);
  //   }
  // };

  // const [results, setResults] = useState([]);
  
  // useEffect(()=>{
  //   const fetchSearchResults = async () => {
  //     if (query) {
  //       const data = await getSearchResults(query);
  //       setResults(data);
  //     }
  //   };

  //   fetchSearchResults();
  // },[query])


  return (
    <div div className='min-h-[100vh]'>

    <div className="border-b-2 shadow-2xl">
    <div className="flex justify-between items-center gap-3 p-4 mx-4 md:mx-8 lg:mx-16 xl:mx-36 ">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer " onClick={() => router.push('/')}>
        <img src="https://www.girmantech.com/Logo2.svg" alt="Girman Logo" className="w-30 md:w-32 lg:w-36" />
      </div>
      
      {/* Searchbar */}
      <div className='flex justify-center items-center border bg-white rounded-lg p-2 w-full sm:w-80 md:w-96 '>
        <SearchIcon aria-label='menu' type='button' className='cursor-pointer text-gray-400'/>
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-2 focus:outline-none" 
        />
        </div>

      </div>
    </div>
    
    {/* Content */}
    
    <div className="bg-gradient-to-b from-white via-[#B1CBFF]/31 to-[#B1CBFF] py-20 min-h-screen">
     <CardGrid users={users}/>
    </div>
  
    </div>
  )
}


