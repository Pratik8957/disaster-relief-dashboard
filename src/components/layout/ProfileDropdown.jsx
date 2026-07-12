import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProfileDropdown({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 top-14 z-50 w-80 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-slate-800 text-5xl">
          👨🏻
        </div>

        <h2 className="mt-4 text-xl font-bold text-white">
          Pratik Singh
        </h2>

        <p className="text-sm text-slate-100">
          Frontend Developer
        </p>

      </div>

      {/* Menu */}
      <div className="p-4">

        <button
          onClick={() => {
            navigate("/about");
            onClose();
          }}
          className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-white transition hover:bg-slate-800"
        >
          <FaUser className="text-cyan-400" />
          About Me
        </button>

        <a
          href="https://github.com/Pratik8957"
          target="_blank"
          rel="noreferrer"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-white transition hover:bg-slate-800"
        >
          <FaGithub className="text-cyan-400" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/pratik-singh-4b7605326/"
          target="_blank"
          rel="noreferrer"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-white transition hover:bg-slate-800"
        >
          <FaLinkedin className="text-cyan-400" />
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/___pratik__singh_/"
          target="_blank"
          rel="noreferrer"
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-white transition hover:bg-slate-800"
        >
          <FaInstagram className="text-cyan-400" />
          Instagram
        </a>

        <a
          href="mailto:pratiksingh8957@gmail.com"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-white transition hover:bg-slate-800"
        >
          <FaEnvelope className="text-cyan-400" />
          pratiksingh8957@gmail.com
        </a>

      </div>

    </div>
  );
}

export default ProfileDropdown;