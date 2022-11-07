function BasketItem(props) {
    const {id, name, price, quantity} = props;

    return <li className="collection-item">
        {name} x {quantity} = {price * quantity} руб.
        <span className="secondary-content">
            <i className="material-icons basket-delete">backspace</i>
        </span>
    </li>
}

export {BasketItem};