import React from 'react'
import Link from "next/link";

import Carousel from 'react-carousel-light';
import ErrorMessage from "@components/error-message/error";
import ProductLoader from "@components/loader/product-loader";
import { useGetStoresQuery } from "src/redux/features/storeApi";
import SingleStore from './SingleStore';

const Store = () => {

    const { data: stores, isError, isLoading } = useGetStoresQuery();

    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <div className="p-relative">
                <ProductLoader loading={isLoading} />
            </div>
        );
    }

    if (!isLoading && isError) {
        content = <ErrorMessage message="There was an error" />;
    }

    if (!isLoading && !isError && stores?.stores?.length === 0) {
        content = <ErrorMessage message="No products found!" />;
    }

    if (!isLoading && !isError && stores?.stores?.length > 0) {
        content = (
            <Carousel>
                {stores.stores.map((items) => (
                    <SingleStore
                        key={items._id}
                        item={items}
                    />
                ))}
            </Carousel>
        );
    }

    return (
        <section className="product__coupon-area porduct__offer pt-120">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-6 col-md-6">
                        <div className="section__title-wrapper-13 mb-35">
                            <h3 className="section__title-13">All Store</h3>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="product__offer-btn mb-30 text-md-end">
                            <Link href="/shop" className="tp-btn">
                                View All Store
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="product__coupon-area pb-120">
                    <div className="container">
                        <div className='row'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Store