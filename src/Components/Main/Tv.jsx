import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Api_Key, Defualt_Image, Defualt_Url } from '../../Tmdb';
import axios from 'axios';
import { Context } from '../../Context/UserContext';
import toast from 'react-hot-toast';

export default function Tv() {
  const [tv, setTv] = useState(null);
  const { id } = useParams();
  const { user, Session } = useContext(Context);

  async function favoritHandler() {
    try {
      const res = await axios.post(
        `${Defualt_Url}account/${user.id}/favorite?api_key=${Api_Key}&session_id=${Session}`,
        {
          media_type: 'tv',
          media_id: tv.id,
          favorite: true,
        }
      );
      toast.success('به لیست تماشا اضافه شد.', {
        style: {
          borderRadius: '10px',
          background: '#272525',
          color: '#00ff00',
        },
      });
    } catch (err) {
      toast.error('خطا در افزودن به لیست.');
    }
  }

  async function getTv() {
    const { data } = await axios.get(`${Defualt_Url}tv/${id}?api_key=${Api_Key}`);
    setTv(data);
  }

  useEffect(() => {
    getTv();
  }, [id]);

  return (
    <div className="p-6">
      {tv ? (
        <div className="flex md:flex-row flex-col items-start gap-6">
          <div className="w-full md:w-1/3">
            <img
              className="shadow-lg rounded-2xl"
              src={`${Defualt_Image}w780/${tv.poster_path}`}
              alt={tv.name}
            />
          </div>

          <div className="flex flex-col gap-4 md:w-2/3 text-left ltr">
            <div className="space-y-3 bg-slate-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] mt-6 p-6 rounded-xl w-full text-slate-800 text-left" dir="ltr">
              <div className="flex justify-center items-center w-full">
                <h1 className="bg-slate-600/20 shadow-md backdrop-blur-md px-6 py-2 rounded-xl w-fit font-bold text-slate-800 text-2xl text-center">
                  {tv.name}
                </h1>
              </div>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                {tv.overview || 'توضیحاتی برای این سریال موجود نیست.'}
              </p>

              {tv.tagline && <p className="text-yellow-500 italic">"{tv.tagline}"</p>}
              <p dir="rtl">{tv.first_air_date} <strong>:تاریخ پخش</strong></p>
              <p dir="rtl">{tv.number_of_seasons} فصل، {tv.number_of_episodes} قسمت <strong>:تعداد</strong></p>
              <p dir="rtl">{tv.original_language.toUpperCase()} <strong>:زبان اصلی</strong></p>
              <p dir="rtl">{tv.genres.map(g => g.name).join('، ')} <strong>:ژانرها</strong></p>
              <p className="flex flex-col"><strong>شبکه پخش:</strong>{tv.networks?.map(n => n.name).join('، ')}</p>
              <p dir="rtl">{tv.status} <strong>وضعیت</strong></p>
              <p dir="rtl">⭐ {tv.vote_average} / 10 <strong>امتیاز کاربران</strong></p>
            </div>

            <button
              onClick={favoritHandler}
              className="bg-gradient-to-r from-yellow-400 hover:from-yellow-500 to-yellow-500 hover:to-yellow-600 shadow-md hover:shadow-lg px-6 py-2 rounded-xl w-fit font-semibold text-white transition duration-300 ease-in-out cursor-pointer"
            >
              اضافه کردن به لیست تماشا
            </button>
          </div>
        </div>
      ) : (
        <h1 className="py-10 text-slate-500 text-xl text-center">در حال بارگذاری...</h1>
      )}
    </div>
  );
}