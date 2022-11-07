import {GoodsItem} from './GoodsItem';

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    if (!goods.length) {
        return <h1>Not results</h1>
    }

    return <div className="goods">
        {
            goods.map(good => {
                return <GoodsItem 
                    key={good.mainId} 
                    id={good.mainId} 
                    name={good.displayName} 
                    description={good.displayDescription} 
                    image={good.displayAssets[0].full_background} 
                    price={good.price.regularPrice}
                    addToBasket={addToBasket}
                    />
            })
        }
    </div> 
}

export {GoodsList};