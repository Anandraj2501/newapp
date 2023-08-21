import React, { useContext } from 'react';
import { CountContext } from '../CountContext';
import SingleProduct from './SingleProduct';
export default function Searchpage() {
    const {
        state: { appstate, searchquery },
        
    } = useContext(CountContext);
    console.log(appstate,"helloooooo");
    const transformProducts = () => {
        let sortedProducts;

        if (searchquery) {
            sortedProducts =  appstate;
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchquery)
            );
        }

        return sortedProducts;
    };
    return (
        <>{(searchquery) ?
            (<div className='cart'>
                <div className='cart-wrapper'>


                    {transformProducts().map((prod, index) => (
                        <SingleProduct prod={prod} key={prod.id} index={index} />
                    ))}

                </div>
            </div>):(<div>no match found</div>)
            }
        </>

    )
}
