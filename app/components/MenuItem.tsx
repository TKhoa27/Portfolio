import React from "react";
import Link from "next/link";

interface MenuItemProps {
  link: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <p className="flex justify-end p-4 hover:bg-gray-700 transition duration-600 ease-in-out">
        {text}
      </p>
    </Link>
  );
}

export default MenuItem;