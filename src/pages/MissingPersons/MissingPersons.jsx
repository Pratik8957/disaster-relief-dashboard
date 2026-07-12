import { useState } from "react";
import MissingCard from "../../components/missing/MissingCard";
import missingPersons from "../../data/missingPersons";

function MissingPersons() {
  const [search, setSearch] = useState("");

  const filteredPersons = missingPersons.filter(
    (person) =>
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          👤 Missing Persons
        </h1>

        <p className="mt-2 text-slate-400">
          Search and track missing people during emergencies.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search by name or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-yellow-500"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPersons.map((person) => (
          <MissingCard
            key={person.id}
            person={person}
          />
        ))}
      </div>

    </div>
  );
}

export default MissingPersons;