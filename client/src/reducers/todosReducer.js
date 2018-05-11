export default function todosReducer(state = [], action) {
    switch (action.type) {
        case "update_todos":
            return state.concat(action.payload)
        case "remove_todos":
            return state.filter(todo => todo.reference !== action.payload)
        default:
            return state
    }
}