import { useState } from "react";
import {
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import searchData from "../../data/searchData";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch] = useState("");

  const notifications = [
    {
      id: 1,
      title: "Flood Alert",
      location: "Lucknow",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Heavy Rain Warning",
      location: "Delhi",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "Forest Fire",
      location: "Nainital",
      time: "1 hour ago",
    },
  ];

  const handleSearch = () => {
    const value = search.trim().toLowerCase();

    if (!value) return;

    const result = searchData.find(
      (item) => item.keyword === value
    );

    if (result) {
      navigate(result.path);
      setSearch("");
    } else {
      alert("No matching page found.");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">

      {/* Top Row */}
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-3xl">🚑</div>

          <div>
            <h1 className="text-lg font-bold text-cyan-400 sm:text-xl">
              Relief Dashboard
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              Disaster Management System
            </p>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden w-[350px] items-center rounded-xl bg-slate-800 px-4 py-2 lg:flex">

          <input
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full bg-transparent text-sm text-white outline-none"
          />

          <button onClick={handleSearch}>
            <FaSearch className="cursor-pointer text-slate-400 hover:text-cyan-400" />
          </button>

        </div>

        {/* Right */}
        <div className="relative flex items-center gap-4">

          {/* Notification */}
          <div className="relative">

            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="relative"
            >
              <FaBell className="cursor-pointer text-xl transition hover:text-cyan-400" />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {notifications.length}
              </span>

            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-4 w-80 max-w-[90vw] rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">

                <div className="flex items-center justify-between border-b border-slate-700 p-4">

                  <h2 className="font-semibold text-white">
                    Notifications
                  </h2>

                  <FaTimes
                    className="cursor-pointer text-slate-400 hover:text-white"
                    onClick={() =>
                      setShowNotifications(false)
                    }
                  />

                </div>

                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-slate-800 p-4 hover:bg-slate-800 transition"
                  >
                    <h3 className="font-medium text-white">
                      🚨 {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      📍 {item.location}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.time}
                    </p>
                  </div>
                ))}

                <button className="w-full rounded-b-2xl bg-cyan-500 py-3 font-medium text-white hover:bg-cyan-600">
                  View All Notifications
                </button>

              </div>
            )}

          </div>
            {/* Dark Mode */}
          <FaMoon className="cursor-pointer text-xl hover:text-cyan-400 transition" />

          {/* Profile */}
          <div className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
            >
              <FaUserCircle className="cursor-pointer text-3xl text-cyan-400 hover:scale-110 transition" />
            </button>

            {showProfile && (
              <ProfileDropdown
                onClose={() => setShowProfile(false)}
              />
            )}

          </div>

        </div>

      </div>

      {/* Mobile Search */}
      <div className="border-t border-slate-800 px-4 py-3 lg:hidden">

        <div className="flex items-center rounded-xl bg-slate-800 px-4 py-2">

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full bg-transparent text-sm text-white outline-none"
          />

          <button onClick={handleSearch}>
            <FaSearch className="text-slate-400 hover:text-cyan-400" />
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;