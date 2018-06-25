import React from 'react';

class Auto extends React.Component{
    componentWillMount(){
        this.interval = setInterval( () => {
            this.props.autoTick( this.props.autoBase )
        }, 1000 );
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const { autoBase, autoBaseModifier, autoBaseModifierCost, autoClick } = this.props;
        
        return (
            <button className="btn btn-warning mt-2" onClick={
                () => this.props.autoClick(this.props.autoBaseModifier)
            }>
                Upgrade Interval (Current: {autoBase}, Cost: {autoBaseModifierCost})
            </button>
        )
    }
}

export default Auto;