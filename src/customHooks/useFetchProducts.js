import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (category = "") => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (category) {
          const filteredProducts = response.data.filter(
            (product) => product.category === category
          );
          setProducts(filteredProducts);
          localStorage.setItem("products", JSON.stringify(filteredProducts));
        } else {
          setProducts(response.data);
          localStorage.setItem("products", JSON.stringify(response.data));
        }
      } catch (err) {
        let productsCatchData = localStorage.getItem("products");
        setProducts(JSON.parse(productsCatchData));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const getProductById = (productId) => {
    // eslint-disable-next-line
    const product = products.find((product) => product.id == productId);
    return product;
  };

  return { products, loading, error, getProductById };
};

export default useFetchProducts;
