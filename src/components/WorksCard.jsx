import { RiShirtLine } from "react-icons/ri";

export const WorksCard = ({ title, description }) => {
  return (
    <>
      <div>
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </>
  );
};
