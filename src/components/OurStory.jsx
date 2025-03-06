import { Separator } from "./ui/separator";
import aboutImg from "../assets/other/about-us.png";

export const OurStory = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center mt-2 md:mt-10">
      {/* text */}
      <div className="flex-1">
        <h4 className="text-4xl font-medium">Our Story</h4>
        <Separator className="my-6 h-[2px] bg-black w-1/4" />
        <p className="text-gray-700">
          In December 2014 we launched the first version of our website. We were
          not an instant success. The first two years were particularly humble.
          We didn't come from fashion. We didn’t have fancy investors. We made a
          lot of mistakes. Our manufacturing was slow. Our selection was
          limited. Our website was confusing. And then there was the financial
          crisis... <br />{" "}
          <span className="pt-4 block">
            But we stuck with it. Listened to our customers. Improved our
            systems. Became experts on shirts and fabrics. Photography and user
            interface. Supply chain and logistics. Our growth has been strong
            and steady, but we’ve kept our team small. We do all of our design
            and customer service from our showroom in New York.
          </span>
        </p>
      </div>
      <div className="flex-1">
        <img className="rounded-l-xl" src={aboutImg} alt="" />
      </div>
    </div>
  );
};
