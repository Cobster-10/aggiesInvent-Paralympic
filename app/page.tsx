import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/SideBar/SideBar";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiImpactPoint } from "react-icons/gi";
import { CgArrowAlignH } from "react-icons/cg";
import Hologram from "./components/Hologram";
import Header from "./components/Header";
import Temperature from "./components/PressureGraph";
import RealTimeChart from "./components/RealTimeChart";

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
          <Hologram modelUid="1ff540323c6d4019a83de82b5ac68e59"></Hologram>
        </div>
      </div>
    </>
  );
}
