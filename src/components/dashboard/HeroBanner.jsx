import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();

  const scrollToContacts = () => {
    const section = document.getElementById("emergency-contacts");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToAlerts = () => {
    const section = document.getElementById("emergency-alerts");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

      {/* Background Circles */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-16 right-20 h-40 w-40 rounded-full bg-white/10"></div>

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-2xl">

          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-medium sm:text-sm">
            🚨 Emergency Response System
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Stay Prepared.
            <br />
            Stay Safe.
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-100 sm:text-lg">
            Monitor disasters, locate safe shelters, check live weather,
            find blood donors and receive emergency updates from one
            centralized dashboard.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => navigate("/map")}
              className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-cyan-700 transition hover:scale-105 sm:w-auto"
            >
              View Disaster Map
            </button>

            <button
              onClick={scrollToContacts}
              className="w-full rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-cyan-700 sm:w-auto"
            >
              Emergency Contacts
            </button>

          </div>

        </div>

        {/* Right Cards */}
        <div className="grid w-full max-w-sm gap-5">

          <div
            onClick={scrollToAlerts}
            className="cursor-pointer rounded-2xl bg-white/15 p-5 backdrop-blur-sm transition hover:bg-white/25"
          >
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-3xl text-yellow-300" />

              <div>
                <h3 className="font-semibold text-white">
                  Active Alerts
                </h3>

                <p className="text-sm text-slate-100">
                  24 Emergency Alerts
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("/shelters")}
            className="cursor-pointer rounded-2xl bg-white/15 p-5 backdrop-blur-sm transition hover:bg-white/25"
          >
            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-3xl text-green-300" />

              <div>
                <h3 className="font-semibold text-white">
                  Safe Shelters
                </h3>

                <p className="text-sm text-slate-100">
                  142 Shelters Available
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={scrollToContacts}
            className="cursor-pointer rounded-2xl bg-white/15 p-5 backdrop-blur-sm transition hover:bg-white/25"
          >
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-3xl text-red-300" />

              <div>
                <h3 className="font-semibold text-white">
                  Emergency Helpline
                </h3>

                <p className="text-sm text-slate-100">
                  24×7 Support Available
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;