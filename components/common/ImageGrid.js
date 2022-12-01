import Image from "next/image";

export default function ImageGrid({ image, name }) {
  return (
    <div className="flex justify-center">
      <div className="relative bg-slate-600 w-[290px] h-[210px] lg:w-[330px] lg:h-[250px] overflow-hidden ">
        <Image
          src={image}
          alt={name}
          className="hover:scale-110 hover:opacity-50 duration-500"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
