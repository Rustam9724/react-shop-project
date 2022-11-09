import { useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from './Preloader';
import {GoodsList} from '../components/GoodsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList';
import {Alert} from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(elem => elem.id !== itemId);
        setOrder(newOrder);
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (itemIndex === index) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }

        setAlertName(item.name)
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(orderItem => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                }
            } else {
                return orderItem;
            }
        })

        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map(orderItem => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity > 1 ? orderItem.quantity - 1 : 1,
                }
            } else {
                return orderItem;
            }
        })

        setOrder(newOrder);
    }

    useEffect(function getDoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        }).then(response => response.json()).then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false)
        }, [])
    })

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {
            loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>
        }
        {
            isBasketShow && <BasketList 
                order={order} 
                handleBasketShow={handleBasketShow} 
                removeFromBasket={removeFromBasket} 
                incQuantity={incQuantity} 
                decQuantity={decQuantity}/>
        }
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert}/>
        }
    </main>
}

export {Shop}