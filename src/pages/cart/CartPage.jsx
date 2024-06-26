import { FiTrash } from "react-icons/fi";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/actions/cartActions";
import { useState } from "react";
import Button from "../../commonComponents/button/Button";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.length;
  const hasProducts = cartItems && cartItemsCount > 0;
  const totalItemsPrice = useSelector((state) => state.cart.total);
  const formattedTotalItemsPrice = totalItemsPrice.toFixed(2);

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = "/";
  };

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <Layout>
      <div className="container mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          {hasProducts ? (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <section
                aria-labelledby="cart-heading"
                className="rounded-lg bg-white lg:col-span-8"
              >
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <div key={product.id} className="">
                      <li className="flex py-6 sm:py-6">
                        <div className="flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <a
                                    href={product.href}
                                    className="font-semibold text-black"
                                  >
                                    {product.title}
                                  </a>
                                </h3>
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 line-through">
                                  {product.originalPrice
                                    ? product.originalPrice
                                    : 100000}
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                  &nbsp;&nbsp;{product.price}
                                </p>
                                &nbsp;&nbsp;
                                <p className="text-sm font-medium text-green-500">
                                  {product.discount}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button
                            type="button"
                            className="h-7 w-7 border rounded"
                            onClick={() => handleDecrease(product.id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-7 w-9 rounded-md border text-center"
                            value={product.quantity}
                          />
                          <button
                            type="button"
                            className="h-7 w-7 border rounded"
                            onClick={() => handleIncrease(product.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-6 flex text-sm">
                          <button
                            type="button"
                            className="flex items-center space-x-1 px-2 py-1 pl-0"
                            onClick={() => handleRemove(product.id)}
                          >
                            <FiTrash size={16} className="text-red-500" />
                            <span className="text-xs font-medium text-red-500">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </section>
              <section
                aria-labelledby="summary-heading"
                className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
              >
                <h2
                  id="summary-heading"
                  className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                >
                  Price Details
                </h2>
                <div>
                  <dl className="space-y-1 px-2 py-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-800">
                        Price ({cartItemsCount} items)
                      </dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ₹ {formattedTotalItemsPrice}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <dt className="flex items-center text-sm text-gray-800">
                        <span>Discount</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        - ₹ 0
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="flex text-sm text-gray-800">
                        <span>Delivery Charges</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        Free
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4">
                      <dt className="text-base font-medium text-gray-900">
                        Total Amount
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ₹ {formattedTotalItemsPrice}
                      </dd>
                    </div>
                  </dl>
                  <div className="px-2 pb-4 font-medium text-green-700">
                    <div className="flex gap-4 mb-6">
                      <Button onClick={handleBuyNow} disabled={!hasProducts}>
                        Buy now
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-24">
              <h2 className="text-2xl font-semibold text-gray-700">
                Your cart is currently empty
              </h2>
              <p className="mt-4 text-gray-500">Shop Now.</p>
              <Button onClick={closeModal}>
                Browse our products and add items to your cart.
              </Button>
            </div>
          )}

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Order Placed Successfully
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your order has been placed successfully. You will be
                    redirected to the home page shortly.
                  </p>
                </div>
                <div className="mt-4">
                  <Button onClick={closeModal}>Go to Home Page</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
