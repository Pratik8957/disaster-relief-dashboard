import alerts from "../../data/alerts";

function EmergencyAlerts() {
  return (
    <section id="emergency-alerts" className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            🚨 Live Emergency Alerts
          </h2>

          <p className="mt-1 text-slate-400">
            Recent disaster alerts from different regions.
          </p>
        </div>

        <button className="rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-white">
          View All
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {alerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl text-cyan-400">
                  <Icon />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {alert.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    📍 {alert.location}
                  </p>

                  <span className="mt-3 inline-block rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                    {alert.level}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EmergencyAlerts;