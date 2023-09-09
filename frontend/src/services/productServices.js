import axios from "axios";

const API_BASE_URL = "https://dev-test-lbx1.onrender.com";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao obter a lista de produtos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product/${id}`);
    console.log(response.data);
  } catch (error) {
    console.erro("Erro ao obter produto", error);
    throw error;
  }
};

export const getProductByName = async (name) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/product/search?q=${encodeURIComponent(name)}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao obter produto", error);
    throw error;
  }
};

export const getAllTypes = async () => {
  try {
    const products = await getProducts();
    const types = products.map((product) => product.tipo);
    return types;
  } catch (error) {
    console.error("Erro ao obter os tipos:", error);
    throw error;
  }
};

export const getProductByType = async (products, type) => {
  try {
    const filteredProducts = products.filter(
      (product) => product.tipo === type
    );
    return filteredProducts;
  } catch (error) {
    console.error("Erro ao obter produtos: ", error);
  }
};
