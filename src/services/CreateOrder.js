const CreateOrder = (order) => {
    const url = 'http://127.0.0.1:8000/api/order';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(res => {
            return res;
        }
        )
        .catch(err => {
            return err;
        }
        )
}
export { 
    CreateOrder
}
