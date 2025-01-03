import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SingleStore = ({ item }) => {

  const router = useRouter();

  return (
    <div className="text-center">
      <div className="m-3">
        <a
          onClick={() =>
            router.push(
              `/shop?Store=${item.name
                .toLowerCase()
                .replace("&", "")
                .split(" ")
                .join("-")}`
            )
          }
          style={{ cursor: "pointer" }}
        >
          <Image
            src={item.img}
            alt="image"
            width={250}
            height={200}
          />
        </a>
      </div>
      <div className="product__category-content">
        <h3 className="product__category-title">
          <a
            onClick={() =>
              router.push(
                `/shop?Store=${item.name
                  .toLowerCase()
                  .replace("&", "")
                  .split(" ")
                  .join("-")}`
              )
            }
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default SingleStore;
