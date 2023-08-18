import React, { useContext } from 'react';
import { CountContext } from '../CountContext';
import SingleProduct from './SingleProduct';
export default function Searchpage() {
    const { count, setCount } = useContext(CountContext);
    const {
        state: { appstate, searchquery, cart,allitems },
        dispatch,
    } = useContext(CountContext);
    console.log(allitems);
    const transformProducts = () => {
        let sortedProducts;

        if (searchquery) {
            sortedProducts = appstate.object2;
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchquery)
            );
        }

        return sortedProducts;
    };
    return (

        <div className='cart'>
            <div className='cart-wrapper'>

               
                    {transformProducts().map((prod,index) => (
                        <SingleProduct prod={prod} key={prod.id} index={index} />
                    ))}
                
            </div>
        </div>


    )
}
