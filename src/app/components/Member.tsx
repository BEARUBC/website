import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaInfoCircle, FaLink } from "react-icons/fa";

interface MemberProps {
  imageSrc: StaticImageData;
  name: string;
  description?: string;
  link?: string;
  bio?: string;
}

const Member: React.FC<MemberProps> = ({ imageSrc, name, description, link, bio }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="flex flex-col items-start text-left w-52 h-80 relative">
      <div className="w-52 h-52 relative mb-2 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${name}'s profile picture`}
          layout="fill"
          className="object-cover"
        />
        
        {/* Info button */}
        {bio && (
          <button
            onClick={() => setShowBio(!showBio)}
            className="absolute bottom-1 left-1 rounded-full p-1"
            title="Show Bio"
          >
            <FaInfoCircle className="text-blue-500" size={24} />
          </button>
        )}
        
        {/* Link button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1 right-1 rounded-full p-1"
            title="Visit Link"
          >
            <FaLink className="text-blue-500" size={24} />
          </a>
        )}
      </div>
      
      {/* Name, description, bio */}
      {showBio && bio ? (
        <p className="text-md text-secondary">&quot;{bio}&quot;</p>
      ) : (
        <>
          <h2 className="text-md md:text-lg font-semibold">{name}</h2>
          {description && <p className="text-xs md:text-sm text-gray-600 italic">{description}</p>}
        </>
      )}
    </div>
  );
};

export default Member;