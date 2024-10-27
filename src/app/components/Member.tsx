import Image, { StaticImageData } from "next/image";

interface MemberProps {
  imageSrc: StaticImageData;
  name: string;
  description?: string;
}

const Member: React.FC<MemberProps> = ({ imageSrc, name, description }) => {
  return (
    <div className="flex flex-col items-start text-left w-36 h-48 md:w-48 md:h-72">
      <div className="w-36 h-36 md:w-48 md:h-48 relative mb-2 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${name}'s profile picture`}
          layout="fill"
          className="object-cover"
        />
      </div>
      <h2 className="text-md md:text-lg font-semibold">{name}</h2>
      {description && <p className="text-xs md:text-sm text-gray-600 italic">{description}</p>}
    </div>
  );
};

export default Member;
