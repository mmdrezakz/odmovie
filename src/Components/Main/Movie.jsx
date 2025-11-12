import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Api_Key, Defualt_Image, Defualt_Url } from '../../Tmdb';
import axios from 'axios';
import { Link } from 'react-router';

export default function Movie({ category = 'popular' ,mediaType = 'movie'}) {
  const [dataMovie, setDataMovie] = useState([]);

  async function getMoviesByCategory(cat,type) {
    const res = await axios.get(`${Defualt_Url}${type}/${cat}?api_key=${Api_Key}`);
    setDataMovie(res.data.results);
  }


useEffect(() => {
  if (mediaType && category) {
    getMoviesByCategory(category, mediaType);
  }
}, [category, mediaType]);

  return (
    <>
    

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
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
        modules={[ Navigation]}
        
        className="mySwiper"
      >
        {dataMovie.map(movie =>
            <SwiperSlide  key={movie.id}>
          <MovieBox movie={movie}  mediaType={mediaType}/>
        </SwiperSlide>)}
       

      </Swiper>
       
      {/* <MovieBox />
      <MovieBox />
      <MovieBox />  */}


   
    </>
  )
}

function MovieBox({ movie, mediaType }) {
  return (
    <div className="group relative shadow-lg rounded-xl w-full aspect-[2/3] overflow-hidden">
      <Link to={`/${mediaType}/${movie.id}`} className="block w-full h-full">
        <img
          src={`${Defualt_Image}w300/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-500">
          <h2 className="font-semibold text-white text-lg truncate">{movie.title}</h2>
          <div className="flex items-center gap-2 mt-1 text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <span className="text-sm">10 / {Math.ceil(movie.vote_average)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}


