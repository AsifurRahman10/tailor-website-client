import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import ReactImageMagnify from "react-image-magnify";
import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaRegHeart,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import DatePicker from "@/components/DatePicker";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ServiceDetails() {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [date, setDate] = useState(new Date());
  const colors = [
    { Red: "#FF0000" },
    { Yellow: "#FFFF00" },
    { Blue: "#0000FF" },
    { White: "#FFFFFF" },
    { Black: "#000000" },
    { Gray: "#808080" },
    { Pink: "#FFC0CB" },
    { Green: "#008000" },
    { Brown: "#A52A2A" },
    { Navy: "#000080" },
    { Maroon: "#800000" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLike = () => {
    toast("✅ Added to wishlist");
  };

  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get("/serviceData.json");
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Loading</p>;
  }
  const detailsData = data.find((item) => item.id == id);
  const { image, serviceName, priceRange, description, colour } = detailsData;

  // confirm booking
  const onSubmit = (data) => {
    const BookingData = {
      customerName: user?.displayName,
      address: data?.address,
      date: date,
      time: data?.time,
    };
    console.log(BookingData);
    toast("✅ Your booking has been successful, we will contract you soon");
  };
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <p className="text-4xl text-center py-12">Product Name : {serviceName}</p>

      {/* main style */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:h-[700px]">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-full flex items-center">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: image,
                  height: 800,
                  width: 1200,
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 800,
                },
              }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between space-y-3 h-full">
          <div className="space-y-4">
            <h3 className="text-2xl">The {serviceName}</h3>
            <p className="text-4xl font-medium">$ {priceRange}</p>
            <p className="leading-[25px] text-gray-700">{description}</p>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600">Colors : </p>
            <div className="flex gap-3">
              {colour.map((item, idx) => {
                const color = colors.find(
                  (c) => Object.keys(c)[0].toLowerCase() === item.toLowerCase()
                );
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: color ? Object.values(color)[0] : "",
                    }}
                    className="h-[50px] w-[50px] rounded-full border-2"
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4 py-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  // onClick={handleBooking}
                  className="bg-black px-6 h-[55px] w-[500px] font-bold rounded-full"
                >
                  Book Order
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Confirm booking</DialogTitle>
                  <DialogDescription>
                    Please fill up the form and we will be available on your
                    desire time.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input value={user?.email} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Address</Label>
                      <Input
                        {...register("address", { required: true })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Date</Label>
                      <div className="col-span-3">
                        <DatePicker
                          className="w-full"
                          date={date}
                          setDate={setDate}
                          {...register("date", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Time</Label>
                      <Input
                        type="time"
                        {...register("time", { required: true })}
                        className="col-span-3"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    {/* <DialogClose asChild> */}
                    <Button className="w-full" type="submit">
                      Confirm Booking
                    </Button>
                    {/* </DialogClose> */}
                  </DialogFooter>
                </form>
              </DialogContent>

              {/* wishlist */}
              <Button
                onClick={handleLike}
                className="bg-[#c3c3c3] px-6 h-[55px]"
              >
                <FaRegHeart className="text-black hover:text-white" />
              </Button>
            </Dialog>
          </div>
          <div className="space-y-4 rounded-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800 my-3">
              SKU: <span className="font-medium">3010</span>
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-700">Categories:</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm cursor-pointer">
                  Accessories
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm cursor-pointer">
                  Cell Phone
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm cursor-pointer">
                  Deal Product 1
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm cursor-pointer">
                  Deal Product 2
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm cursor-pointer">
                  Electric
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 my-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                  blue
                </span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  gold
                </span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  gray
                </span>
                <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                  green
                </span>
                <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm">
                  red
                </span>
              </div>
            </div>

            <p className="text-gray-700 my-3">Follow us</p>
            <div className="text-lg flex items-center gap-2">
              <FaFacebookF />
              <RiTwitterXFill />
              <FaInstagram />
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
