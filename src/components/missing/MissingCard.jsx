function MissingCard({ person }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500">

      <img
        src={person.image}
        alt={person.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {person.name}
          </h2>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              person.status === "Missing"
                ? "bg-red-500/10 text-red-400"
                : "bg-green-500/10 text-green-400"
            }`}
          >
            {person.status}
          </span>
        </div>

        <div className="mt-5 space-y-2 text-slate-300">
          <p>👤 Age: {person.age}</p>
          <p>📍 Last Seen: {person.city}</p>
        </div>

        <button className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-semibold text-slate-900 transition hover:bg-yellow-400">
          View Details
        </button>

      </div>
    </div>
  );
}

export default MissingCard;