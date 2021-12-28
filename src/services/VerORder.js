const VerORder = (email) => {
    const url = 'http://127.0.0.1:8000/api/ver/order';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(email)
    })
}
export { 
    VerORder
}
