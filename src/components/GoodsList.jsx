import { useContext } from 'react';
import { ShopContext } from '../context';

import {GoodsItem} from './GoodsItem';

function GoodsList() {
    const { goods = [] } = useContext(ShopContext)

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
                    />
            })
        }
    </div> 
}

export {GoodsList};