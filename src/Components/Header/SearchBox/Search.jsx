import React, { useEffect, useState } from 'react'
import { Api_Key, Defualt_Url, Image_mini } from '../../../Tmdb';
import { NavLink } from 'react-router';

export default function Search() {

  const [query,setQuery] = useState("")
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchResults(searchTerm){
    // e.preventDefault()
    if(!searchTerm.trim()) {
      setResults([]);
      return
    }

    setLoading(true)

    try {
      const res = await fetch(`${Defualt_Url}search/multi?api_key=${Api_Key}&language=en-US&query=${encodeURIComponent(
          query
        )}&page=1&include_adult=false`)
        const data = await res.json()
        setResults(data.results || [])
    } catch (error) {
      console.error("Search Error:",error);
    }
     setLoading(false);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if(query.length > 0){
        fetchResults(query)
      }else{
        setResults([])
      }
    },600)

    return () => clearTimeout(delay)
  },[query])

   return (
    <div className="relative flex flex-col items-center mx-auto mt-5 w-full max-w-3xl text-slate-800">
      <div className="relative w-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-slate-300 shadow-slate-950 shadow-xl px-14 py-2 border-none rounded-lg outline-0 hover:outline-slate-500 focus:ring-2 focus:ring-yellow-500 w-full placeholder:text-slate-800 transition-all duration-300"
          placeholder="جستجو..."
          type="text"
        />

        <i className="right-0 absolute mt-[6px] mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="black"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </i>

        {query && (
          <div
            className="top-full left-0 z-50 absolute bg-slate-900/95 shadow-xl backdrop-blur-md mt-2 p-3 border border-slate-700 rounded-lg w-full max-h-[400px] overflow-y-auto text-slate-100 transition-all animate-fadeIn duration-600 ease-in-out scrollbar-thin scrollbar-thumb-blue-500 hover:scrollbar-thumb-cyan-400 scrollbar-track-slate-800 scrollbar-dark"
          >
            {loading ? (
              <p className="py-4 text-blue-400 text-center animate-pulse">
                در حال جستجو...
              </p>
            ) : results.length > 0 ? (
              <ul className="divide-y divide-slate-700">
                {results.map((item) => {
                  // انتخاب تصویر درست برای هر نوع
                  const imagePath =
  item.poster_path || item.profile_path
    ? `${Image_mini}${item.poster_path || item.profile_path}`
    : item.media_type === "person"
    ? "https://www.gravatar.com/avatar/?d=mp&f=y" // عکس پروفایل دیفالت
    : "https://via.placeholder.com/92x138?text=No+Image"; // برای فیلم یا سریال


                  return (
                   
                     <li
                      key={item.id}
                      className="flex items-center gap-3 hover:bg-slate-800/70 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer"
                    >
                      <img
                        src={imagePath}
                        alt={item.title || item.name}
                        className="shadow-md rounded-md w-[46px] h-[70px] object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">
                          {item.media_type === "movie" && `🎬 ${item.title}`}
                          {item.media_type === "tv" && `📺 ${item.name}`}
                          {item.media_type === "person" && `🧑‍🎤 ${item.name}`}
                        </span>
                        <span className="mt-1 text-slate-400 text-xs">
                          {item.release_date
                            ? `سال: ${item.release_date.slice(0, 4)}`
                            : item.first_air_date
                            ? `سال: ${item.first_air_date.slice(0, 4)}`
                            : item.known_for_department
                            ? `حرفه: ${item.known_for_department}`
                            : ""}
                        </span>
                      </div>
                    </li>
                   
                  );
                })}
              </ul>
            ) : (
              <p className="py-3 text-slate-400 text-center">
                نتیجه‌ای پیدا نشد 😕
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

