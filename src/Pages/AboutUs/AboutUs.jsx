import { HowWeWorks } from "@/components/HowWeWorks";
import { OurStory } from "@/components/OurStory";

export const AboutUs = () => {
  return (
    <div className="">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <OurStory />
      </div>

      <HowWeWorks />
    </div>
  );
};
