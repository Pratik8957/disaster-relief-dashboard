import { useState } from "react";
import news from "../../data/news";
import NewsCard from "../../components/news/NewsCard";

function News() {
  const [search, setSearch] = useState("");

  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          📰 Latest News
        </h1>

        <p className="mt-2 text-slate-400">
          Get the latest disaster and weather-related updates.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-orange-500"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredNews.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
          />
        ))}
      </div>

    </div>
  );
}

export default News;