export const sortByPrice = (products, sortType) => {
  try {
    if (products.length === 0) {
      console.log("Nenhum produto encontrado.");
      return [];
    }
    if (sortType === "desc") {
      products.sort((a, b) => b.price - a.price);

      return products;
    } else {
      products.sort((a, b) => a.price - b.price);

      return products;
    }
  } catch (error) {
    console.error("Erro ao ordenar produtos por preço", error);
    throw error;
  }
};
