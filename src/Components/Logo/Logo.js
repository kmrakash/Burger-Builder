import React from 'react';

import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.css';

const Logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="BurgerLogo" />
    </div>
);

export default Logo;