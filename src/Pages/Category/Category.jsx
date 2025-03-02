import { ServiceCard } from "@/components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
export default function Category() {
  const [selectedValue, setSelectedValue] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get("/serviceData.json");
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <h3 className="text-center text-3xl font-semibold">Our category</h3>
      {/* category */}
      <div className="flex mt-3 mr-8 space-x-3 select-none">
        {["Mens", "Kids"].map((option) => (
          <label
            key={option}
            className="flex items-center justify-center flex-grow cursor-pointer radio"
          >
            <input
              className="hidden peer"
              value={option}
              name="radio"
              type="radio"
              checked={selectedValue === option}
              onChange={() => setSelectedValue(option)}
            />
            <span className="relative text- text-black text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-red-500 peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-red-400 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-red-500 before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0">
              {option}
            </span>
          </label>
        ))}
      </div>

      {/* display all data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((serviceItem) => (
          <ServiceCard key={serviceItem.id} serviceItem={serviceItem} />
        ))}
      </div>
    </div>
  );
}
