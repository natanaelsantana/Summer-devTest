export const assignRandomPricesToProducts = (products) => {
  const minPrice = 10;
  const maxPrice = 100;
  const productsWithPrices = products.map((product) => {
    const randomPrice =
      Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;

    // Crie um novo objeto com os mesmos atributos do produto original e atualize o preço aleatório
    return {
      ...product,
      price: randomPrice,
    };
  });

  return productsWithPrices;
};
