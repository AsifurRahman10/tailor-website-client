export default function Card({ image, text }) {
  return (
    <div className="relative group  overflow-hidden">
      <img
        src={image}
        className="h-[500px] w-full transition-all duration-500 ease-in-out group-hover:scale-125 overflow-hidden"
        alt=""
      />
      <div className="h-[500px] text-3xl font-semibold absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white  transition-all duration-300 font-second">
        <span className="w-9/12 mx-auto text-center">{text}</span>
      </div>
    </div>
  );
}
