function Settings() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          ⚙️ Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your dashboard preferences.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-6">

        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-semibold">Dark Mode</h2>
            <p className="text-sm text-slate-400">
              Coming Soon
            </p>
          </div>

          <button className="rounded-lg bg-slate-700 px-4 py-2">
            Off
          </button>
        </div>

        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-semibold">Language</h2>
            <p className="text-sm text-slate-400">
              Select preferred language
            </p>
          </div>

          <select className="rounded-lg bg-slate-800 px-3 py-2">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-semibold">Notifications</h2>
            <p className="text-sm text-slate-400">
              Receive emergency alerts
            </p>
          </div>

          <button className="rounded-lg bg-green-600 px-4 py-2">
            Enabled
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">App Version</h2>
            <p className="text-sm text-slate-400">
              Current Version
            </p>
          </div>

          <span className="font-semibold text-cyan-400">
            v1.0.0
          </span>
        </div>

      </div>

    </div>
  );
}

export default Settings;