import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// internal
import { HeartTwo, CartTwo } from "@svg/index";
import { SocialShare } from "@components/social";
import ProductDetailsPrice from "./product-details-price";
import ProductQuantity from "./product-quantity";
import ProductDetailsCategories from "./product-details-categories";
import ProductDetailsTags from "./product-details-tags";
import { add_cart_product } from "src/redux/features/cartSlice";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";
import { MessageCircle } from "lucide-react";
import ProductDetailsTabArea from "./product-details-tab-area";
const ProductDetailsArea = ({ product }) => {
  const {
    _id,
    image,
    relatedImages,
    title,
    quantity,
    originalPrice,
    discount,
    tags,
    sku,
  } = product || {};
  const [activeImg, setActiveImg] = useState(image);
  useEffect(() => {
    setActiveImg(image);
  }, [image]);

  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const isWishlistAdded = wishlist.some((item) => item._id === _id);

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };

  // handle add wishlist
  const handleAddWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  return (
    <section className="product__details-area ">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="product__details-thumb-tab mr-70">
              <div className="product__details-thumb-content w-img">
                <div>
                  <Image
                    src={activeImg}
                    alt="details img"
                    width={960}
                    height={1125}
                    style={{
                      width: "100%",
                      maxHeight: "475px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="product__details-thumb-nav tp-tab">
                <nav>
                  <div className="d-flex justify-content-sm-between flex-wrap">
                    {relatedImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(img)}
                        className={activeImg === img ? "nav-link active" : ""}
                      >
                        <Image src={img} alt="image" width={110} height={110} />
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="product__details-wrapper">
              <div className="product__details-stock">
                <span>{quantity} In Stock</span>
              </div>
              <h3 className="product__details-title">{title}</h3>

              {/* <p className="mt-20">
                Shop Harry.com for every day low prices. Free shipping on orders
                $35+ or Pickup In-store and get
              </p> */}
              <ProductDetailsPrice price={originalPrice} discount={discount} />

              {/* quantity */}
              <ProductQuantity />
              {/* quantity */}

              <div className="product__details-action d-flex flex-wrap align-items-center">
                <button
                  onClick={() => handleAddProduct(product)}
                  type="button"
                  className="product-add-cart-btn product-add-cart-btn-3"
                >
                  <CartTwo />
                  Add to Cart
                </button>
                {/* <button
                  onClick={() => handleAddWishlist(product)}
                  type="button"
                  className={`product-action-btn ${
                    isWishlistAdded ? "active" : ""
                  }`}
                >
                  <HeartTwo />
                  <span className="product-action-tooltip">
                    Add To Wishlist
                  </span>
                </button> */}
              </div>

              <div className="social-buttons">
                <a
                  href="https://m.me/Surjoshop.bd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <MessageCircle className="social-button__icon" />
                  <span className="social-button__text">Chat with us</span>
                </a>

                <a
                  href="https://wa.me/8801911941234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="social-button__icon"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="social-button__text">WhatsApp Us</span>
                </a>
              </div>
              {/* Product Details Price */}

              {/* Product Details Price */}

              <div className="description">
                <h2>Description</h2>
                <h1>{product.title}</h1>
                <p> {product?.description}</p>
                <div className="content">
                  <p>আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:</p>
                  <a href="tel:+8801911941234">+8801911941234</a>
                  <div className="hotline">
                    <span>হট লাইন:</span>{" "}
                    <a href="tel:01911941234">01911941234</a>
                  </div>
                </div>
              </div>

              <div className="product__details-sku product__details-more">
                <p>SKU:</p>
                <span>{sku}</span>
              </div>
              <br />
              {/* ProductDetailsCategories */}
              {/* <ProductDetailsCategories /> */}
              {/* ProductDetailsCategories */}

              {/* Tags */}
              <ProductDetailsTags tag={tags} />
              {/* Tags */}

              <div className="product__details-share">
                <span>Share:</span>
                <SocialShare />
                {/* <ProductDetailsTabArea></ProductDetailsTabArea> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsArea;
