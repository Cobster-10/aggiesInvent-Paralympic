import Header from "../components/Header";
import Hologram from "../components/Hologram";
import Sidebar from "../components/SideBar/SideBar";
import Temperature from "../components/PressureGraph";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiImpactPoint } from "react-icons/gi";
import { CgArrowAlignH } from "react-icons/cg";
import TemperatureStat from "../components/TemperatureStat/TemperatureStat";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
  const iconsAndMetrics = [
    { icon: <FaTemperatureHigh />, metric: "Temperature" },
    { icon: <GiImpactPoint />, metric: "Pressure" },
    { icon: <CgArrowAlignH />, metric: "Alignment" },
  ];

  return (
    <>
      <Header></Header>
      <div className="flex">
        <Sidebar iconsAndMetrics={iconsAndMetrics}></Sidebar>
        <div className="flex-1 flex h-screen justify-center items-center">
          <Pagination></Pagination>
        </div>
      </div>
    </>
  );
}
