export default function ordersReducer(state = [], action) {
    switch (action.type) {
        case "update_orders":
            return state.concat(action.payload)
        case "remove_orders":
            return state.filter(order => order.reference !== action.payload)
        case "ship":
            return state.map(order => {
                if (order.reference === action.payload) {
                    order.status = action.status;
                }
                return order
            });
        default:
            return state
    }
}