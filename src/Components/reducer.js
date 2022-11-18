export const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Products":
      return { ...state, products: action.payload };
    case "Add_To_Cart":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "Change_Quantity":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "Add_To_Wishlist":
      return { ...state, wishlist: [...state.wishlist, { ...action.payload }] };
    case "Remove_From_Wishlist":
      return {
        ...state,
        wishlist: state.wishlist.filter((w) => w.id !== action.payload.id),
      };
    default:
      break;
  }
};
