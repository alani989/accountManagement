export default function shipOrders(payload, status) {
    return {
        type: 'ship',
        payload,
        status,
    }
}