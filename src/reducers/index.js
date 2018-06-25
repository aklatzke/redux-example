const initialState = {
    count : 0,
    value: 0,
    accValue : 0,

    clickBase : 1,
    clickBaseModifier: 2,
    clickBaseModifierCost: 4,

    autoEnabled: false,
    autoBase : 0,
    autoBaseModifier: 1,
    autoBaseModifierCost: 200,
    autoInterval: null,
    autoFloor: 150
}

let reducer = (state = initialState, action) => {
    let newState;

    switch( action.type ){
        case "MANUAL_CLICK":
            return { ...state, ...{ 
                value: (state.value + state.clickBase),
                autoEnabled: state.value > state.autoFloor || state.autoEnabled ? true : false,
                message: ""
            } };

        case "UPGRADE_MANUAL_BASIC":
            newState = { ...state };

            if( newState.value >= state.clickBaseModifierCost ){
                newState.value = newState.value - state.clickBaseModifierCost;
                newState.clickBaseModifierCost = newState.clickBaseModifierCost + (newState.clickBaseModifierCost);
                newState.clickBase = newState.clickBase + newState.clickBaseModifier;
            }
            else{
                newState.message = "Not Enough Points!";
            }

            return newState;
            
        case "AUTO_TICK":  
            return { ...state, ...{ value: state.value + state.autoBase } };

        case "AUTO_INCREASE":
            newState = { ...state }

            if (newState.value >= newState.autoBaseModifierCost) {
                newState.value = newState.value - state.autoBaseModifierCost;
                newState.autoBaseModifierCost = newState.autoBaseModifierCost + (newState.autoBaseModifierCost);
                newState.autoBase = newState.autoBase + (newState.autoBaseModifier * (newState.autoBase || 1) );
                console.log(newState);
            }
            else {
                newState.message = "Not Enough Points!";
                return newState;
            }
            
            return newState;
        default:
            return state;
    }
}

export default reducer;