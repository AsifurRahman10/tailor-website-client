import banner from "../assets/other/title.jpg";
export default function Title({ title }) {
  return (
    <div className="relative">
      <img src={banner} className="h-[300px] w-full object-cover" alt="" />
      <div className="bg-black/55 w-full h-full absolute top-0 inset-0"></div>
      <h2 className="text-3xl font-bold text-white absolute flex justify-center items-center left-[800px] top-[130px]">
        {title}
      </h2>
    </div>
  );
}
