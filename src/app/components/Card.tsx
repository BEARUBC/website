import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imagePath: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, imagePath }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      {/* Image container with fixed height and object-cover to maintain aspect ratio */}
      <div className="w-full h-48 flex-shrink-0">
        <Image
          className="w-full h-full object-cover"
          src={imagePath}
          alt={title}
        />
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-medium tracking-tight mb-2">{title}</h2>
        <p className="font-thin">{description}</p>
      </div>
    </div>
  );
};

export default Card;
