// import { get } from 'core-js/library/fn/dict';
import { API_URL } from '../helpers/const';

const getOrder = (email) => {

    const url = `${API_URL}ver/order`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        // body input email
        body: JSON.stringify({
            email: email
        })
        
    });

}

export {
    getOrder,
}