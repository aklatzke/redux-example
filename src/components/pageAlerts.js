import React from 'react';

const PageAlerts = ({ message }) => {
    if( message ){
        return (
            <div className='alert alert-info'>{message}</div>
        )
    }
    else{
        return <div></div>
    }
}

export default PageAlerts;