import DatePicker from "@/components/DatePicker";
import SubmitBtn from "@/components/SubmitBtn";
import Title from "@/components/Title";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

export default function Appointment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const [date, setDate] = useState(new Date());
  const [selectedServices, setSelectedServices] = useState([]);
  const serviceOption = [
    {
      value: "shirt",
      label: "Shirt",
    },
    {
      value: "pant",
      label: "Pant",
    },
    {
      value: "suit",
      label: "Suit",
    },
    {
      value: "panjabi",
      label: "Panjabi",
    },
  ];
  const handleServices = (value) => {
    setSelectedServices((prev) => {
      let newSelection = [...prev];
      if (newSelection.includes(value)) {
        newSelection = newSelection.filter((item) => item !== value);
      } else {
        newSelection.push(value);
      }
      setValue("services", newSelection);
      return newSelection;
    });
  };

  const onSubmit = (data) => {
    const selectDate = moment(date).format("YYYY-MM-DD");
    data.date = selectDate;
    console.log(data);
  };
  return (
    <div className="">
      <Title title="Book an appointment" />
      <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between lg:items-center mt-10 lg:mt-20 gap-10">
        {/* text part */}
        <div className="flex-1">
          <h4 className="text-2xl font-medium">
            Book Your Slot – Our Tailor Comes to You
          </h4>
          <p className="text-lg text-gray-700">
            Schedule a time, and our expert tailor will visit your location to
            take precise measurements for your perfect fit.
          </p>
          <div className="flex flex-col md:flex-row items-stretch gap-6 flex-wrap justify-center mt-10">
            {/* Operating Hours Card */}
            <div className="card flex-1 text-gray-300 w-full min-h-[250px] flex flex-col justify-between hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
              <div className="px-8 py-10 flex-grow">
                <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-900 transition-all">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div className="uppercase font-bold text-xl ">
                  Operating Hours
                </div>
                <div className="text-gray-300 uppercase tracking-widest ">
                  Sunday - Friday
                </div>
                <div className="text-gray-400 mt-8 ">
                  <p className="font-bold">10:00 AM - 8:00 PM</p>
                  <p>Available for service</p>
                </div>
              </div>

              <div className="h-2 w-full bg-gradient-to-l via-red-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
              <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-red-950 group-hover:via-red-500 w-[70%] m-auto rounded transition-all"></div>
            </div>

            {/* Contact Us Card */}
            <div className="card flex-1 text-gray-300 w-full min-h-[250px] flex flex-col justify-between hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
              <div className="px-8 py-10 flex-grow">
                <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-green-900 transition-all">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div className="uppercase font-bold text-xl ">Contact Us</div>
                <div className="text-gray-300 mt-2 ">
                  <p className="font-semibold">+880 1234 567 890</p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-400 transition-all"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-pink-500 hover:text-pink-400 transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-green-500 hover:text-green-400 transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="h-2 w-full bg-gradient-to-l via-red-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
              <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-red-950 group-hover:via-red-500 w-[70%] m-auto rounded transition-all"></div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="flex-1">
          <form
            className="max-w-full lg:max-w-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* name */}
            <p className="text-lg font-medium mt-6">Personal info</p>
            <div className="grid w-full items-center gap-1.5 mt-2">
              <Label>Name</Label>
              <Input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
              />
            </div>
            {/* number */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <Label>Phone Number</Label>
              <Input
                {...register("number")}
                type="number"
                placeholder="Enter your number"
              />
            </div>
            {/* Date */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex-1 flex justify-center flex-col gap-2">
                  <Label>Date</Label>
                  <DatePicker
                    date={date}
                    setDate={setDate}
                    {...register("date")}
                  />
                </div>
                <div className="flex-1 flex justify-center flex-col gap-2">
                  <Label>Time</Label>
                  <Input
                    type="time"
                    placeholder="Enter your number"
                    className="mt-1 w-full rounded-md border p-2 text-black"
                    {...register("time")}
                  />
                </div>
              </div>
            </div>
            {/* Email Address */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <Label>Email Address</Label>
              <Input
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
              />
            </div>
            {/* Address */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <Label>Address</Label>
              <Input
                type="text"
                {...register("address")}
                placeholder="Enter your address"
              />
            </div>
            {/* service */}
            <Label className="mt-4 block">Select you preferred services</Label>
            <div className="flex items-center space-x-4 mt-3">
              {serviceOption.map((item, idx) => (
                <div key={idx} className="mr-6 flex items-center">
                  <Checkbox
                    id={`terms-${idx}`}
                    checked={selectedServices.includes(item.value)}
                    onCheckedChange={() => handleServices(item.value)}
                  />
                  <label
                    htmlFor={`terms-${idx}`}
                    className="text-sm ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>

            {/* message */}
            <div className="grid w-full gap-1.5 mt-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                {...register("message")}
                placeholder="Type your message here."
                id="message"
              />
            </div>
            {/* button */}
            <SubmitBtn text="Book appointment" />
          </form>
        </div>
      </div>
    </div>
  );
}
