import Layout from "../../components/layout/Layout";
import { FiShoppingCart } from "react-icons/fi";
import useFetchProducts from "../../customHooks/useFetchProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Loader from "../../commonComponents/loader/Loader";
import Button from "../../commonComponents/button/Button";

const ProductInfo = () => {
  const { loading, error, getProductById } = useFetchProducts();
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
    }
  }, [id, getProductById]);

  if (loading) {
    if (loading) return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="">
                <div className="">
                  <img
                    className="w-full lg:h-[39em] rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6">
                  <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {product.title.substring(0, 25)}
                  </h2>
                  <div className="flex items-center mb-6">
                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                      <span>₹{product.price}</span>
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description :
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa, explicabo enim ratione voluptatum at cupiditate
                    delectus nemo dolorum officia esse beatae optio ut mollitia
                    sit omnis, possimus nesciunt voluptas natus! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Provident rerum
                    ad rem reprehenderit qui, omnis nam distinctio, dignissimos
                    nisi quidem aliquam, sapiente delectus commodi! Perspiciatis
                    provident illo autem quidem ad! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Beatae reiciendis eum dolorum
                    cupiditate{" "}
                  </p>
                </div>
                <div className="flex items-center mb-6">
                  <Button
                    onClick={handleAddToCart}
                    disabled={cartItems.some((item) => item.id === product.id)}
                  >
                    <FiShoppingCart className="inline-block w-5 h-5 mr-2" />
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
