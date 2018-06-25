import { connect } from 'react-redux';
import { manualClick } from '../actions'
import clickButton from './clickButton';
import pageAlerts from './pageAlerts';

const mapValueStateToProps = state => {
    return {
        value : state.value,
        valueAdd : state.clickBase
    }
}

const mapValueDispatchToProps = dispatch => {
    return {
        onManualClick : () => {
            dispatch(manualClick())
        }
    }
}

export const CurrentValue = connect(
    mapValueStateToProps,
    mapValueDispatchToProps
)(clickButton);

const mapMessageStateToProps = state => {
    return {
        message: state.message
    }
}

export const PageAlerts = connect(
    mapMessageStateToProps
)(pageAlerts);