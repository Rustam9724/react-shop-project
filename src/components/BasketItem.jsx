import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const {
            id, 
            name, 
            price, 
            quantity,
        } = props;

        const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return <li className="collection-item basket-item">
        {name} 
        <i className="material-icons remove-add-quantity" onClick={() => decQuantity(id)}>
            remove
        </i> 
        x{quantity} 
        <i className="material-icons remove-add-quantity" onClick={() => incQuantity(id)}>
            add
        </i> 
        = {price * quantity} руб.
        <span className="secondary-content">
            <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>backspace</i>
        </span>
    </li>
}

export {BasketItem};