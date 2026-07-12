import {
  FaBell,
  FaHospital,
  FaTint,
  FaCloudSun,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "Active Alerts",
    value: 24,
    subtitle: "+12% Today",
    icon: FaBell,
    action: "alerts",
  },
  {
    id: 2,
    title: "Safe Shelters",
    value: 142,
    subtitle: "Open",
    icon: FaHospital,
    action: "/shelters",
  },
  {
    id: 3,
    title: "Blood Donors",
    value: 358,
    subtitle: "Available",
    icon: FaTint,
    action: "/blood-donors",
  },
  {
    id: 4,
    title: "Weather",
    value: "29°C",
    subtitle: "Clear Sky",
    icon: FaCloudSun,
    action: "weather",
  },
];

export default stats;