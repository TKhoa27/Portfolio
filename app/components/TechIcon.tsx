import React from "react";
import Image from 'next/image';

interface MenuItemProps {
    urlImage: string;
    text: string;
    alt: string;
}

const TechIcon: React.FC<MenuItemProps> = ({ urlImage, text, alt }) => {
    return (
        <div className="flex flex-col items-center ms-5 me-5 mt-5 transition-transform duration-300 hover:scale-125">
            <div className="relative h-16 w-16 mb-1 ">
                <Image
                    src={urlImage}
                    alt={alt}
                    fill={true}
                    sizes="100%"
                    style={{ objectFit: "contain" }}
                    className="w-auto h-full " />
            </div>
            <p className="text-center mt-1">{text}</p>
        </div>
    );
}

export default TechIcon;