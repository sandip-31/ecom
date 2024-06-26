import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Button from "../button/Button";

const ProductCard = ({ product }) => {
  const { image, title, price } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const navigateToProductDetail = () => {
    navigate(`/productinfo/${product.id}`);
  };

  return (
    <div className="p-4 w-full md:w-1/4">
      <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
        <div className="w-full h-80 md:h-96 overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={title}
            onClick={navigateToProductDetail}
          />
        </div>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            E-COM
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title.substring(0, 25)}
          </h1>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            ₹{price}
          </h1>
          <div className="flex justify-center">
            <Button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
