import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-800 bg-slate-900 px-6 py-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

        <div>
          <h2 className="text-lg font-semibold text-cyan-400">
            🚑 Disaster Relief Dashboard
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Built with React, Tailwind CSS & React Leaflet
          </p>
        </div>

        <div className="flex items-center gap-5 text-xl">

          <a
            href="https://github.com/Pratik8957"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pratik-singh-4b7605326/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/___pratik__singh_/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-pink-500"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:pratiksingh8957@gmail.com"
            className="transition hover:text-red-400"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>

      <div className="mt-5 border-t border-slate-800 pt-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pratik Singh • All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;