import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import CustomCard from "../ProductCard";
import ProductModal from "../ProductModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productSelected, setProductSelected] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("error => ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (product) => {
    setProductSelected(product);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setProductSelected({});
  };

  //fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container h-100 p-2">
      <div className="text-center p-3 mb-2 bg-white text-dark fs-2 fw-semibold text-uppercase">
        Products
      </div>
      <div className="row">
        {!isLoading ? (
          Array.isArray(products) ? (
            products.length > 0 ? (
              products.map((p) => (
                <div className="col-md-4 g-3" key={p.id}>
                  <CustomCard product={p} openModal={openModal} />
                </div>
              ))
            ) : (
              <p className="text-body-secondary fs-5 text-center">
                No Products Found!
              </p>
            )
          ) : (
            <p className="text-warning fs-5 text-center">
              Something went Wrong!
            </p>
          )
        ) : (
          <Loader />
        )}
      </div>
      <ProductModal
        isOpen={isOpenModal}
        closeModal={closeModal}
        product={productSelected}
      />
    </div>
  );
};

export default ProductList;
