import {
  FaHome,
  FaMapMarkedAlt,
  FaHospital,
  FaTint,
  FaUserFriends,
  FaNewspaper,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";

const navigation = [
  {
    id: 1,
    title: "Dashboard",
    icon: FaHome,
    path: "/",
  },
  {
    id: 2,
    title: "Disaster Map",
    icon: FaMapMarkedAlt,
    path: "/map",
  },
  {
    id: 3,
    title: "Safe Shelters",
    icon: FaHospital,
    path: "/shelters",
  },
  {
    id: 4,
    title: "Blood Donors",
    icon: FaTint,
    path: "/blood-donors",
  },
  {
    id: 5,
    title: "Missing Persons",
    icon: FaUserFriends,
    path: "/missing-persons",
  },
  {
    id: 6,
    title: "News",
    icon: FaNewspaper,
    path: "/news",
  },
  {
    id: 7,
    title: "Settings",
    icon: FaCog,
    path: "/settings",
  },
  {
    id: 8,
    title: "About",
    icon: FaInfoCircle,
    path: "/about",
  },
];

export default navigation;