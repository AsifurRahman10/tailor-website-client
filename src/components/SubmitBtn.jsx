export default function SubmitBtn({ text }) {
  return (
    <button
      type="submit"
      className="px-10 mt-4 py-3.5 overflow-hidden group bg-gradient-to-r from-red-600 to-red-800 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 text-white transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
      <span className="relative text-lg font-semibold">{text}</span>
    </button>
  );
}
