import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = props => {
    const ingredients = Object.keys(props.ingredients)
                        .map((igKey)=>{
                                return (<li>
                                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                                        </li>)
                        })
    return (
            <Aux>
                <h3>Your Order Summary</h3>
                <p>Some Delicious Ingredients in your Burger:</p>
                <ul>
                    {ingredients}
                </ul>
                <p>Checkout -->></p>
            </Aux>
    );
}

export default orderSummary;