import React, { useEffect, useState } from "react";
import Loading from "./ProductLoading";
import { sortByPrice } from "../Utils/Filters";
import { assignRandomPricesToProducts } from "../Utils/AddPrice";
import { useType } from "../Utils/contextProvider";
import { getProductByType, getProducts } from "../services/productServices";
import FilterDropdown from "./FilterDropdown";

const ProductList = () => {
  const { selectedType } = useType();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getProducts();
        let filteredProducts = allProducts;

        if (selectedType !== null) {
          filteredProducts = await getProductByType(allProducts, selectedType);
        }

        const productWithPrice = assignRandomPricesToProducts(filteredProducts);
        setProducts(productWithPrice);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedType]);

  const handleSortByPrice = (order) => {
    const sorted = sortByPrice([...products], order); // Create a new array for sorting
    setProducts(sorted);
  };

  if (!products) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <section className="bg-white z-10 my-10">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <h1 className="ml-5 text-2xl text-center font-semibold">Produtos</h1>
        <FilterDropdown handleSortByPrice={handleSortByPrice} />

        <div>
          <ul className="justify-around flex flex-wrap ">
            {products.map((product) => (
              <li
                className=" w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col border-solid border-2 border-gray-200 m-1"
                key={product.id}
              >
                <a href="/">
                  <h3 className="text-center font-semibold">{product.name}</h3>

                  <img
                    className="hover:grow hover:shadow-lg border-solid border-2 border-gray-100"
                    src="https://as1.ftcdn.net/v2/jpg/02/25/61/42/1000_F_225614243_qdF4cO57yfihmCFsx6G24ZxJxa7OuAQb.jpg"
                    alt=""
                  />
                  <div className="pt-3 flex items-center justify-between">
                    <p className="pt-1 text-gray-900">
                      Preço: R$
                      {product.price ? product.price.toFixed(2) : "N/A"}
                    </p>
                  </div>
                  <p className="pt-1 text-gray-900">
                    Fornecedor: {product.seller.name}
                  </p>
                  <p className="pt-1 text-gray-900">
                    Contato: {product.seller.cell}
                  </p>
                </a>
                <button className=" text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded mt-5">
                  Adicionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
