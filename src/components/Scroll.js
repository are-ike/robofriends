import React from 'react';

const Scroll = ({children}) => {
    return(
        <div style={{overflowY: 'scroll', height: '500px', border:'1px solid' }}>
            {children}
        </div>
    )
}

export default Scroll 