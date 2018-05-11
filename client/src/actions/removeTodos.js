export default function removeTodos(payload) {
    return {
        type: 'remove_todos',
        payload
    }
}