import { Link } from "react-router-dom";
import quickActions from "../../data/quickActions";

function QuickActions() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold">
        ⚡ Quick Actions
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.path}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500"
            >
              <div className="mb-4 text-4xl text-cyan-400">
                <Icon />
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;