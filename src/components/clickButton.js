import React from 'react';

const clickButton = ({ onManualClick, value, valueAdd }) => {
    return (
        <div className="row">
            <div className="col-6">
                <h1 className="text-center">{value}</h1>                
            </div>
            <div className="col-6">
                <button className="btn btn-success" onClick={onManualClick}>
                    + <span>(Add: {valueAdd})</span>
                </button>            
            </div>        
        </div>
    )
}

export default clickButton;