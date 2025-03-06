import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "@/redux/slices/authSlice";

export default function SocialLogin() {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center my-10">
      <Button
        onClick={() => dispatch(googleLogin())}
        className="w-[300px] h-[48px] rounded-[800px] bg-[#DB4437]"
      >
        <FaGoogle /> <span className="font-bold">With Google</span>
      </Button>
    </div>
  );
}
