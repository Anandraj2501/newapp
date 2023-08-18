export const cartreducer = (state, action) => {
    switch (action.type) {
        case "Add_to_cart":
            console.log("dbaa");
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "Add_to_wishlist":
            return{
                ...state, wishlist:[...state.wishlist, {...action.payload}]
            };
        case "Remove_from_cart":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "Remove_from_wishlist":
            return{
                ...state,
                wishlist: state.wishlist.filter((p)=>p.id !== action.payload.id),
            }
        case "change_qty":

            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        case "search":
            return {
                ...state,  searchquery: action.payload
            
            };
        default:
            return state;
    }
}

