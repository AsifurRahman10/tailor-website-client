import SocialLogin from "@/components/SocialLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-11/12 lg:w-1/3 mx-auto">
      <SocialLogin />

      <Separator className="my-4" />

      {/* login form */}
      <div className="space-y-2">
        <h3 className="text-3xl font-medium">Login</h3>
        <p className="text-gray-500">
          Login with us for a faster checkout, to track the status of your order
          and more
        </p>
        <form className="space-y-3 pt-3">
          <div className="space-y-2">
            <Label className="text-lg">Email</Label>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="space-y-2 pb-4 relative">
            <Label className="text-lg">Password</Label>
            <Input
              type={showPass ? "text" : "password"}
              placeholder="password"
            />
            <FaRegEye
              onClick={() => setShowPass(!showPass)}
              className="absolute top-10 right-4 cursor-pointer"
            />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
