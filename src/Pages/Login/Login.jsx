import SocialLogin from "@/components/SocialLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { emailLogin } from "@/redux/slices/authSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const status = await dispatch(
      emailLogin({ email: data?.email, password: data.password })
    ).unwrap();
    if (status) {
      navigate("/");
    }
  };
  return (
    <div className="w-11/12 lg:w-1/3 mx-auto">
      <SocialLogin />

      <Separator className="my-10" />

      {/* login form */}
      <div className="space-y-2">
        <h3 className="text-3xl font-medium">Login</h3>
        <p className="text-gray-500">
          Login with us for a faster checkout, to track the status of your order
          and more
        </p>
        <form className="space-y-3 pt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label className="text-lg">Email</Label>
            <Input {...register("email")} type="email" placeholder="Email" />
          </div>
          <div className="space-y-2 pb-4 relative">
            <Label className="text-lg">Password</Label>
            <Input
              type={showPass ? "text" : "password"}
              placeholder="password"
              {...register("password")}
            />
            <FaRegEye
              onClick={() => setShowPass(!showPass)}
              className="absolute top-10 right-4 cursor-pointer"
            />
          </div>
          <Button>Login</Button>
        </form>
        <p className="pt-3">
          Don't have an account?{" "}
          <Link to={"/register"}>
            <span className="text-blue-600 font-medium">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
