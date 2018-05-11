export default function accountsReducer(state=[], action) {
    
    switch (action.type) {
        case "update_accounts":
            return state.concat(action.payload)
        case "remove_accounts":
            return state.filter(account => account.name !== action.payload)
        default:
            return state
    }
}