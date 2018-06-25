export const manualClick = () => {
    return {
        type: 'MANUAL_CLICK'
    }
}

export const upgradeManualClick = () => {
    return {
        type: 'UPGRADE_MANUAL_BASIC'
    }
}

export const timerTick = ( value ) => {
    return {
        type: 'AUTO_TICK',
        value
    }
}

export const increaseClick = value => {
    return {
        type: "AUTO_INCREASE",
        value
    }
}