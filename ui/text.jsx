import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/hero8.jpg";

const features = [
  {
    name: "Short heading here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
  {
    name: "Database backups",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
];

const Feature1 = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
        <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="order-last max-w-full lg:order-first">
            <h1 className="max-w-3xl text-center text-5xl font-semibold text-black md:text-left md:text-6xl">
              The only source of knowledge is experience
            </h1>
            <p className="mt-6 max-w-3xl text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Vulputate eu scelerisque felis imperdiet proin
              fermentum. Aenean et tortor at risus.
            </p>

            <ul className="ml-5 mt-8 max-w-full space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="list-disc text-base text-gray-700">
                  <span className="font-semibold text-black">
                    {feature.name}:{" "}
                  </span>
                  {feature.description}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-x-6">
              <a
                href="#"
                type="submit"
                className="max-w-md rounded-full bg-black px-4 py-2 text-base text-white shadow-sm"
              >
                Get started
              </a>
              <a
                href="#"
                type="submit"
                className="max-w-md py-2 text-base text-black"
              >
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative order-first mx-auto lg:order-last lg:max-w-[40%]">
            <Image
              src={Hero1}
              alt="Product screenshot"
              quality={100}
              loading="eager"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
