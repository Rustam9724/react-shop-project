import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order, handleBasketShow = Function.prototype} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity; 
    }, 0)

    return <ul className="collection basket-item">
        <li className="collection-item active">Корзина</li>
        {
            order.length 
                ? order.map(item => {
                    return <BasketItem key={item.id} {...item}/>
                })
                : <li href="#!" className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>cancel</i>
      </ul>
}

export {BasketList};