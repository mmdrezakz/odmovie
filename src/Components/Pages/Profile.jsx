import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/UserContext";
import { useNavigate } from "react-router";
import { Defualt_Image, Defualt_Url, Api_Key } from "../../Tmdb";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Profile() {
  const { user, Session } = useContext(Context);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (Session === undefined) return;
    if (!Session) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [Session, navigate]);

  useEffect(() => {
    async function fetchFavorites() {
      if (!user || !Session) return;
      try {
        const { data } = await axios.get(
          `${Defualt_Url}account/${user.id}/favorite/movies?api_key=${Api_Key}&session_id=${Session}&language=fa`
        );
        setFavorites(data.results);
      } catch (error) {
        console.error("خطا در دریافت علاقه‌مندی‌ها:", error);
      }
    }

    fetchFavorites();
  }, [user, Session]);

  if (loading || !user) {
    return <div className="py-10 text-slate-500 text-center">در حال بارگذاری...</div>;
  }

  return (
<div className="mx-auto p-6 max-w-7xl">
  <h1 className="mb-6 font-bold text-yellow-400 text-3xl text-center">پروفایل کاربر</h1>

  <div className="items-start gap-8 grid grid-cols-1 md:grid-cols-3">
    {/* تصویر پروفایل */}
    <div className="flex justify-center md:justify-start">
      {user.avatar?.tmdb?.avatar_path ? (
<img
  className="shadow-[0_0_30px_rgba(255,255,0,0.6)] hover:shadow-[0_0_50px_rgba(255, border-4 border-yellow-500 rounded-2xl w-100 object-contain hover:scale-105 transition-transform duration-300 255, 0, 0.308)]"
  src={`https://image.tmdb.org/t/p/w500/${user.avatar.tmdb.avatar_path}`}
  alt="Avatar"
/>

      ) : (
        <p className="text-slate-400 text-center">تصویری برای پروفایل موجود نیست</p>
      )}
    </div>

    {/* اطلاعات کاربر */}
    <div className="space-y-2 md:col-span-2 bg-slate-100 shadow-md p-6 rounded-xl text-slate-800">
      <p>👤 نام کاربری: {user.username}</p>
      <p>📝 نام کامل: {user.name || "نام تنظیم نشده"}</p>
      <p>🆔 شناسه کاربر: {user.id}</p>
      <p>🌐 زبان ترجیحی: {user.iso_639_1}</p>
      <p>📍 کشور: {user.iso_3166_1}</p>
      <p>🔞 محتوای بزرگسال: {user.include_adult ? "فعال" : "غیرفعال"}</p>
    </div>
  </div>

  {/* علاقه‌مندی‌ها */}
  <h2 className="mt-16 mb-6 font-bold text-yellow-400 text-2xl text-center">🎬 علاقه‌مندی‌های شما</h2>

  {favorites.length > 0 ? (
    <Swiper
      slidesPerView={2}
      breakpoints={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      spaceBetween={20}
      loop={false}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="shadow-lg mb-10 rounded-lg"
    >
      {favorites.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="bg-slate-800 rounded-lg aspect-[2/3] overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="p-2 text-white text-center">
              <h4 className="font-semibold text-sm">{movie.title}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <p className="text-slate-400 text-center">هنوز هیچ فیلمی به علاقه‌مندی‌ها اضافه نکرده‌اید.</p>
  )}
</div>
  );
}