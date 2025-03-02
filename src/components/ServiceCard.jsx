import { Link } from "react-router";

export const ServiceCard = ({ serviceItem }) => {
  const { id, image, serviceName, priceRange } = serviceItem;
  return (
    <Link to={`/serviceDetails/${id}`}>
      <div className="border border-[#e0e0e0] rounded-xl">
        <img className="rounded-t-xl" src={image} alt="" />
        <div className="p-6">
          <h3 className="text-xl font-medium">
            <span className="font-bold">Service Name</span> : {serviceName}
          </h3>
          <p className="text-gray-600">
            <span className="font-medium">Starts from</span> : {priceRange}
          </p>
        </div>
      </div>
    </Link>
  );
};
