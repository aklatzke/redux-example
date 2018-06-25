import { connect } from 'react-redux';
import { upgradeManualClick, timerTick, increaseClick } from '../../actions'
import upgrades from './upgrades';
import auto from './auto';

const mapValueStateToProps = state => {
    return {
        cost: state.clickBaseModifierCost,
        value: state.value,
        autoEnabled: state.autoEnabled
    }
}

const mapValueDispatchToProps = dispatch => {
    return {
        upgradeClick: () => {
            dispatch(upgradeManualClick())
        }
    }
}

export const Upgrades = connect(
    mapValueStateToProps,
    mapValueDispatchToProps
)(upgrades);


const mapAutoStateToProps = state => {
    return { 
        autoBase: state.autoBase, 
        autoBaseModifier: state.autoBaseModifier, 
        autoBaseModifierCost: state.autoBaseModifierCost 
    }
}

const mapAutoDispatchToProps = dispatch => {
    return {
        autoClick: ( value ) => {
            dispatch(increaseClick( value ));
        },
        autoTick : value => {
            dispatch(timerTick(value))
        }
    }
}


export const Auto = connect(
    mapAutoStateToProps,
    mapAutoDispatchToProps
)(auto);