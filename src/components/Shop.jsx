import { useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../config';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getDoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        }).then(response => response.json()).then(data => {
            setGoods(data.shop)
        })
    })

    return <main className="container content">
        Shop
    </main>
}

export {Shop}