function NewsCard({ news }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-400">
          {news.category}
        </span>

        <span className="text-sm text-slate-400">
          {news.date}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-white">
        {news.title}
      </h2>

      <p className="mt-3 text-slate-400">
        Stay informed with the latest disaster-related updates and emergency announcements.
      </p>

      <button className="mt-6 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
        Read More
      </button>

    </div>
  );
}

export default NewsCard;