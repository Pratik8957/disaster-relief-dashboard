import { useState } from "react";
import ShelterCard from "../../components/shelters/ShelterCard";
import shelters from "../../data/shelters";

function Shelters() {
  const [search, setSearch] = useState("");

  const filteredShelters = shelters.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          🏥 Safe Shelters
        </h1>

        <p className="mt-2 text-slate-400">
          Find nearby relief shelters during emergencies.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search by city or shelter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-green-500"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredShelters.map((item) => (
          <ShelterCard
            key={item.id}
            shelter={item}
          />
        ))}
      </div>

    </div>
  );
}

export default Shelters;