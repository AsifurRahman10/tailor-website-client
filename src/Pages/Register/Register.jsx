import SocialLogin from "@/components/SocialLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { emailRegister, updateUserProfile } from "@/redux/slices/authSlice";
import { uploadImage } from "@/utils/Utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const Register = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    try {
      const image = await uploadImage(imageFile);
      const regResult = await dispatch(
        emailRegister({ email: data?.email, password: data?.password })
      ).unwrap();
      if (regResult) {
        console.log(data?.name, image);
        const update = await dispatch(
          updateUserProfile({ name: data?.name, image: image })
        ).unwrap();
        if (update) {
          navigate("/");
          toast(
            {
              title: "Registration successful",
            },
            {
              position: "top-center",
            }
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12 lg:w-1/3 mx-auto">
      <Toaster />
      <SocialLogin />

      <Separator className="my-10" />

      {/* login form */}
      <div className="space-y-2">
        <h3 className="text-3xl font-medium">Register</h3>
        <p className="text-gray-500">
          Sign up for a free account at Tailor for best experience.
        </p>
        <form className="space-y-3 pt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label className="text-lg">Name</Label>
            <Input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="space-y-2 grid w-full items-center">
            <Label className="text-lg">Image</Label>
            <Input
              id="picture"
              type="file"
              {...register("image", { required: true })}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-lg">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="space-y-2 pb-2 relative">
            <Label className="text-lg">Password</Label>
            <Input
              type={showPass ? "text" : "password"}
              placeholder="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              })}
              required
            />
            <FaRegEye
              onClick={() => setShowPass(!showPass)}
              className="absolute top-10 right-4 cursor-pointer"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 pb-2">
              {
                "Password must have an uppercase, lowercase, digit, and be at least 6 characters."
              }
            </p>
          )}
          <Button>Register</Button>
        </form>
        <p className="pt-3">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-600 font-medium">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
