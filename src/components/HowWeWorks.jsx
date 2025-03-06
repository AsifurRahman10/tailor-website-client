import { RiShirtLine } from "react-icons/ri";
import shirtBg from "../assets/other/shirtBg.png";
import { Separator } from "./ui/separator";
import { FiScissors } from "react-icons/fi";
import { WorksCard } from "./WorksCard";
export const HowWeWorks = () => {
  return (
    <div
      className="my-20  w-full"
      style={{
        backgroundImage: `url(${shirtBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="text-4xl font-medium text-center pt-20">How We Works</h4>
      <Separator className="my-4 h-[2px] bg-black w-1/3 md:w-[150px] mx-auto" />

      {/* boxs */}
      <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* box one */}
        <div className="mb-0 md:mb-20">
          <RiShirtLine className="text-4xl text-blue-800" />
        </div>
        <WorksCard
          title={"Select"}
          description={`Come to your shop or website, look around our collection of cloths
            and design. Select want you want. We are also here to help you to
            select`}
        />
        {/* box two */}
        <div className="mb-10 md:mb-20">
          <FiScissors className="text-4xl text-blue-800" />
        </div>
        <WorksCard
          title={"Select"}
          description={`Come to your shop or website, look around our collection of cloths
            and design. Select want you want. We are also here to help you to
            select`}
        />
      </div>
    </div>
  );
};
