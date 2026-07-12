import {
  FaWater,
  FaFire,
  FaGlobeAsia,
} from "react-icons/fa";

const alerts = [
  {
    id: 1,
    title: "Flood Warning",
    location: "Lucknow",
    level: "High Risk",
    icon: FaWater,
  },
  {
    id: 2,
    title: "Forest Fire",
    location: "Nainital",
    level: "Medium Risk",
    icon: FaFire,
  },
  {
    id: 3,
    title: "Earthquake",
    location: "Delhi NCR",
    level: "4.2 Magnitude",
    icon: FaGlobeAsia,
  },
];

export default alerts;