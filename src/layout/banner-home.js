import Image from "next/image";
import React from "react";
import banner from "@assets/homebanner.png";

const BannerHome = () => {
  return (
    <div className="image-container">
      <Image
        src={banner}
        alt="Monthly Family Pack Banner"
        layout="fill" // Use this for full width and height
        objectFit="cover" // Ensures the image covers the container
      />
    </div>
  );
};

export default BannerHome;
