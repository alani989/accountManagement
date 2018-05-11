export default function infoReducer(state = [], action) {
    switch (action.type) {
        case "update_info":
            return state.concat(action.payload)
        default:
            return state
    }
}