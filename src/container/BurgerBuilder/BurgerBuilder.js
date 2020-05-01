import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.6,
    bacon:0.9,
    cheese: 1.9,
    meat: 2
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad: 0,
            bacon:0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 6,
        purchable: false,
        purchasing: false
    }

    addIngredientsHandler = (type) => {
        let InitialCount = this.state.ingredients[type];
        InitialCount++;
        const UpdatedIngredients = {
            ...this.state.ingredients
        }  
        let initialPrice = this.state.totalPrice;
        const AdditionPrice = INGREDIENTS_PRICE[type];
        initialPrice += AdditionPrice; 
        UpdatedIngredients[type] = InitialCount;
        this.setState({ingredients:UpdatedIngredients, totalPrice:initialPrice});
        this.updatePurchaseState(UpdatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        let InitialCount = this.state.ingredients[type];
        if(InitialCount){
            InitialCount--;
        }

        const UpdatedIngredients = {
            ...this.state.ingredients
        }
        let initialPrice = this.state.totalPrice;
        const RemovedPrice = INGREDIENTS_PRICE[type];
        initialPrice -= RemovedPrice; 
        UpdatedIngredients[type] = InitialCount;
        this.setState({ingredients:UpdatedIngredients, totalPrice:initialPrice});
        this.updatePurchaseState(UpdatedIngredients);
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map((igKey)=>{
                return ingredients[igKey];
            })
            .reduce((sum, el)=>{
                return sum + el;
            }, 0);
            this.setState({purchable: sum > 0});
    }

    updatePurchasingState = () => {
        this.setState({purchasing: true});
    }

    purchaseCancleHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }

        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                        <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                        addIngredients={this.addIngredientsHandler} 
                        removeIngredients={this.removeIngredientsHandler}
                        disabled = {disableInfo}
                        price = {this.state.totalPrice}
                        purchable = {this.state.purchable}
                        purchasing= {this.updatePurchasingState}
                        />
            </Aux>
        );
    }
}

export default BurgerBuilder;