import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import banner_1 from "../assets/Banner/b1.jpg";
// import banner_2 from "../assets/Banner/b2.jpg";
import banner_3 from "../assets/Banner/b3.jpg";
import banner_4 from "../assets/Banner/b4.jpg";
import banner_5 from "../assets/Banner/b5.jpg";

export default function Banner() {
  const banners = [
    {
      image: banner_4,
      title: "Elegant Custom Tailoring",
      description:
        "Discover the art of bespoke tailoring, where every stitch is crafted to complement your unique style. From formal suits to everyday wear, we ensure a flawless fit with luxurious fabrics and exquisite detailing. Elevate your wardrobe with sophistication and comfort.",
    },
    {
      image: banner_3,
      title: "Redefining Fashion, One Stitch at a Time",
      description:
        "Step into a world of personalized fashion, where timeless elegance meets modern trends. Whether it's a classic tuxedo or a contemporary outfit, our skilled tailors bring your vision to life with precision, craftsmanship, and a commitment to quality.",
    },
    {
      image: banner_5,
      title: "Perfect Fit, Timeless Style",
      description:
        "Style is a reflection of personality, and we believe in making every outfit uniquely yours. Our tailoring expertise blends tradition with innovation, creating pieces that exude confidence and charm. Experience the perfect balance of fit, fabric, and finesse.",
    },
  ];

  return (
    <div className="relative w-full">
      <Carousel className="overflow-hidden">
        <CarouselContent>
          {banners.map((item, idx) => (
            <CarouselItem key={idx}>
              <div className="relative w-full h-[89vh]">
                <img
                  className="w-full h-full object-cover brightness-75 transition-transform duration-500 ease-in-out hover:scale-105"
                  src={item.image}
                  alt={`Banner ${idx + 1}`}
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                  <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg tracking-wide md:tracking-[10px] lg:tracking-[16px]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-lg md:text-xl drop-shadow-lg w-11/12 lg:w-1/2 mx-auto text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 transition" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 transition" />
      </Carousel>
    </div>
  );
}
