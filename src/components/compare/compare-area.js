import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
// internal
import EmptyCart from "@components/common/sidebar/cart-sidebar/empty-cart";
import SingleCompare from "./single-compare";

const CompareArea = () => {
  const { compare } = useSelector((state) => state.compare);
  return (
    <section className="cart-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {compare.length > 0 && (
              <form onSubmit={e => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <div className="tp-continue-shopping">
                    <p>
                      <Link href="/shop">
                        Continue Shopping <i className="fal fa-reply"></i>
                      </Link>
                    </p>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compare.map((item, i) => (
                        <SingleCompare key={i} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tp-compare-btn mt-50">
                      <Link href="/cart" className="tp-btn tp-btn-black">
                        Go to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {compare.length === 0 && <EmptyCart />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareArea;
