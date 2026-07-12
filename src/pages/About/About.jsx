import {
  FaReact,
  FaMapMarkedAlt,
  FaCloudSun,
  FaHandsHelping,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          ℹ️ About Project
        </h1>

        <p className="mt-2 text-slate-400">
          Disaster Relief Dashboard is a frontend project built using React
          to provide quick access to emergency information during disasters.
        </p>
      </div>

      {/* Project Overview */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold">
          📌 Project Overview
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          This application helps users access disaster alerts, emergency
          contacts, safe shelters, blood donor information, missing person
          records, weather updates and disaster maps through a clean and
          user-friendly interface.
        </p>
      </div>

      {/* Technologies */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-2xl font-semibold">
          🛠 Technologies Used
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="flex items-center gap-4">
            <FaReact className="text-4xl text-cyan-400" />
            <span>React + Vite</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkedAlt className="text-4xl text-green-400" />
            <span>React Leaflet</span>
          </div>

          <div className="flex items-center gap-4">
            <FaCloudSun className="text-4xl text-yellow-400" />
            <span>Weather Dashboard</span>
          </div>

          <div className="flex items-center gap-4">
            <FaHandsHelping className="text-4xl text-red-400" />
            <span>Emergency Management</span>
          </div>

        </div>

      </div>

      {/* Features */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="text-2xl font-semibold">
          🚀 Features
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-300">
          <li>Interactive Disaster Map</li>
          <li>Emergency Alerts</li>
          <li>Safe Shelter Finder</li>
          <li>Blood Donor Directory</li>
          <li>Missing Persons Tracking</li>
          <li>Weather Dashboard</li>
          <li>Latest News Updates</li>
        </ul>

      </div>

      {/* Developer */}
      <div className="rounded-2xl border border-cyan-500 bg-slate-900 p-6">

        <h2 className="text-2xl font-bold">
          👨‍💻 Developer
        </h2>

        <p className="mt-2 text-2xl font-semibold text-cyan-400">
          Pratik Singh
        </p>

        <p className="mt-1 text-slate-400">
          Frontend Developer | React Enthusiast
        </p>

        {/* Social Links */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <a
            href="https://github.com/Pratik8957"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-cyan-400"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/pratik-singh-4b7605326/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-cyan-400"
          >
            <FaLinkedin className="text-2xl text-blue-500" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/___pratik__singh_/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-pink-500"
          >
            <FaInstagram className="text-2xl text-pink-500" />
            <span>Instagram</span>
          </a>

          <a
            href="mailto:pratiksingh8957@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-red-400"
          >
            <FaEnvelope className="text-2xl text-red-400" />
            <span>pratiksingh8957@gmail.com</span>
          </a>

        </div>

      </div>

    </div>
  );
}

export default About;