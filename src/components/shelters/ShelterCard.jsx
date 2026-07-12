function ShelterCard({ shelter }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          🏥 {shelter.name}
        </h2>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
          Open
        </span>

      </div>

      <p className="mt-4 text-slate-400">
        📍 {shelter.city}
      </p>

      <div className="mt-6 flex justify-between">

        <div>
          <p className="text-sm text-slate-400">
            Capacity
          </p>

          <h3 className="mt-1 text-xl font-bold">
            {shelter.capacity}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Available
          </p>

          <h3 className="mt-1 text-xl font-bold text-green-400">
            {shelter.available}
          </h3>
        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600">
        View Details
      </button>

    </div>
  );
}

export default ShelterCard;