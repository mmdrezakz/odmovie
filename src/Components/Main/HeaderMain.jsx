export default function HeaderMain1({ onCategoryChange, activeCategory }) {
  const categories = [
    { label: 'آخرین ها', value: 'now_playing' },
    { label: 'درحال پخش', value: 'popular' },
    { label: 'بیشترین امتیاز', value: 'top_rated' },
    { label: 'به زودی', value: 'upcoming' },
  ];

  return (
    <div className="mx-auto mt-10 mb-5 px-4 md:px-8 container">
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <p className="pr-4 border-yellow-400 border-r-2 font-semibold text-slate-200 text-lg">
          محبوب‌ها
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {categories.map(({ label, value }, index) => {
            const isActive = value === activeCategory;
            return (
              <button
                key={index}
                onClick={() => onCategoryChange(value)}
                className={`px-2 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-yellow-400 text-slate-900 font-bold'
                    : 'text-yellow-400 hover:text-white hover:font-bold'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}