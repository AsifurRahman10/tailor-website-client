import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import ReactImageMagnify from "react-image-magnify";

export default function ServiceDetails() {
  const { id } = useParams();
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
  const detailsData = data.find((item) => item.id == id);
  const { image, serviceName, priceRange } = detailsData;
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <p className="text-4xl text-center py-12">Product Name : {serviceName}</p>

      {/* main style */}
      <div className="flex items-center">
        <div className="flex-1">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 1800,
              },
            }}
          />
          {/* <img src={image} alt="Slide Image" /> */}
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
