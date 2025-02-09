import reviewBg from "../assets/review/review.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import reviews from "../../public/reviewData.json";

export default function Review() {
  return (
    <div
      className="h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center bg-fixed flex justify-center items-center"
      style={{ backgroundImage: `url(${reviewBg})` }}
    >
      <Carousel className="w-11/12 lg:w-9/12 mx-auto">
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 py-4 lg:py-0  lg:p-4"
            >
              <div className="bg-white shadow-lg rounded-lg p-6 text-center relative border flex flex-col items-center h-full">
                <p className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</p>

                <p className="text-gray-600 text-sm flex-grow">
                  {review.user_review}
                </p>

                <h3 className="font-bold mt-4">{review.username}</h3>

                <img
                  src={review.user_image}
                  alt={review.username}
                  className="w-16 h-16 rounded-full mx-auto border-4 border-white shadow-lg -mb-10"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 lg:-left-10 top-1/2 transform -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 transition" />
        <CarouselNext className="absolute right-0 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 transition" />
      </Carousel>
    </div>
  );
}
