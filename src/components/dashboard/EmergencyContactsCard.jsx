function EmergencyContactsCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold">
        ☎ Emergency Contacts
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span>🚑 Ambulance</span>
          <span className="font-bold">108</span>
        </div>

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span>🚓 Police</span>
          <span className="font-bold">112</span>
        </div>

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span>🔥 Fire Brigade</span>
          <span className="font-bold">101</span>
        </div>

        <div className="flex justify-between">
          <span>🆘 Disaster Helpline</span>
          <span className="font-bold">1070</span>
        </div>

      </div>
    </div>
  );
}

export default EmergencyContactsCard;