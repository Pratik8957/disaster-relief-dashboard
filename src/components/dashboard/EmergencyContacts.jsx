function EmergencyContacts() {
  const contacts = [
    {
      id: 1,
      title: "Police",
      number: "100",
      icon: "👮",
    },
    {
      id: 2,
      title: "Ambulance",
      number: "108",
      icon: "🚑",
    },
    {
      id: 3,
      title: "Fire Brigade",
      number: "101",
      icon: "🚒",
    },
    {
      id: 4,
      title: "Disaster Helpline",
      number: "1078",
      icon: "☎️",
    },
  ];

  return (
    <section id="emergency-contacts" className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white">
            🚨 Emergency Contacts
          </h2>

          <p className="text-slate-400 mt-2">
            Important emergency helpline numbers.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {contacts.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition"
          >
            <div className="text-5xl">{item.icon}</div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-3xl font-bold text-cyan-400">
              {item.number}
            </p>

            <a
              href={`tel:${item.number}`}
              className="mt-5 inline-block rounded-xl bg-cyan-500 px-5 py-3 text-white hover:bg-cyan-600 transition"
            >
              Call Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EmergencyContacts;