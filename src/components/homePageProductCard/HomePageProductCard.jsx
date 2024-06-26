import React from 'react';
import ProductCard from '../../commonComponents/ProductCard/ProductCard';
import useFetchProducts from '../../customHooks/useFetchProducts';
import Loader from '../../commonComponents/loader/Loader';



const HomePageProductCard = ({ category }) => {
    

    const { products, loading, error } = useFetchProducts(category);
    let headingText = 'Bestselling Products';

    if (category) {
        headingText = `${category}`;
    }

     if (loading) return <Loader />;;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-10">
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">{headingText}</h1>
            </div>
            {products.length === 0 ? (
                <div className="flex justify-center mt-5 text-lg text-gray-600">
                    No products found for {category}.
                </div>
            ) : (
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {products.map((item, index) => (
                                <ProductCard key={index} product={item} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default HomePageProductCard;
