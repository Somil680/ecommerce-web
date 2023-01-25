
const categoryFilter = (products, Categoryfilter) => {

    switch (Categoryfilter) {
        case "Friction-Book":
            return [...products.filter(item => item.categoryName === "fiction" )];
        case "Non-Friction-Book":
            return [...products.filter(item => item.categoryName === "non-fiction" )];
        case "Horror":
            return [...products.filter(item => item.categoryName === "horror" )];
          
        default:
           return products
    }
    
}
export {categoryFilter}