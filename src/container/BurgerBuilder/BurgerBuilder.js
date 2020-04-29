import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad: 0,
            bacon:0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientsHandler = (type) => {
        let InitialCount = this.state.ingredients[type];
        InitialCount++;
        const UpdatedIngredients = {
            ...this.state.ingredients
        }   
        UpdatedIngredients[type] = InitialCount;
        this.setState({ingredients:UpdatedIngredients});
    }

    removeIngredientsHandler = (type) => {
        let InitialCount = this.state.ingredients[type];
        if(InitialCount){
            InitialCount--;
        }else alert("Can't go Negative");

        const UpdatedIngredients = {
            ...this.state.ingredients
        }
        UpdatedIngredients[type] = InitialCount;
        this.setState({ingredients:UpdatedIngredients});
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredients={this.addIngredientsHandler} removeIngredients={this.removeIngredientsHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;