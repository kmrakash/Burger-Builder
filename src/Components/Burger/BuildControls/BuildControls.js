import React from 'react';
import BuilControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
]

const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(c => {
            return <BuilControl 
                key={c.label}
                label={c.type}
                added = {()=>props.addIngredients(c.type)}
                remove = {()=> props.removeIngredients(c.type)}
                disabled = {props.disabled[c.type]}
            />
        })}

        <button className={classes.OrderButton} disabled={!props.purchable} onClick={props.purchasing}>ORDER NOW</button>
    </div>
);

export default BuildControls;