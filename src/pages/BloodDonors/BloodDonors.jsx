import { useState } from "react";
import donors from "../../data/donors";
import DonorCard from "../../components/donors/DonorCard";

function BloodDonors() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.city.toLowerCase().includes(search.toLowerCase());

    const matchesGroup =
      group === "All" || donor.bloodGroup === group;

    return matchesSearch && matchesGroup;
  });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          🩸 Blood Donors
        </h1>

        <p className="mt-2 text-slate-400">
          Find available blood donors during emergencies.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="text"
          placeholder="Search donor or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-red-500"
        />

        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-red-500"
        >
          <option>All</option>
          <option>A+</option>
          <option>B+</option>
          <option>AB+</option>
          <option>O+</option>
          <option>O-</option>
        </select>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredDonors.map((donor) => (
          <DonorCard
            key={donor.id}
            donor={donor}
          />
        ))}
      </div>

    </div>
  );
}

export default BloodDonors;