import Card from "./Card";
import service1 from "../assets/services/home.jpg";
import service2 from "../assets/services/store.jpg";
import service3 from "../assets/services/zardozi.jpg";
export default function Service() {
  return (
    <div className="flex flex-col justify-center items-center w-11/12 lg:w-9/12 mx-auto py-10 lg:py-20">
      <h2 className="text-4xl lg:text-6xl font-second text-red-600">
        Our Services
      </h2>

      {/* cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card image={service1} text={"Personalize home service"} />
        <Card image={service2} text={"Store visit"} />
        {/* Wrapper div to center the last card on medium screens */}
        <div className="md:col-span-2 flex justify-center lg:col-span-1">
          <Card image={service3} text={"Custom Zardozi Work"} />
        </div>
      </div>
    </div>
  );
}
