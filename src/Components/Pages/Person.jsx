import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Api_Key, Defualt_Image, Defualt_Url } from "../../Tmdb";
import axios from "axios";
import { Context } from "../../Context/UserContext";

export default function Person() {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const { Session } = useContext(Context);

  async function getPerson() {
    try {
      const { data } = await axios.get(
        `${Defualt_Url}person/${id}?api_key=${Api_Key}&language=fa`
      );
      setPerson(data);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات فرد:", error);
    }
  }

  useEffect(() => {
    getPerson();
  }, [id]);

  return (
    <div className="p-6">
      {person ? (
        <div className="flex md:flex-row flex-col items-start gap-6">
          <div className="w-full md:w-1/3">
            <img
              className="shadow-lg rounded-2xl"
              src={
                person.profile_path
                  ? `${Defualt_Image}w780/${person.profile_path}`
                  : "/no-image.jpg"
              }
              alt={person.name}
            />
          </div>

          <div className="flex flex-col gap-4 md:w-2/3 text-left ltr">
            <div className="space-y-3 bg-slate-100 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] mt-6 p-6 rounded-xl w-full text-slate-800 text-left" dir="ltr">
              <div className="flex justify-center items-center w-full">
                <h1 className="bg-slate-600/20 shadow-md backdrop-blur-md px-6 py-2 rounded-xl w-fit font-bold text-slate-800 text-2xl text-center">
                  {person.name}
                </h1>
              </div>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                {person.biography || "بیوگرافی برای این فرد موجود نیست."}
              </p>

              <p dir="rtl">
                {person.known_for_department} <strong>:حوزه فعالیت</strong>
              </p>
              <p dir="rtl">
                {person.birthday || "نامشخص"} <strong>:تاریخ تولد</strong>
              </p>
              <p dir="rtl">
                {person.place_of_birth || "نامشخص"} <strong>:محل تولد</strong>
              </p>
              <p dir="rtl">
                {person.gender === 1 ? "زن" : person.gender === 2 ? "مرد" : "نامشخص"} <strong>:جنسیت</strong>
              </p>
              <p dir="rtl">
                ⭐ {person.popularity.toFixed(1)} <strong>:محبوبیت</strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="py-10 text-slate-500 text-xl text-center">در حال بارگذاری...</h1>
      )}
    </div>
  );
}