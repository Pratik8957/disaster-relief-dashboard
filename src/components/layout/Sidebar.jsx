import { NavLink } from "react-router-dom";
import navigation from "../../data/navigation";

function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 min-h-[calc(100vh-64px)] flex-col border-r border-slate-800 bg-slate-900">

        {/* Logo */}
        <div className="border-b border-slate-800 p-6">
          <h2 className="text-2xl font-bold text-cyan-400">
            🚑 Relief
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Disaster Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Navigation */}
      <div className="lg:hidden border-b border-slate-800 bg-slate-900">

        <div className="flex gap-3 overflow-x-auto px-3 py-3 scrollbar-hide">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex min-w-fit items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`
                }
              >
                <Icon size={16} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}

        </div>

      </div>
    </>
  );
}

export default Sidebar;