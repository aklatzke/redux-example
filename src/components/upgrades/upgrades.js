import React from 'react';
import { Auto } from './index';

const upgrades = ({ upgradeClick, cost, value, autoEnabled }) => {
    if( autoEnabled ){
        return (
            <div>
                <button className='btn btn-warning mt-2' onClick={upgradeClick}>Upgrade Manual Clicks (Cost: {cost})</button>
                <div>
                    <Auto />
                </div>
            </div>
        )
    }

    return (
        <button className='btn btn-warning mt-2' onClick={upgradeClick}>Upgrade Manual Clicks (Cost: {cost})</button>
    )
}

export default upgrades;