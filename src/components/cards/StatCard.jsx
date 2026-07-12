import { useNavigate } from "react-router-dom";

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  action,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action === "/shelters") {
      navigate("/shelters");
      return;
    }

    if (action === "/blood-donors") {
      navigate("/blood-donors");
      return;
    }

    if (action === "alerts") {
      const section = document.getElementById("emergency-alerts");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }

      return;
    }

    if (action === "weather") {
      const section = document.getElementById("weather-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500"
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-cyan-400">
            {subtitle}
          </p>
        </div>

        <div className="text-4xl text-cyan-400">
          <Icon />
        </div>

      </div>
    </div>
  );
}

export default StatCard;