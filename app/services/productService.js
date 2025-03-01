export const getAllCategoriesAndProducts = async () => {
  const allProducts = await fetch('https://fakestoreapi.com/products').then(
    response => response.json(),
  )

  const categoryMap = {}

  allProducts.forEach(product => {
    if (!categoryMap[product.category]) {
      categoryMap[product.category] = []
    }
    categoryMap[product.category].push(product)
  })

  return categoryMap
}
