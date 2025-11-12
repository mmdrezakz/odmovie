import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function About() {
    const images = [
    {
      src: 'https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots6.jpg',
      alt: 'صحنه فیلم مستقل',
    },
    {
      src: 'https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots10.png',
      alt: 'سالن سینما',
    },
    {
      src: 'https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots15.jpg',
      alt: 'فرش قرمز جشنواره',
    },
    {
      src: 'https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots16.jpg',
      alt: 'پوستر فیلم‌ها',
    },
  ];

  return (
    <div className="mx-auto px-4 py-10 text-slate-100 container">
      <h1 className="mb-6 font-bold text-yellow-400 text-3xl md:text-4xl text-center">درباره‌ی OD Movies</h1>

      <section className="mb-10">
        <p className="text-lg leading-relaxed">
          OD Movies یک پلتفرم مستقل برای علاقه‌مندان به سینماست که با هدف <strong>معرفی فیلم‌های خاص، مستقل و کمتر دیده‌شده</strong> طراحی شده است.
          این سایت تلاش می‌کند تا پلی باشد میان فیلم‌سازان خلاق و مخاطبانی که به دنبال تجربه‌های سینمایی متفاوت هستند.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-semibold text-yellow-300 text-xl">🎯 اهداف اصلی سایت</h2>
        <ul className="space-y-2 pl-5 text-slate-300 list-disc">
          <li>ارائه‌ی فیلم‌های مستقل و هنری با کیفیت بالا</li>
          <li>پشتیبانی از فیلم‌سازان جوان از طریق معرفی آثارشان</li>
          <li>ایجاد جامعه‌ای از مخاطبان سینما که به داستان‌های نو علاقه دارند</li>
          <li>دسترسی رایگان یا مقرون‌به‌صرفه به فیلم‌ها و سریال‌ها برای همه</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-semibold text-yellow-300 text-xl">🛠️ خدمات ارائه‌شده</h2>
        <ul className="space-y-2 pl-5 text-slate-300 list-disc">
          <li>مرور و تماشای فیلم‌های منتخب از سراسر جهان</li>
          <li>دسته‌بندی‌های متنوع مثل: آخرین‌ها، محبوب‌ترین‌ها، در حال پخش، به‌زودی</li>
          <li>معرفی بازیگران و عوامل فیلم</li>
          <li>امکان ثبت‌نام و ساخت لیست علاقه‌مندی‌ها</li>
          <li>بخش ویژه‌ی فیلم‌های دوبله فارسی و رایگان</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-semibold text-yellow-300 text-xl">🖼️ نمونه تصاویر</h2>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <img
            src="https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots.jpg"
            alt="نمونه فیلم ۱"
            className="shadow-md rounded-lg object-cover aspect-3/2"
          />
          <img
            src="https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots-2.jpg"
            alt="نمونه فیلم ۲"
            className="shadow-md rounded-lg object-cover aspect-3/2"
          />
          <img
            src="https://seemorgh.com/images/content/2018/10/epic-movie-scenes-screenshots3.jpg"
            alt="سینما"
            className="shadow-md rounded-lg object-cover aspect-3/2"
          />
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="mb-3 font-semibold text-yellow-300 text-xl">📌 چرا OD Movies</h2>
        <p className="text-slate-300 text-lg">
          طراحی ساده، تمرکز بر کیفیت، پشتیبانی از زبان فارسی، و به‌روزرسانی مداوم باعث شده OD Movies به انتخاب اول بسیاری از علاقه‌مندان سینما تبدیل شود.
        </p>
      </section>
            <h1 className="mb-6 font-bold text-yellow-400 text-3xl md:text-4xl text-center">درباره‌ی OD Movies</h1>

      {/* توضیحات درباره سایت */}
      <p className="mb-10 text-lg leading-relaxed">
        OD Movies یک پلتفرم مستقل برای علاقه‌مندان به سینماست که با هدف <strong>معرفی فیلم‌های خاص، مستقل و کمتر دیده‌شده</strong> طراحی شده است...
      </p>

      {/* اسلایدر تصاویر */}
 <Swiper
  slidesPerView={1}
  spaceBetween={20}
  loop={true}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
  modules={[Autoplay, Pagination]}
  className="shadow-lg mb-10 rounded-lg"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="bg-black rounded-lg w-full aspect-[16/9] overflow-hidden">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
}