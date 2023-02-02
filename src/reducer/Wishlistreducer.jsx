const initalWishlist = {
     wishlistItem : []
}

function wishlistReducer(wishState, wishAction) {

    switch (wishAction.type) {
        case "Add-to-Wishlist":
            return {
                ...wishState,
                 wishlistItem : [...wishState.wishlistItem , wishAction.payload ]
            }
        case "REMOVE-FROM-WISHLIST":
            return {
                ...wishState,
                wishlistItem : wishState.wishlistItem.filter(item => item._id !== wishAction.payload)
            }
        default:
            return wishState;
    }
}
export {wishlistReducer ,initalWishlist}