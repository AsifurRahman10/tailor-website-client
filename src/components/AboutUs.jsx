import aboutHero from "../assets/about/about-hero.jpg";

export default function AboutUs() {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row justify-center items-center lg:max-h-screen gap-10">
      {/* text part */}

      <div className="flex-1 mt-10">
        <h2 className="text-4xl lg:text-6xl font-second text-red-600">
          About Our journey
        </h2>
        <p className="mt-3 lg:mt-6 text-gray-700">
          At <b>Khan Tailor</b>, we bring your fashion vision to life with
          expert craftsmanship and personalized tailoring. Whether it's bespoke
          suits, wedding dresses, casual wear, or ethnic attire, we ensure every
          piece is crafted with precision, style, and a perfect fit. Our
          offerings include custom tailoring for every occasion, alterations and
          fittings for the perfect comfort and style, bridal and formal wear
          like exquisite wedding gowns and tuxedos, and ethnic & traditional
          wear with intricate detailing.
          <p className="font-bold text-2xl text-gray-800 mb-4 mt-4">
            How We're Different:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-600 mr-3">✔</span>
              <span>
                Premium Fabrics – Handpicked materials for durability and
                comfort
              </span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-600 mr-3">✔</span>
              <span>
                Expert Craftsmanship – Skilled tailors with years of experience
              </span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-600 mr-3">✔</span>
              <span>
                Attention to Detail – Every stitch, every cut, every
                fit—carefully crafted to meet your exact needs
              </span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-600 mr-3">✔</span>
              <span>
                Customer Satisfaction – We prioritize your happiness and strive
                to exceed your expectations every time
              </span>
            </li>
          </ul>
        </p>
      </div>

      {/* image part */}
      <div className="flex-1">
        <img src={aboutHero} className="" alt="" />
      </div>
    </div>
  );
}
