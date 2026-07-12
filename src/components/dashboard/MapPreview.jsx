import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaLocationArrow } from "react-icons/fa";

function MapPreview() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            🗺 Disaster Map
          </h2>

          <p className="mt-2 text-slate-400">
            Monitor active disaster locations in real time.
          </p>
        </div>

        <FaMapMarkedAlt className="text-5xl text-cyan-400" />
      </div>

      <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-cyan-500 bg-slate-950">
        <div className="text-center">
          <FaLocationArrow className="mx-auto mb-4 text-5xl text-cyan-400" />

          <h3 className="text-xl font-semibold">
            Interactive Map Coming Soon
          </h3>

          <p className="mt-2 text-slate-400">
            Live disaster markers will appear here.
          </p>
        </div>
      </div>

      <Link
        to="/map"
        className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
      >
        Open Full Map
      </Link>
    </section>
  );
}

export default MapPreview;