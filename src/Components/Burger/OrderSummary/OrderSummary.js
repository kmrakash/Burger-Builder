import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
                <strong><p>Total Price: ${props.price}</p></strong>
                <p>Checkout ?</p>
                <Button 
                        btnType="Success"
                        clicked={props.continue}
                        >Continue
                </Button>
                <Button 
                        btnType="Danger"
                        clicked={props.modalClosed}
                        >Cancle
                </Button>
            </Aux>
    );
}

export default orderSummary;