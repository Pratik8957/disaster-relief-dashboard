import {
  FaMapMarkedAlt,
  FaHospital,
  FaTint,
  FaPhoneAlt,
} from "react-icons/fa";

const quickActions = [
  {
    id: 1,
    title: "Disaster Map",
    description: "View live disaster locations",
    icon: FaMapMarkedAlt,
    path: "/map",
  },
  {
    id: 2,
    title: "Safe Shelters",
    description: "Locate nearby shelters",
    icon: FaHospital,
    path: "/shelters",
  },
  {
    id: 3,
    title: "Blood Donors",
    description: "Find available donors",
    icon: FaTint,
    path: "/blood-donors",
  },
  {
    id: 4,
    title: "Emergency Contacts",
    description: "Important helpline numbers",
    icon: FaPhoneAlt,
    path: "/contacts",
  },
];

export default quickActions;