import React, { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const imageSlider = [
    {
        id:1,
        url:"../../../img/1.webp"
        ,name:"1.webp"
    },
        {
        id:2,
        url:"../../../img/2.webp"
        ,name:"2.webp"
    },
        {
        id:3,
        url:"../../../img/3.webp"
        ,name:"3.webp"
    },
        {
        id:4,
        url:"../../../img/4.webp"
        ,name:"4.webp"
    },
            {
        id:5,
        url:"../../../img/5.webp"
        ,name:"5.webp"
    },
            {
        id:6,
        url:"../../../img/6.webp"
        ,name:"6.webp"
    },{
            id:7,
        url:"../../../img/7.webp"
        ,name:"7.webp"
    },
]

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Api_Key, Defualt_Image, Defualt_Url } from './../../Tmdb';
import axios from 'axios';
import { Link } from 'react-router';

export default function Slider({movie}) {

    const [dataMovie,setDataMovie]  =useState([])
      async function getPopular(){
      
      const res = await axios.get(`${Defualt_Url}movie/now_playing?api_key=${Api_Key}`)
      setDataMovie(res.data.results)
      // console.log(res.data.results);
      
      return res
  
    }
  
    useEffect(()=> {  
      getPopular()
      
    },[])

      return (
    
     <Swiper
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  slidesPerGroupAuto={true}
  allowTouchMove={true}
  slidesPerView={1}
  spaceBetween={30}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }}
  modules={[Autoplay]}
  className="mt-4 mySwiper"
>
  {dataMovie.map((movie) => (
    <SwiperSlide key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <div className="group relative shadow-lg rounded-xl w-full aspect-[2/3] overflow-hidden">
          <img
            src={`${Defualt_Image}w300/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-500">
            <h2 className="font-semibold text-white text-sm truncate">{movie.title}</h2>
            <p className="mt-1 text-yellow-400 text-xs">⭐ {Math.ceil(movie.vote_average)} / 10</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>
       
  );

}

