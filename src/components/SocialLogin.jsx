import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

export default function SocialLogin() {
  return (
    <div className="flex justify-center items-center my-10">
      <Button className="w-[300px] h-[48px] rounded-[800px] bg-[#DB4437]">
        <FaGoogle /> <span className="font-bold">With Google</span>
      </Button>
    </div>
  );
}
