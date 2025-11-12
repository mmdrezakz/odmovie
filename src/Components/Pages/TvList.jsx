import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Api_Key, Defualt_Url } from "../../Tmdb";
import { Context } from "../../Context/UserContext";
import { NavLink } from "react-router";

export default function TvList() {
  const { Session } = useContext(Context);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchSeries(pageNumber = 1) {
    try {
      const { data } = await axios.get(
        `${Defualt_Url}tv/popular?api_key=${Api_Key}&language=fa&page=${pageNumber}`
      );
      setSeries(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("خطا در دریافت سریال‌ها:", error);
    }
  }

  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  return (
    <div className="p-6 min-h-screen rtl">
      <h2 className="mb-8 font-bold text-yellow-600 text-3xl text-center">📺 سریال‌های محبوب</h2>

      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {series.map((tv) => (
          <NavLink key={tv.id} to={`/tv/${tv.id}`}>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-xl transition hover:-translate-y-1 duration-300 transform">
              <img
                src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
                alt={tv.name}
                className="rounded-t-xl w-full object-cover aspect-[2/3]"
              />
              <div className="p-3 text-center">
                <h4 className="font-semibold text-gray-800 text-sm">{tv.name}</h4>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer  ${
            page === 1
              ? "bg-yellow-200 text-yellow-700 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500 text-white"
          }`}
        >
          ⬅ صفحه قبل
        </button>

        <span className="font-medium text-gray-700 text-lg">
          صفحه {page} از {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer  ${
            page === totalPages
              ? "bg-yellow-200 text-yellow-700 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500 text-white"
          }`}
        >
          صفحه بعد ➡
        </button>
      </div>
    </div>
  );
}