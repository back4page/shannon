import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { serviceList } from "../data/serviceList";

function Services() {
  return (
    <div className="bg-custom-gray4">
      <div className="lg:container py-12 lg:py-[190px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {serviceList.map((service) => (
            <div key={service.id}>
              <Image
                src={service.img}
                alt={service.name}
                width={64}
                height={70}
              />
              <h1 className="mt-5 heading-md">{service.name}</h1>
              <p className="mt-5 text-custom-gray3 text-sm">{service.desc}</p>
              <Link href="/more-information" passHref>
                <a>
                  <p className="mt-5 link">
                    Learn more <FaAngleRight />
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
