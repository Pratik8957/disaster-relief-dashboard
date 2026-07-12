function DonorCard({ donor }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-white">
            👤 {donor.name}
          </h2>

          <p className="mt-2 text-slate-400">
            📍 {donor.city}
          </p>
        </div>

        <div className="rounded-full bg-red-500/10 px-4 py-2 text-lg font-bold text-red-400">
          {donor.bloodGroup}
        </div>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span
          className={`rounded-full px-3 py-1 text-sm ${
            donor.status === "Available"
              ? "bg-green-500/10 text-green-400"
              : "bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {donor.status}
        </span>

        <button className="rounded-lg bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600">
          Contact
        </button>

      </div>

    </div>
  );
}

export default DonorCard;