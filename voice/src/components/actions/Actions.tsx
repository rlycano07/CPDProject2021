import { ButtonBase } from '@material-ui/core';
import React from 'react';
import Button from '../button/Button';

import './Actions.css';

export default function Actions() {
    return (
        <div className="actions">
            <Button label="LOG IN" />
            <Button primary label="SIGN UP"/>
            <div>Profile</div>

            
        </div>
    );
}